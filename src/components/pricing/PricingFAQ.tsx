'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need to subscribe to try FitCall?',
    a: 'Nope! New clients get a free trial session to experience FitCall before committing to any paid plan. After your trial, you can choose a one-time session or a monthly subscription.',
  },
  {
    q: 'How does the one-time session work?',
    a: 'With a one-time session, you simply pay for a single training session with a trainer of your choice. No recurring charges, no commitment. Perfect for those who prefer flexibility or are still exploring different trainers.',
  },
  {
    q: 'What does the monthly subscription include?',
    a: 'The monthly subscription gives you a set number of sessions per month on a recurring basis. The exact session frequency is being finalized — once confirmed, all details will be shown here. You can cancel anytime.',
  },
  {
    q: 'How do trainers get paid?',
    a: 'FitCall collects all payments from clients. Revenue is split 50/50 between the trainer and FitCall. Trainers are paid out automatically at the end of every calendar month and can track all earnings in their personal dashboard.',
  },
  {
    q: 'Are tips mandatory?',
    a: 'Tips are entirely optional. After each session, clients have the option to tip their trainer. 100% of any tip goes directly to the trainer — FitCall does not take a cut of tips.',
  },
  {
    q: 'Can I cancel my monthly subscription?',
    a: "Yes, you can cancel anytime from your account settings. Your access continues until the end of your current billing period and you won't be charged again after cancellation.",
  },
]

const ChevronIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="bg-slate-50 px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1200px] text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#063660]">
          Got questions?
        </p>
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Frequently asked
        </h2>
        <p className="mx-auto max-w-[560px] text-base text-slate-500">
          Everything you need to know about FitCall pricing and payments.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-[760px] flex-col gap-3">
        {faqs.map(({ q, a }, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className={`overflow-hidden rounded-xl border-[1.5px] bg-white transition-colors duration-200 ${
                isOpen
                  ? 'border-[#d6e9ff]'
                  : 'border-slate-200 hover:border-[#d6e9ff]'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-slate-900 md:text-base">
                  {q}
                </span>
                <span
                  className={`duration-250 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all ${
                    isOpen
                      ? 'rotate-180 bg-[#063660] stroke-white'
                      : 'bg-[#eef5ff] stroke-[#063660]'
                  }`}
                >
                  <ChevronIcon />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[300px]' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500">
                  {a}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PricingFAQ
