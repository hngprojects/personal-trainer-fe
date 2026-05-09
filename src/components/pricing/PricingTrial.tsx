const PricingTrial = () => {
  return (
    <section className="border-b border-slate-200 bg-[#eef5ff] px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8">
        <div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#063660] md:text-3xl">
            🎉 Start with a free trial
          </h2>
          <p className="max-w-[480px] text-slate-500">
            New clients get a complimentary trial session before committing to
            any plan. Experience FitCall risk-free.
          </p>
        </div>
        <button className="rounded-full bg-[#063660] px-8 py-3 text-base font-bold text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#0a4f8f] hover:shadow-lg">
          Claim Free Trial
        </button>
      </div>
    </section>
  )
}

export default PricingTrial
