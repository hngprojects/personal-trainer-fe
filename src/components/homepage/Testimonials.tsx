'use client'

import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ChevronLeft, ChevronRight } from 'lucide-react' // Using Lucide for the arrow icons
import SectionHeader from '../ui/SectionHeader'
import TestimonialCard from './TestimonialCard'
import { testimonials } from './testimonials-data'

const Testimonials = () => {
  return (
    <section className="mt-12 overflow-hidden pb-14 md:mt-24">
      <div className="container relative">
        <SectionHeader
          badge="Our Testimonial"
          title="What people are saying"
          description="Real reviews from people having real lifestyle changes"
          align="center"
        />

        <div className="group relative mt-10 px-2">
          <div className="block">
            <button className="swiper-button-prev-custom absolute left-[-50px] top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:bg-primary hover:text-white disabled:opacity-50">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="swiper-button-next-custom absolute right-[-50px] top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:bg-primary hover:text-white disabled:opacity-50">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            spaceBetween={4}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialCard
                  image={item.image}
                  content={item.content}
                  name={item.name}
                  location={item.stack}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
