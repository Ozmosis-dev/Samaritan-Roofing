import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CTAForm from '@/components/CTAForm'
import WelcomeAbout from '@/components/WelcomeAbout'
import ServicesOverview from '@/components/ServicesOverview'
import ServicesGrid from '@/components/ServicesGrid'
import MidpageCTA from '@/components/MidpageCTA'
import WhyChooseUs from '@/components/WhyChooseUs'
import StormDamageCTA from '@/components/StormDamageCTA'
import Footer from '@/components/Footer'

const HappyCustomers = dynamic(() => import('@/components/HappyCustomers'), { ssr: true })
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true })
const LatestNews = dynamic(() => import('@/components/LatestNews'), { ssr: true })

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CTAForm />
        <WelcomeAbout />
        <ServicesOverview />
        <ServicesGrid />
        <MidpageCTA />
        <HappyCustomers />
        <WhyChooseUs />
        <StormDamageCTA />
        <Testimonials />
        <LatestNews />
      </main>
      <Footer />
    </>
  )
}
