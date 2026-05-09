import Hero from '~/components/about/Hero'
import CoreBeliefs from '~/components/about/CoreBeliefs'
import ProblemSolution from '~/components/about/ProblemSolution'
import StartTrialBanner from '~/components/about/StartTrialBanner'

const AboutUs = () => {
  return (
    <div className="">
      <Hero />
      <ProblemSolution />
      <CoreBeliefs />
      <StartTrialBanner />
    </div>
  )
}

export default AboutUs
