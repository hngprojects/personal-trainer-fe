'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import { cn } from '~/utils'

const faqs = [
  {
    question: 'How do FitCall sessions work?',
    answer:
      'Our sessions are conducted over a simple phone call or video call. Your dedicated trainer will guide you through your customized workout, providing real-time feedback and motivation just like an in-person trainer.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes, absolutely. We believe in earning your business every month. There are no long-term contracts or cancellation fees. You can pause or cancel your subscription at any time through your account settings.',
  },
  {
    question: 'Do I need any equipment?',
    answer:
      "Not necessarily! Your trainer will design workouts based entirely on what you have available. Whether you have a full home gym, a pair of dumbbells, or just your body weight, we'll make sure you get a great workout.",
  },
]

export function FaqSection() {
  return (
    <section className="w-full bg-[#F5F5F5] pb-12 pt-12 md:pb-[80px] md:pt-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
        {/* Centered, max-w 800px for readability on laptop */}
        <div className="mx-auto max-w-[800px] text-center">
          {/* Badge */}
          <div className="inline-flex rounded-full bg-[#EAF4FF] px-4 py-[7px]">
            <span className="text-[13px] font-medium text-[#0B4D8D]">
              Quick answers
            </span>
          </div>

          {/* Section Heading — 36px fills nicely at laptop width */}
          <h2
            className="mb-3 mt-5 text-[24px] font-bold text-[#111111] md:text-[36px]"
            style={{ lineHeight: '1.15' }}
          >
            Before you reach out...
          </h2>

          {/* Subtext — 15px standard body */}
          <p className="text-[15px] font-normal text-[#666666]">
            You might find your answer here in seconds.
          </p>

          {/* FAQ list — mt 52px, left-aligned */}
          <div className="mt-[52px] text-left">
            <AccordionPrimitive.Root
              type="single"
              collapsible
              className="w-full"
            >
              {faqs.map((faq, index) => (
                <AccordionPrimitive.Item
                  key={faq.question}
                  value={`item-${index}`}
                  className={cn(
                    'border-b border-[#E8E8E8]',
                    index === 0 && 'border-t border-[#E8E8E8]'
                  )}
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className="group flex flex-1 items-center justify-between px-2 py-5 text-left"
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#222222',
                      }}
                    >
                      {faq.question}
                      <Plus
                        className="ml-4 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45"
                        style={{
                          width: '20px',
                          height: '20px',
                          color: '#222222',
                          strokeWidth: 1.5,
                        }}
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-2 pb-5 text-[14px] leading-[1.7] text-[#666666]">
                      {faq.answer}
                    </div>
                  </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
              ))}
            </AccordionPrimitive.Root>
          </div>
        </div>
      </div>
    </section>
  )
}
