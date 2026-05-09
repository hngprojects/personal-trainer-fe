const PricingTipping = () => {
  return (
    <section className="bg-slate-50 px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto flex max-w-[900px] flex-wrap items-center gap-10 rounded-[22px] border-[1.5px] border-slate-200 bg-white p-10 shadow-sm md:gap-12 md:p-14">
          <div className="flex h-[120px] w-[120px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#eef5ff] to-[#d6e9ff] text-[3.5rem]">
            💝
          </div>
          <div className="min-w-[220px] flex-1">
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#063660]">
              Show your trainer some love
            </h3>
            <p className="text-sm leading-relaxed text-slate-500 md:text-base">
              Had an exceptional session? FitCall makes it easy to tip your
              trainer directly after each session. Tipping is completely
              optional but always appreciated —{' '}
              <span className="font-semibold text-slate-700">
                100% of tips go directly to your trainer.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingTipping
