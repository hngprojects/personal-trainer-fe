'use client'

import React from 'react'
import Image from 'next/image'
import SectionHeader from '../ui/SectionHeader'
import { Button } from '../ui/button'
import Link from 'next/link'

interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '/images/landing-page/icons/ve.png',
    title: 'Verified Coaches',
    description: 'All trainers are verified and experienced professionals',
  },
  {
    icon: '/images/landing-page/icons/pe.png',
    title: 'Personalized Coaching',
    description: 'Get customized guidance built around your goals',
  },
  {
    icon: '/images/landing-page/icons/flex.png',
    title: 'Flexible & Convenient',
    description: 'Choose coaches that fit your schedule and lifestyle',
  },
  {
    icon: '/images/landing-page/icons/las.png',
    title: 'Lasting Results',
    description: 'Build healthy habits with support and accountability',
  },
]

const WhyChoose = () => {
  return (
    <section className="mt-12 w-full overflow-hidden pb-14 md:mt-24">
      <div className="container flex flex-col items-center">
        <SectionHeader
          badge="WHY CHOOSE FITCALL?"
          title="Coaching that fits your lifestyle"
          className="mb-6 md:mb-10"
          align="center"
          description="Every session has sets, reps, rest times, and a video demo. No gym floor confusion — open the app and follow."
        />
        <div className="lg:gap-46 grid w-full grid-cols-1 items-center gap-10 px-2 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col items-start">
            <div className="grid w-full max-w-xl gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 rounded-2xl border border-[#EBEBEB] px-4 py-3 md:gap-4 md:px-5 md:py-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center md:h-12 md:w-12">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-muted-foreground md:text-xl">
                      {feature.title}
                    </h4>
                    <p className="text-sm leading-snug text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
              <Button className="mx-2 mt-6 w-full">
                {' '}
                <Link href="/pricing">Get Fit Now</Link>
              </Button>
            </div>
          </div>

          <div className="relative flex aspect-[4/5] max-h-[600px] items-center justify-end">
            <div className="absolute left-[-5%] top-[15%] z-10 hidden w-[52%] md:block lg:left-[-20%]">
              <Image
                src="/images/landing-page/phone-left.png"
                alt="left phone"
                width={360}
                height={730}
                className="object-contain"
              />
            </div>

            <div className="absolute right-[40%] top-[5%] z-30 w-[56%] scale-110 md:left-[22%]">
              <Image
                src="/images/landing-page/phone-left.png"
                alt="center phone"
                width={400}
                height={612}
                className="object-contain"
              />
            </div>

            <div className="absolute top-[20%] z-20 w-[52%] md:left-[60%]">
              <Image
                src="/images/landing-page/phone-right.png"
                alt="right phone"
                width={360}
                height={730}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
