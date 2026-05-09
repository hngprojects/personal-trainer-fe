const PricingHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#063660] px-5 pb-0 pt-16 text-white md:px-10 md:pt-24">
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 20%, rgba(255,255,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[860px] pb-20 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-[5px] text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
          <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-green-400" />
          Simple, transparent pricing
        </div>

        <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-[4rem]">
          Train smarter.{' '}
          <span className="bg-gradient-to-r from-sky-300 to-sky-100 bg-clip-text text-transparent">
            Pay for what you use.
          </span>
        </h1>

        <p className="mx-auto max-w-[600px] text-base text-white/80 md:text-lg">
          Start free. Book a single session or subscribe for ongoing coaching.
          FitCall handles all payments — you just show up and train.
        </p>
      </div>

      {/* Wave */}
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mb-[2px] -ml-[1px] block w-[calc(100%+2px)]"
        aria-hidden="true"
      >
        <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="white" />
      </svg>
    </section>
  )
}

export default PricingHero
