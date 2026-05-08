'use client'

import Image from 'next/image'
import Link from 'next/link'
import { A11y, Autoplay, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Shadcn UI Components
import { Button } from '../ui/button'
import { HeroCheckMark } from './svgs'

const Hero = () => {
  return (
    <div className="py-14 sm:py-20">
      <div className="container px-5">
        <div className="flex flex-col items-center lg:flex-row lg:gap-16">
          {/* Left Content Section */}
          <div className="w-full text-center sm:text-left lg:w-1/2">
            <div className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-medium text-blue-900">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-900"></span>
              Live trainer accountability
            </div>

            {/* Responsive Heading: 4xl on mobile, 6xl on lg screens */}
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-6xl lg:leading-[1.1]">
              Stay consistent with real trainers
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl lg:pr-10">
              FitCall pairs you with a real Nigerian trainer who calls you for
              every session, Zoom, WhatsApp, or audio. Real accountability,
              structured workouts, zero excuses.
            </p>

            {/* App Store Buttons - Classes removed, using Link asChild */}
            <div className="flex flex-wrap justify-center gap-4 sm:justify-start md:mb-16">
              <Button asChild size="lg">
                <Link href="#" className="flex items-center gap-3">
                  <Image
                    src="/images/landing-page/apple.svg"
                    alt="Applestore"
                    width={22}
                    height={22}
                  />
                  <span className="">Download on AppStore</span>
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="#" className="flex items-center gap-3">
                  <Image
                    src="/images/landing-page/google-play.svg"
                    alt="Playstore"
                    width={22}
                    height={22}
                  />
                  <span className="">Download on PlayStore</span>
                </Link>
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-10">
              <div className="space-y-1">
                <p className="text-3xl font-bold tracking-tighter">10+</p>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Certified trainers
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold tracking-tighter">12k+</p>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Sessions delivered
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold tracking-tighter">94%</p>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Retention rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Image/Swiper Section */}
          <div className="mt-14 flex w-full justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-[2.5rem] md:h-[500px] lg:h-[600px]">
              <div className="absolute left-4 top-1/4 z-20 -translate-x-1/2 transform">
                <HeroCheckMark />
              </div>

              <Swiper
                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                speed={1200}
                className="h-full w-full"
              >
                <SwiperSlide>
                  <Image
                    src="/images/landing-page/hero.png"
                    alt="Professional Trainer"
                    fill
                    className="object-cover"
                    priority
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
