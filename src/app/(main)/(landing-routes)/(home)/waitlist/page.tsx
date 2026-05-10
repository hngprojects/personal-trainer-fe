import React from 'react'
import SuccessStory from '~/components/homepage/SuccessStory'
import Testimonials from '~/components/homepage/Testimonials'
import FindSomeoneSection from '~/components/squeeze/FindSomeone'
import FitnessLifestyle from '~/components/squeeze/FitnessLifestyle'
import ProgressSection from '~/components/squeeze/Progress'
import SqueezeFooter from '~/components/squeeze/SqueezeFooter'

const WaitList = () => {
  return (
    <section className="full bg-secondary py-6">
      <Testimonials />
      <ProgressSection />
      <SuccessStory />
      <FindSomeoneSection />
      <FitnessLifestyle />
      <SqueezeFooter />
    </section>
  )
}

export default WaitList
