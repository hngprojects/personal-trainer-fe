import Image from 'next/image'
import SectionHeader from '../ui/SectionHeader'

const SuccessStory = () => {
  return (
    <section className="mt-16 w-full pb-14 md:mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="How FitCall changed my life"
          className="mb-8 md:mb-14"
        />

        <div className="space-y-6">
          <div className="text-left">
            <span className="text-lg font-medium tracking-wide text-primary">
              Susan&apos;s Story
            </span>
            <h3 className="mt-2 text-xl font-bold text-muted-foreground md:text-2xl">
              &ldquo;I stopped watching other people workout&rdquo;
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 overflow-hidden px-2 pt-10 md:grid-cols-2 lg:gap-20">
            <div className="relative min-h-[300px] max-w-[600px] md:min-h-[400px]">
              <Image
                src="/images/landing-page/success.png"
                alt="Susan's transformation story"
                fill
                className="rounded-xl object-cover"
                priority
              />
            </div>

            <div className="flex flex-col justify-center rounded-xl border border-gray-100 p-8 shadow-sm md:p-12 lg:p-16">
              <div className="space-y-6 text-base leading-relaxed text-muted md:text-base">
                <p>
                  I had 47 saved workout videos on TikTok. Pilates for
                  beginners. 20-minute home HIIT. &ldquo;Do this every morning
                  and your life will change.&rdquo; I watched none of them.
                </p>
                <p>
                  I wasn&apos;t lazy. I kept thinking I needed the perfect
                  routine and time. So I kept saving.
                </p>
                <p>
                  My friend sent me FitCall on a Tuesday night. I signed up
                  mostly to stop her from sending me things. Wednesday morning,
                  7am - my phone rang. Not a notification. An actual call.
                </p>
                <p>
                  It was my trainer. I was half-asleep but she was already
                  warmed up. I had no excuses. We trained for 35 minutes. I was
                  out of breath by minute eight and laughing by minute twenty.
                </p>
                <p className="font-semibold text-gray-400">
                  I still have 47 saved videos I haven&apos;t opened.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStory
