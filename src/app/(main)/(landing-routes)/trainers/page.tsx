'use client'
import React, { useState } from 'react'
import TrainerCard from '~/components/trainers/trainer-card'
import FaqAccordion from '~/components/faq/accordin'

const CATEGORIES = [
  'All',
  'Strength',
  'Yoga & Flexibility',
  'HIIT & Fat Loss',
  'Pilates & Core',
  'Mobility & Recovery',
  'Strength & Conditioning',
]

const TRAINERS = [
  {
    name: 'Tobi Adeyemi',
    sessions: 24,
    specialties: ['Strength', 'Mobility'],
    image: '/images/trainers/tobi.png',
  },
  {
    name: 'John Mathew',
    sessions: 24,
    specialties: ['Strength', 'Mobility'],
    image: '/images/trainers/john.png',
  },
  {
    name: 'Isreal Dennis',
    sessions: 24,
    specialties: ['Strength', 'Flexibility'],
    image: '/images/trainers/dennis.png',
  },
  {
    name: 'Ayobami Gabriel',
    sessions: 24,
    specialties: ['Pilate and core', 'Mobility', 'Yoga'],
    image: '/images/trainers/ayo.png',
  },
  {
    name: 'Bakare Samuel',
    sessions: 24,
    specialties: ['Strength', 'Mobility'],
    image: '/images/trainers/sam.png',
  },
  {
    name: 'James Gray',
    sessions: 24,
    specialties: ['Strength', 'Mobility'],
    image: '/images/trainers/gray.png',
  },
]

const FAQS = [
  {
    question: 'Do I pay anything to join the waitlist?',
    answer: 'No, joining the waitlist is completely free.',
  },
  {
    question: 'Which payment methods will FitCall accept?',
    answer: 'We will accept all major credit cards and bank transfers.',
  },
  {
    question: 'Can I switch plans?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time.',
  },
  {
    question: 'What happens if my trainer or I miss a call?',
    answer: 'You can reschedule your session based on our cancellation policy.',
  },
]

export default function TrainersPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
      {/* Header Section */}
      <div className="mb-12 flex flex-col items-center justify-center text-center">
        <span className="mb-6 rounded-full bg-[#EBF3FF] px-4 py-1.5 text-sm font-medium text-[#063660]">
          Trainer
        </span>
        <h1 className="mb-4 text-[64px] font-bold tracking-tight text-[#1C1C1C] md:text-[44px]">
          Meet your trainer.
        </h1>
        <p className="max-w-[600px] text-[24px] leading-relaxed text-[#5C5C5C]">
          Certified coaches, real session schedules. Filter by specialty or by
          what you want to achieve.
        </p>
      </div>

      {/* Filter Categories */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-5 py-2.5 text-[16px] font-medium transition-colors ${
              activeCategory === cat
                ? 'border-[#EBEBEB] bg-[#063660] text-white'
                : 'border-[#EBEBEB] bg-white text-[#5C5C5C] hover:bg-[#063660]/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Trainer Cards Grid */}
      <div className="mb-32 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TRAINERS.map((trainer, i) => (
          <TrainerCard
            key={i}
            name={trainer.name}
            imageSrc={trainer.image}
            sessionsCount={trainer.sessions}
            specialties={trainer.specialties}
          />
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <span className="mb-6 rounded-full bg-[#EDF4FD] px-4 py-1.5 text-[16px] font-normal text-[#063660]">
          FAQ
        </span>
        <h2 className="mb-10 text-center text-[32px] font-bold tracking-tight text-[#1C1C1C]">
          Frequently Asked Questions
        </h2>
        <FaqAccordion
          faqs={FAQS}
          containerClassName="bg-transparent p-0 w-full"
          triggerClassName="py-5 border-b-0 text-[16px] md:text-[18px] text-gray-800"
          contentClassName="pt-2 pb-6 text-gray-500 text-[15px]"
        />
      </div>
    </div>
  )
}
