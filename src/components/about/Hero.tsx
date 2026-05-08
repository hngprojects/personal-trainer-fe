import Image from 'next/image'
import Heading from '../miscellaneous/heading'

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 lg:px-10 xl:px-10">
        <Heading
          tag="Our story"
          title="Built for people who are {{tired}} of starting over."
          content="Apps don't fix consistency. People do. FitCall pairs you with real trainers who guide every session, live, so you actually show up."
        />

        <div className="mt-[10px] w-full">
          <Image
            src="/images/about-us/aboutus1.svg"
            alt="FitCall app preview"
            className="w-full"
            width={1036}
            height={355}
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
