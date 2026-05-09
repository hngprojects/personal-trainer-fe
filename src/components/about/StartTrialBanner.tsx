import Link from 'next/link'
import React from 'react'

const StartTrialBanner = () => {
  return (
    <div className="bg-white px-5 md:px-10">
      <div
        className="mx-auto my-6 flex min-h-[460px] max-w-7xl flex-col items-center justify-center rounded-[16px] px-6 py-12 text-white shadow-lg md:my-[52px] md:h-[503px] md:rounded-[24px] md:px-20"
        style={{
          background: 'linear-gradient(90deg, #063660 0%, #0C6FC6 100%)',
        }}
      >
        <h3 className="mb-4 max-w-3xl text-center text-[32px] font-bold leading-tight sm:text-[40px] md:text-[56px]">
          Stop skipping workouts. Start showing up.
        </h3>

        <p className="mx-auto mb-10 max-w-2xl text-center text-[16px] leading-relaxed opacity-90 md:text-[20px]">
          Your trainer will show up. So should you. Book your free session and
          feel the difference one phone call makes.
        </p>

        <Link
          href="/auth/register"
          className="flex h-[63px] w-[285px] items-center justify-center rounded-lg bg-[#F4F4F4] px-[18px] py-3 text-center text-[16px] font-semibold text-[#101928] transition-all hover:scale-105 hover:bg-white active:scale-95"
        >
          Start Free Trial
        </Link>
      </div>
    </div>
  )
}

export default StartTrialBanner
