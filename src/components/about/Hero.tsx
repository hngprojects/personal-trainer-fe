import Image from 'next/image'
import SectionHeader from '../ui/SectionHeader'

const Hero = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div className="md:[&_h2]:text-5xl lg:[&_p]:text-lg">
          <SectionHeader
            badge="Our story"
            title="Built for people who are tired of starting over."
            description="Apps don't fix consistency. People do. FitCall pairs you with real trainers who guide every session, live, so you actually show up."
            align="center"
            className="mx-auto max-w-3xl"
          />
        </div>

        <div className="relative mt-12 w-full overflow-hidden rounded-2xl md:rounded-3xl">
          <Image
            src="/images/about-us/about.png"
            alt="Hero_image"
            width={1080}
            height={776}
            unoptimized
            className="mx-auto h-auto w-full object-cover md:h-[500px] lg:h-[700px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
