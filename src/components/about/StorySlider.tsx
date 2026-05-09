'use client'

import Image from 'next/image'
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const story = {
  name: "Susan's Story",
  quote: '"I stopped watching other people workout"',
  images: [
    { src: '/images/about-us/our-mission.png', alt: "Susan's story" },
    { src: '/images/about-us/Franks-story.png', alt: "Frank's story" },
  ],
  paragraphs: [
    'I had 47 saved workout videos on TikTok. Pilates for beginners. 20-minute home HIIT. "Do this every morning and your life will change." I watched none of them.',
    "I wasn't lazy. I kept thinking I needed the perfect routine and time. So I kept saving.",
    'My friend sent me FitCall on a Tuesday night. I signed up mostly to stop her from sending me things. Wednesday morning, 7am — my phone rang. Not a notification. An actual call.',
    'It was my trainer. I was half-asleep but she was already warmed up. I had no excuses. We trained for 35 minutes. I was out of breath by minute eight and laughing by minute twenty.',
    "I still have 47 saved videos I haven't opened.",
  ],
}

const StorySlider = () => {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-10">
      <h2 className="mb-10 text-center text-3xl font-bold text-neutral-900 md:text-4xl">
        How FitCall changed my life
      </h2>

      <div className="mb-6">
        <p className="mb-1 text-sm font-semibold text-primary">{story.name}</p>
        <h3 className="text-xl font-bold text-neutral-900 md:text-2xl">
          {story.quote}
        </h3>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="lg:w-1/2">
          <Swiper
            modules={[Pagination, Autoplay, A11y]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="pb-10"
          >
            {story.images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={400}
                  className="h-full w-full rounded-lg object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="rounded-lg border border-border p-6 lg:w-1/2">
          <div className="flex flex-col gap-4 text-[16px] text-neutral-600">
            {story.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StorySlider
