import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CTAForm from '@/components/CTAForm'
import WelcomeAbout from '@/components/WelcomeAbout'
import ServicesOverview from '@/components/ServicesOverview'
import ServicesGrid from '@/components/ServicesGrid'
import MidpageCTA from '@/components/MidpageCTA'
import HappyCustomers from '@/components/HappyCustomers'
import WhyChooseUs from '@/components/WhyChooseUs'
import StormDamageCTA from '@/components/StormDamageCTA'
import Testimonials from '@/components/Testimonials'
import LatestNews from '@/components/LatestNews'
import Footer from '@/components/Footer'

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
