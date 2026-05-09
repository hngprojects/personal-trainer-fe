import type { Metadata } from 'next'

import PricingCTA from '~/components/pricing/PricingCTA'
import PricingCards from '~/components/pricing/PricingCards'
import PricingFAQ from '~/components/pricing/PricingFAQ'
import PricingHero from '~/components/pricing/PricingHero'
import PricingHowItWorks from '~/components/pricing/PricingHowItWorks'
import PricingTipping from '~/components/pricing/PricingTipping'
import PricingTrial from '~/components/pricing/PricingTrial'

export const metadata: Metadata = {
  title: 'Pricing — FitCall',
  description:
    'Simple, transparent pricing for personal training sessions. Start free, book one-time sessions or subscribe monthly.',
}

const PricingPage = () => {
  return (
    <div className="w-full">
      <PricingHero />
      <PricingTrial />
      <PricingCards />
      <PricingTipping />
      <PricingHowItWorks />
      <PricingFAQ />
      <PricingCTA />
    </div>
  )
}

export default PricingPage
