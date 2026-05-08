'use client'

import Heading from '../miscellaneous/heading'
import FaqAccordion from './accordin'

const faqCategories = [
  {
    category: 'General Questions',
    questions: [
      {
        question: 'What is FitCall.me?',
        answer:
          'FitCall.me is an accountability-driven fitness platform that connects users with real fitness trainers who help them stay consistent through scheduled sessions, reminders, and real human follow-up.',
      },
      {
        question: 'How is FitCall.me different from regular fitness apps?',
        answer:
          'Most fitness apps give you workout plans and leave you on your own. FitCall.me focuses on accountability — your trainer checks in, schedules sessions with you, and helps ensure you actually show up consistently.',
      },
      {
        question: 'Who is FitCall.me for?',
        answer:
          'FitCall.me is designed for people who struggle with consistency, repeatedly restart fitness routines, need accountability, prefer structured guidance, and want real human support instead of just workout videos.',
      },
      {
        question: 'Do I need to be fit before joining?',
        answer:
          'No. FitCall.me is for beginners, intermediate users, and anyone trying to build consistent fitness habits.',
      },
      {
        question: 'Is FitCall.me only for people in the US and UK?',
        answer:
          'Currently, FitCall.me primarily serves users in the US and UK while connecting them with professional Nigerian trainers.',
      },
    ],
  },
  {
    category: 'Trainer & Session Questions',
    questions: [
      {
        question: 'Who are the trainers on FitCall.me?',
        answer:
          'FitCall.me trainers are vetted fitness professionals with experience in coaching, accountability support, and structured fitness guidance.',
      },
      {
        question: 'Can I choose my own trainer?',
        answer:
          'Yes. You can browse trainers, view profiles, and choose the trainer that best matches your goals and personality.',
      },
      {
        question: 'What happens during a session?',
        answer:
          'Sessions may include accountability check-ins, workout guidance, motivation and encouragement, progress reviews, and structured coaching support.',
      },
      {
        question: 'What if I miss a session?',
        answer:
          'You can reschedule sessions based on trainer availability. FitCall.me also provides reminders to help reduce missed workouts.',
      },
      {
        question: 'Can I switch trainers later?',
        answer:
          'Yes. Users can change trainers if they feel another coach is a better fit for their goals.',
      },
    ],
  },
  {
    category: 'Accountability Questions',
    questions: [
      {
        question: 'What makes FitCall.me effective?',
        answer:
          'FitCall.me focuses on behavioral accountability, not just motivation. Regular check-ins and social accountability significantly improve workout consistency.',
      },
      {
        question: 'Why is accountability important in fitness?',
        answer:
          'Many people already know how to work out. The real challenge is staying consistent long enough to see results. Accountability creates structure, commitment, and follow-through.',
      },
      {
        question: 'Will trainers actually check in on me?',
        answer:
          'Yes. Accountability and consistent follow-up are core parts of the FitCall.me experience.',
      },
      {
        question: 'Is this like having a personal trainer?',
        answer:
          'Yes, but with a stronger emphasis on consistency, scheduling, accountability, and real human support.',
      },
    ],
  },
  {
    category: 'Subscription & Payment Questions',
    questions: [
      {
        question: 'Is there a free trial?',
        answer:
          'Yes. FitCall.me offers a free trial so users can experience the accountability system before subscribing.',
      },
      {
        question: 'When do I add payment details?',
        answer:
          'Users can explore trainers and experience the platform before subscribing to a paid plan.',
      },
      {
        question: 'Can I cancel anytime?',
        answer:
          'Yes. Users can manage or cancel subscriptions directly from their account settings.',
      },
      {
        question: 'Are there different subscription plans?',
        answer:
          'Yes. FitCall.me offers multiple plans depending on the number of guided sessions and accountability support included.',
      },
    ],
  },
  {
    category: 'Technical & Platform Questions',
    questions: [
      {
        question: 'Can I use FitCall.me from home?',
        answer:
          'Yes. FitCall.me is designed for remote accountability and virtual coaching.',
      },
      {
        question: 'What devices support FitCall.me?',
        answer:
          'FitCall.me works on modern smartphones, tablets, and web-enabled devices.',
      },
      {
        question: 'Will I receive reminders?',
        answer:
          'Yes. Users receive reminders for upcoming sessions and accountability check-ins.',
      },
      {
        question: 'Does FitCall.me include workout tracking?',
        answer:
          'The platform primarily focuses on accountability, scheduling, sessions, and consistency support rather than advanced workout tracking.',
      },
    ],
  },
  {
    category: 'Trust & Safety Questions',
    questions: [
      {
        question: 'Are trainers verified?',
        answer:
          'Yes. Trainers go through a vetting and approval process before joining the platform.',
      },
      {
        question: 'Is my payment information secure?',
        answer:
          'Yes. FitCall.me uses secure payment systems to protect user transactions and subscription management.',
      },
      {
        question: 'Can I report issues with a trainer or session?',
        answer:
          'Yes. Users can contact FitCall.me support if they experience issues with sessions, trainers, or scheduling.',
      },
    ],
  },
  {
    category: 'Brand Positioning',
    questions: [
      {
        question: 'Is FitCall.me a workout app?',
        answer:
          'Not exactly. FitCall.me is an accountability-first fitness platform designed to help users stop restarting and finally stay consistent.',
      },
      {
        question: 'What problem does FitCall.me actually solve?',
        answer:
          'FitCall.me solves the biggest problem in fitness: inconsistency. The platform helps users move from motivation-based fitness to accountability-driven consistency.',
      },
    ],
  },
]

const FaqPage = () => {
  return (
    <main className="mx-auto max-w-7xl bg-white px-5 py-10 sm:bg-transparent md:px-10 lg:px-10 xl:px-10">
      <Heading
        tag="FAQ"
        title="Frequently {{Asked}} Questions"
        content="Everything you need to know about FitCall"
      />
      <div className="mx-auto mb-40 mt-4 max-w-xl">
        {faqCategories.map((section, categoryIndex) => (
          <div key={categoryIndex} className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">{section.category}</h2>
            <FaqAccordion
              faqs={section.questions}
              containerClassName="sm:w-full px-4 py-1 bg-white"
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default FaqPage
