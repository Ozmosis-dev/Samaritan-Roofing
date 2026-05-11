#!/usr/bin/env node
// Run: node scripts/compress-images.js
// Outputs to public/images/compressed/ — originals untouched until you review

const sharp = require('sharp')
const { readdir, stat, mkdir } = require('fs/promises')
const { join, extname, basename } = require('path')

const IMAGES_DIR = join(__dirname, '..', 'public', 'images')
const OUT_DIR = join(IMAGES_DIR, 'compressed')
const SKIP_UNDER_BYTES = 40 * 1024 // 40 KiB

const MAX_GENERAL_WIDTH = 1600
const MAX_LOGO_WIDTH = 400

// Files that are logos/icons — never displayed large, cap at 400px regardless of file size
const LOGO_FILES = new Set([
  'Asset-6SR-copy.png',
  'cropped-Asset-6SR-copy.png',
  'cropped-Asset-8SR.png',
  'CertainTeed-Logo.png',
  '1200px-Owens_Corning_logo.svg_.png',
  'Asset-9SR.png',
  'Asset-10SR.png',
  'Asset-11SR.png',
])

const REPORT = []

function kb(bytes) {
  return (bytes / 1024).toFixed(1) + ' KB'
}

function pct(before, after) {
  return (((before - after) / before) * 100).toFixed(0) + '%'
}

async function processImage(file) {
  const inPath = join(IMAGES_DIR, file)
  const outPath = join(OUT_DIR, file)
  const ext = extname(file).toLowerCase()
  const isLogo = LOGO_FILES.has(file)

  const { size: beforeBytes } = await stat(inPath)
  const meta = await sharp(inPath).metadata()

  // Skip small non-logo files
  if (!isLogo && beforeBytes < SKIP_UNDER_BYTES) {
    REPORT.push({
      file,
      status: 'skip',
      note: `${kb(beforeBytes)} < 40 KB threshold`,
      before: kb(beforeBytes),
      after: '—',
      saved: '—',
    })
    return
  }

  const targetWidth = isLogo ? MAX_LOGO_WIDTH : MAX_GENERAL_WIDTH
  const needsResize = meta.width > targetWidth

  let pipeline = sharp(inPath)
  if (needsResize) {
    pipeline = pipeline.resize({ width: targetWidth, withoutEnlargement: true })
  }

  let outPipeline
  if (ext === '.jpg' || ext === '.jpeg') {
    outPipeline = pipeline.jpeg({ quality: 75, progressive: true, mozjpeg: true })
  } else if (ext === '.png') {
    // Try palette first (good for logos/flat graphics); falls back gracefully for photos
    try {
      outPipeline = pipeline.png({ compressionLevel: 9, palette: true, effort: 10 })
    } catch {
      outPipeline = pipeline.png({ compressionLevel: 9, effort: 10 })
    }
  } else {
    REPORT.push({ file, status: 'skip', note: 'unsupported format', before: kb(beforeBytes), after: '—', saved: '—' })
    return
  }

  await outPipeline.toFile(outPath)

  const { size: afterBytes } = await stat(outPath)
  const savedBytes = beforeBytes - afterBytes
  const resizeNote = needsResize ? ` | ${meta.width}px→${targetWidth}px` : ''

  REPORT.push({
    file,
    status: savedBytes > 0 ? 'compressed' : 'grew',
    note: `${pct(beforeBytes, afterBytes)} smaller${resizeNote}`,
    before: kb(beforeBytes),
    after: kb(afterBytes),
    saved: savedBytes > 0 ? kb(savedBytes) + ' saved' : kb(Math.abs(savedBytes)) + ' GREW',
  })
}

async function run() {
  await mkdir(OUT_DIR, { recursive: true })
  console.log(`Output dir: ${OUT_DIR}\n`)

  const files = (await readdir(IMAGES_DIR)).filter(f => {
    const ext = extname(f).toLowerCase()
    return ['.jpg', '.jpeg', '.png'].includes(ext)
  })

  console.log(`Processing ${files.length} images...\n`)

  for (const file of files.sort()) {
    process.stdout.write(`  ${file} ... `)
    try {
      await processImage(file)
      const last = REPORT[REPORT.length - 1]
      console.log(last.status === 'skip' ? `skipped (${last.note})` : `${last.before} → ${last.after} (${last.saved})`)
    } catch (err) {
      console.log(`ERROR: ${err.message}`)
      REPORT.push({ file, status: 'error', note: err.message, before: '—', after: '—', saved: '—' })
    }
  }

  // Summary table
  const COL = [60, 12, 12, 20]
  console.log('\n' + '='.repeat(COL.reduce((a, b) => a + b, 0)))
  console.log(['File', 'Before', 'After', 'Note'].map((h, i) => h.padEnd(COL[i])).join(''))
  console.log('—'.repeat(COL.reduce((a, b) => a + b, 0)))

  for (const r of REPORT) {
    const flag = r.status === 'compressed' ? '✓' : r.status === 'grew' ? '!' : ' '
    console.log([
      `${flag} ${r.file}`.padEnd(COL[0]),
      r.before.padEnd(COL[1]),
      r.after.padEnd(COL[2]),
      r.note,
    ].join(''))
  }

  const totalSaved = REPORT
    .filter(r => r.status === 'compressed')
    .reduce((acc, r) => acc + parseFloat(r.saved), 0)

  const processed = REPORT.filter(r => r.status === 'compressed').length
  const skipped = REPORT.filter(r => r.status === 'skip').length
  console.log(`\n${processed} compressed, ${skipped} skipped`)
  console.log(`Total saved: ~${totalSaved.toFixed(0)} KB`)
  console.log(`\nReview output in: public/images/compressed/`)
  console.log('Replace originals when satisfied.')
}

run().catch(err => { console.error(err); process.exit(1) })
