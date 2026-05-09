import React from 'react'
import SuccessStory from '~/components/homepage/SuccessStory'
import Testimonials from '~/components/homepage/Testimonials'
import FindSomeoneSection from '~/components/squeeze/FindSomeone'
import ProgressSection from '~/components/squeeze/Progress'

const Waitlist = () => {
  return (
    <div>
      <section className="full bg-secondary py-6">
        <Testimonials />
        <ProgressSection />
      </section>
      <SuccessStory />
      <FindSomeoneSection />
    </div>
  )
}

export default Waitlist
