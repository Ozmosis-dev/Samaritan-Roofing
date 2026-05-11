// GA4 event helpers
// window.gtag is loaded by the Script tag in layout.tsx

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}

// Fire when the contact form submits successfully.
// 'generate_lead' is a GA4 recommended event — it shows up in
// Conversions reports automatically once marked as a conversion.
export function trackFormSubmit() {
  trackEvent('generate_lead', {
    form_name: 'contact_form',
    method: 'web_form',
  })
}

// Fire when any phone link is clicked.
export function trackPhoneCall(phoneNumber: string, location: string) {
  trackEvent('phone_call', {
    phone_number: phoneNumber,
    link_location: location,
  })
}
