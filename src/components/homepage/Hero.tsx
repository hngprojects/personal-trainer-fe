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
    // Prevents horizontal overflow
    <section className="w-full overflow-hidden py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center gap-12 sm:flex-row lg:items-center">
          {/* ================= TEXT SECTION ================= */}
          <div className="w-full min-w-0 lg:w-1/2">
            <div className="mb-4 inline-flex max-w-full flex-wrap items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-900">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-900"></span>
              Live trainer accountability
            </div>
            <h1 className="mb-6 break-words text-left text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Stay consistent with real trainers
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-full break-words text-left text-base leading-relaxed text-muted-foreground lg:text-xl">
              FitCall pairs you with a real Nigerian trainer who calls you for
              every session, Zoom, WhatsApp, or audio. Real accountability,
              structured workouts, zero excuses.
            </p>

            {/* ================= BUTTONS ================= */}
            <div className="mb-12 flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap">
              {/* App Store Button */}
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link
                  href="#"
                  className="flex w-full items-center justify-center gap-3 text-center"
                >
                  <Image
                    src="/images/landing-page/apple.svg"
                    alt="Applestore"
                    width={22}
                    height={22}
                  />

                  {/* Prevents text overflow */}
                  <span className="truncate text-sm sm:text-base">
                    Download on AppStore
                  </span>
                </Link>
              </Button>

              {/* Play Store Button */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link
                  href="#"
                  className="flex w-full items-center justify-center gap-3 text-center"
                >
                  <Image
                    src="/images/landing-page/google-play.svg"
                    alt="Playstore"
                    width={22}
                    height={22}
                  />

                  {/* Prevents text overflow */}
                  <span className="truncate text-sm sm:text-base">
                    Download on PlayStore
                  </span>
                </Link>
              </Button>
            </div>

            {/* ================= STATS ================= */}
            <div className="grid grid-cols-3 gap-8 text-center sm:text-left">
              <div className="min-w-0">
                <p className="text-2xl font-bold lg:text-3xl">10+</p>

                <p className="mt-1 break-words text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Certified trainers
                </p>
              </div>

              <div className="min-w-0">
                <p className="text-2xl font-bold lg:text-3xl">12k+</p>

                <p className="mt-1 break-words text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Sessions delivered
                </p>
              </div>

              <div className="min-w-0">
                <p className="text-2xl font-bold lg:text-3xl">94%</p>

                <p className="mt-1 break-words text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Retention rate
                </p>
              </div>
            </div>
          </div>

          {/* ================= IMAGE SECTION ================= */}
          <div className="flex w-full min-w-0 justify-center lg:w-1/2">
            <div className="relative h-[320px] w-full max-w-[100%] overflow-hidden rounded-[2rem] sm:h-[420px] md:h-[500px] md:max-w-[500px] lg:h-[600px]">
              <div className="absolute left-3 top-1/4 z-20 sm:left-4">
                <HeroCheckMark />
              </div>

              {/* Swiper */}
              <Swiper
                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop
                speed={1200}
                className="h-full w-full"
              >
                <SwiperSlide>
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/landing-page/hero.png"
                      alt="Professional Trainer"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
