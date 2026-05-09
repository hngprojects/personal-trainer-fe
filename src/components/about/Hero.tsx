import Image from 'next/image'
import Heading from '../miscellaneous/heading'

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-10 md:py-16 lg:px-10 xl:px-10">
        <Heading
          tag="Our story"
          title={'Built for people who are tired \nof starting over.'}
          content={`Apps don't fix consistency. People do. FitCall pairs you with real trainers who guide every session, live, so you actually show up.`}
        />

        <div className="w-full overflow-hidden">
          <Image
            src="/images/about-us/hero.svg"
            alt="Hero_image"
            width={1280}
            height={776}
            unoptimized
            className="mx-auto h-[257px] w-[358px] rounded-xl object-cover md:h-[776px] md:w-[1280px] md:rounded-3xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
