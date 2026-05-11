'use client'

import { trackPhoneCall } from '@/lib/gtag'

interface Props {
  href: string
  phoneNumber: string
  location: string
  className?: string
  children: React.ReactNode
}

export default function TrackedPhoneLink({ href, phoneNumber, location, className, children }: Props) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackPhoneCall(phoneNumber, location)}
    >
      {children}
    </a>
  )
}
