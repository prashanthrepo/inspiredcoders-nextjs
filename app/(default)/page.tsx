export const metadata = {
  title: 'Inspired Coders',
  description:
    'Inspired Coders is a community of coders who are inspired to learn and share their knowledge with others.',
};

import Hero from '@/components/hero'
import Clients from '@/components/clients'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Features04 from '@/components/features-04'
import Pricing from '@/components/pricing'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Features02 />
      <Features03 />
      <TestimonialsCarousel />
      <Features04 />
      <Pricing />
      <Testimonials />
      <Cta />
    </>
  )
}
