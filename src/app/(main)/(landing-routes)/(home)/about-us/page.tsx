import CoreValues from '~/components/about/CoreValues'
import ExecutiveTeam from '~/components/about/ExecutiveTeam'
import Hero from '~/components/about/Hero'
import Join from '~/components/about/Join'
import Mission from '~/components/about/Mission'
import OurServices from '~/components/about/OurServices'
import StorySlider from '~/components/about/StorySlider'

const AboutUs = () => {
  return (
    <div className="">
      <Hero />
      <OurServices />
      <Mission />
      <StorySlider />
      <CoreValues />
      <ExecutiveTeam />
      <Join />
    </div>
  )
}

export default AboutUs
