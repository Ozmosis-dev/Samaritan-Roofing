#!/usr/bin/env node
// Run: node scripts/optimize-images.js
// Requires: sharp (already in node_modules)

const sharp = require('sharp')
const { readdir, stat, rename } = require('fs/promises')
const { join, extname } = require('path')

const IMAGES_DIR = join(__dirname, '..', 'public', 'images')

// Max rendered width × 2 (2× retina). Values derived from component usage.
const LOGO_TARGETS = {
  'Asset-6SR-copy.png': 560,   // rendered max 280px
  'Asset-12SR.png':     480,   // rendered max 240px
}

const MAX_GENERAL_WIDTH = 1600
const REPORT = []

async function getSize(filePath) {
  const { size } = await stat(filePath)
  return size
}

function kb(bytes) {
  return (bytes / 1024).toFixed(1) + ' KB'
}

async function processImage(filePath, targetWidth, label) {
  const before = await getSize(filePath)
  const meta = await sharp(filePath).metadata()

  if (meta.width <= targetWidth) {
    REPORT.push({ file: label, status: 'skip', reason: `${meta.width}px ≤ ${targetWidth}px`, before: kb(before), after: '—', saved: '—' })
    return
  }

  const ext = extname(filePath).toLowerCase()
  const tmp = filePath + '.tmp'

  const pipeline = sharp(filePath).resize({ width: targetWidth, withoutEnlargement: true })

  if (ext === '.png') {
    await pipeline.png({ compressionLevel: 9, effort: 10 }).toFile(tmp)
  } else {
    await pipeline.jpeg({ quality: 85, mozjpeg: true }).toFile(tmp)
  }

  const after = await getSize(tmp)
  await rename(tmp, filePath)

  const saved = before - after
  REPORT.push({
    file: label,
    status: 'resized',
    reason: `${meta.width}px → ${targetWidth}px`,
    before: kb(before),
    after: kb(after),
    saved: kb(Math.abs(saved)) + (saved > 0 ? ' saved' : ' grew'),
  })
}

async function run() {
  console.log('Scanning images...\n')

  // --- Logos at actual rendered 2× size ---
  for (const [filename, targetWidth] of Object.entries(LOGO_TARGETS)) {
    const filePath = join(IMAGES_DIR, filename)
    await processImage(filePath, targetWidth, `images/${filename}`)
  }

  // --- General PNGs wider than 1600px ---
  const files = await readdir(IMAGES_DIR)
  for (const file of files) {
    if (file in LOGO_TARGETS) continue
    if (extname(file).toLowerCase() !== '.png') continue
    await processImage(join(IMAGES_DIR, file), MAX_GENERAL_WIDTH, `images/${file}`)
  }

  // --- Print report ---
  const COL = [68, 10, 12, 12, 30]
  const header = ['File', 'Status', 'Before', 'After', 'Note']
  console.log(header.map((h, i) => h.padEnd(COL[i])).join(''))
  console.log('—'.repeat(COL.reduce((a, b) => a + b, 0)))

  for (const row of REPORT) {
    console.log([
      row.file.padEnd(COL[0]),
      (row.status === 'resized' ? '✓' : '—').padEnd(COL[1]),
      row.before.padEnd(COL[2]),
      row.after.padEnd(COL[3]),
      row.status === 'resized' ? `${row.reason}  →  ${row.saved}` : row.reason,
    ].join(''))
  }

  const totalKb = REPORT
    .filter(r => r.status === 'resized')
    .reduce((acc, r) => acc + parseFloat(r.saved), 0)
  console.log(`\nTotal saved: ~${totalKb.toFixed(1)} KB`)
}

run().catch(err => { console.error(err); process.exit(1) })
