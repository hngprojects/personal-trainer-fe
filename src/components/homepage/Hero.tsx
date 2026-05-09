'use client'

import Image from 'next/image'
import Link from 'next/link'
import { A11y, Autoplay, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <section className="w-full overflow-hidden py-10 sm:py-20">
      <div className="container">
        <div className="flex flex-col-reverse items-center gap-12 px-2 sm:flex-row lg:items-center">
          <div className="w-full min-w-0 lg:w-1/2">
            <div className="mb-4 inline-flex max-w-full flex-wrap items-center rounded-full bg-primarybadge px-4 py-2 text-xs font-medium text-primary">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
              Live trainer accountability
            </div>
            <h1 className="mb-6 break-words text-left text-3xl font-bold leading-tight tracking-tight text-muted-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Stay consistent with real trainers
            </h1>

            <p className="mb-8 max-w-full break-words text-left text-base leading-relaxed text-muted lg:text-xl">
              FitCall pairs you with a real Nigerian trainer who calls you for
              every session, Zoom, WhatsApp, or audio. Real accountability,
              structured workouts, zero excuses.
            </p>

            <div className="mb-12 flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap">
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

                  <span className="truncate text-sm sm:text-base">
                    Download on AppStore
                  </span>
                </Link>
              </Button>

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

                  <span className="truncate text-sm sm:text-base">
                    Download on PlayStore
                  </span>
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-0.5 text-center sm:text-left md:gap-8">
              <div className="min-w-0">
                <p className="text-2xl font-bold lg:text-3xl">10+</p>

                <p className="mt-1 break-words text-xs font-medium tracking-wider text-muted">
                  Certified trainers
                </p>
              </div>

              <div className="min-w-0">
                <p className="text-2xl font-bold lg:text-3xl">12k+</p>

                <p className="mt-1 break-words text-xs font-medium tracking-wider text-muted">
                  Sessions delivered
                </p>
              </div>

              <div className="min-w-0">
                <p className="text-2xl font-bold lg:text-3xl">94%</p>

                <p className="mt-1 break-words text-xs font-medium tracking-wider text-muted-foreground">
                  Retention rate
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full min-w-0 justify-center lg:w-1/2">
            <div className="relative h-[320px] w-full max-w-[100%] overflow-hidden rounded-[2rem] sm:h-[420px] md:h-[500px] md:max-w-[500px] lg:h-[600px]">
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
