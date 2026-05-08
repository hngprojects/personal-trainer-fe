'use client'

import Heading from '../miscellaneous/heading'
import FaqAccordion from './accordin'

const faqs = [
  {
    question: 'What is FitCall and how does it work?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'What types of training sessions does FitCall offer?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'How do I book a session with a FitCall trainer?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
        <FaqAccordion
          faqs={faqs}
          containerClassName="sm:w-full px-4 py-1 bg-white"
        />
      </div>
    </main>
  )
}

export default FaqPage
