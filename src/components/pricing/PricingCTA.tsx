import Link from 'next/link'

const PricingCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#063660] to-[#0a4f8f] px-5 py-20 text-center text-white md:px-10 md:py-28">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-[200px] -top-[200px] h-[600px] w-[600px] rounded-full bg-white/[0.04]" />
      <div className="pointer-events-none absolute -bottom-[150px] -left-[100px] h-[400px] w-[400px] rounded-full bg-white/[0.04]" />

      <div className="relative z-10 mx-auto max-w-[680px]">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem]">
          Ready to start your fitness journey?
        </h2>
        <p className="text-white/78 mb-10 text-base md:text-lg">
          Begin with a free trial session. No credit card required. Just show up
          and train.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/waitlist"
            className="rounded-full bg-white px-8 py-3 text-base font-bold text-[#063660] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Start Free Trial
          </Link>
          <Link
            href="/trainers"
            className="rounded-full border-[1.5px] border-white/50 px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:border-white/80 hover:bg-white/10"
          >
            Browse Trainers
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PricingCTA
