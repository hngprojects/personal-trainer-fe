'use client'

import Image from 'next/image'
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const stories = [
  {
    name: "Susan's Story",
    quote: '"I stopped watching other people workout"',
    image: { src: '/images/about-us/our-mission.png', alt: "Susan's story" },
    paragraphs: [
      'I had 47 saved workout videos on TikTok. Pilates for beginners. 20-minute home HIIT. "Do this every morning and your life will change." I watched none of them.',
      "I wasn't lazy. I kept thinking I needed the perfect routine and time. So I kept saving.",
      'My friend sent me FitCall on a Tuesday night. I signed up mostly to stop her from sending me things. Wednesday morning, 7am — my phone rang. Not a notification. An actual call.',
      'It was my trainer. I was half-asleep but she was already warmed up. I had no excuses. We trained for 35 minutes. I was out of breath by minute eight and laughing by minute twenty.',
      "I still have 47 saved videos I haven't opened.",
    ],
  },
  {
    name: "Frank's Story",
    quote: '"I stopped quitting the day my trainer called"',
    image: { src: '/images/about-us/Franks-story.png', alt: "Frank's story" },
    paragraphs: [
      "I wasn't unfit. I was just inconsistent. Gym membership, long forms, guilt, repeat. I had the intention every single Sunday. By Wednesday it was gone. I used to save workout routines at 1am like that was the same as doing them. Downloaded apps, bought a resistance band I used twice. I was really good at starting.",
      'Then my trainer called. Not a push notification. An actual video call at 6:30am. He was already moving, no waiting for me to feel ready.',
      "I've done that 20 times now. I haven't cancelled once.",
      "By session twelve I stopped checking how many calories I burned. By session twenty I realised it became about being someone who doesn't quit.",
    ],
  },
]

const StorySlider = () => {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-10">
      <h2 className="mb-10 text-center text-3xl font-bold text-neutral-900 md:text-4xl">
        How FitCall changed my life
      </h2>

      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="pb-12"
      >
        {stories.map((story, index) => (
          <SwiperSlide key={index}>
            <div className="mb-6">
              <p className="mb-1 text-sm font-semibold text-primary">
                {story.name}
              </p>
              <h3 className="text-xl font-bold text-neutral-900 md:text-2xl">
                {story.quote}
              </h3>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="lg:w-1/2">
                <Image
                  src={story.image.src}
                  alt={story.image.alt}
                  width={500}
                  height={400}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>

              <div className="rounded-lg border border-border p-6 lg:w-1/2">
                <div className="flex flex-col gap-4 text-[16px] text-neutral-600">
                  {story.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default StorySlider
