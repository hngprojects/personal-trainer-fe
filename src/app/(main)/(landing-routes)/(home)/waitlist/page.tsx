import React from 'react'
import IntegrationsBar from '~/components/homepage/HeroBottom'
import SuccessStory from '~/components/homepage/SuccessStory'
import Testimonials from '~/components/homepage/Testimonials'
import FindSomeoneSection from '~/components/squeeze/FindSomeone'
import FitnessLifestyle from '~/components/squeeze/FitnessLifestyle'
import Hero from '~/components/squeeze/Hero'
import ProgressSection from '~/components/squeeze/Progress'
import SqueezeFooter from '~/components/squeeze/SqueezeFooter'
import TrainerReady from '~/components/squeeze/TrainerReady'

const WaitList = () => {
  return (
    <section className="full py-6">
      <Hero />
      <IntegrationsBar />
      <section className="bg-secondary py-6">
        <Testimonials />
        <ProgressSection />
      </section>
      <SuccessStory />
      <FindSomeoneSection />
      <FitnessLifestyle />
      <TrainerReady />
      <SqueezeFooter />
    </section>
  )
}

export default WaitList
