import Image from 'next/image'

const Mission = () => {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-10">
      <div className="flex flex-col-reverse items-center lg:flex-row">
        <div className="w-full md:pr-10 lg:mb-0 lg:w-3/4">
          <Image
            src="/images/about-us/our-mission.svg"
            alt="FitCall user story"
            width={130}
            height={300}
            className="w-full"
          />
        </div>

        <div className="mb-8 items-start lg:w-2/3">
          <div
            className="flex flex-col gap-4 text-[16px] font-[400] text-neutral-600 sm:text-[17px] md:text-[18px]"
            data-testid="description web"
          >
            <p>
              I had 47 saved workout videos on TikTok. Pilates for beginners.
              20-minute home HIIT. &ldquo;Do this every morning and your life
              will change.&rdquo; I watched none of them.
            </p>
            <p>
              I wasn&apos;t lazy. I kept thinking I needed the perfect routine
              and time. So I kept saving.
            </p>
            <p>
              My friend sent me FitCall on a Tuesday night. I signed up mostly
              to stop her from sending me things. Wednesday morning, 7am &mdash;
              my phone rang. Not a notification. An actual call.
            </p>
            <p>
              It was my trainer. I was half-asleep but she was already warmed
              up. I had no excuses. We trained for 35 minutes. I was out of
              breath by minute eight and laughing by minute twenty.
            </p>
            <p>I still have 47 saved videos I haven&apos;t opened.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
