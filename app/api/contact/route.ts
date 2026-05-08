import { Resend } from 'resend'
import { NextRequest } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const { name, phone, email, zipcode, message, date } = await request.json()

  if (!name || !phone || !email) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.RESEND_TO_EMAIL!,
    replyTo: email,
    subject: `New Estimate Request from ${name}`,
    html: `
      <h2>New Estimate Request</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        ${zipcode ? `<tr><td><strong>Zipcode</strong></td><td>${zipcode}</td></tr>` : ''}
        ${date ? `<tr><td><strong>Requested Date</strong></td><td>${date}</td></tr>` : ''}
        ${message ? `<tr><td><strong>Message</strong></td><td>${message}</td></tr>` : ''}
      </table>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return Response.json({ success: true })
}
