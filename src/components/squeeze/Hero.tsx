'use client'

import Image from 'next/image'
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

            <h1 className="mb-6 break-words text-left text-4xl font-bold leading-tight tracking-tight text-muted-foreground sm:text-5xl md:text-6xl">
              Never miss a workout session
            </h1>

            <p className="mb-8 max-w-full break-words text-left text-base leading-relaxed text-muted">
              Find a vetted Nigerian fitness trainer who calls you at your
              scheduled time — live, on video. Kindly fill the form and download
              FitCall today.
            </p>

            <div className="flex w-full max-w-lg flex-col gap-3">
              <input
                type="text"
                placeholder="Full name"
                className="min-h-12 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-muted outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="min-h-12 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-muted outline-none focus:border-primary"
              />
              <Button type="submit"> Submit</Button>
            </div>
          </div>

          <div className="flex w-full min-w-0 justify-center lg:w-1/2">
            <div className="relative h-[320px] w-full max-w-[100%] overflow-hidden rounded-[2rem] sm:h-[420px] md:h-[500px] md:max-w-[500px] lg:h-[600px]">
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
