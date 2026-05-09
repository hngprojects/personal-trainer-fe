import { CheckIcon } from '~/components/pricing/PricingIcons'

const oneTimeFeatures = [
  'One session with a certified trainer',
  'Choose any available trainer',
  'Secure payment via FitCall',
  'No commitment required',
  'Option to tip your trainer',
]

const monthlyFeatures = [
  'Multiple sessions per month',
  'Consistent trainer relationship',
  'Flexible session scheduling',
  'Monthly billing via FitCall',
  'Cancel anytime',
  'Option to tip your trainer',
]

const trainerFeatures = [
  '50/50 revenue split with FitCall',
  'Paid at end of each calendar month',
  'Earnings dashboard & tracking',
  'No payment collection hassle',
  'Keep client tips in full',
]

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[26px] w-[26px]"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const LightningIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[26px] w-[26px]"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const PeopleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[26px] w-[26px]"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const PricingCards = () => {
  return (
    <section className="bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#063660]">
            Subscription options
          </p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Pick your training style
          </h2>
          <p className="max-w-[560px] text-base text-slate-500">
            Whether you prefer flexibility or commitment, we&apos;ve got a plan
            that fits your rhythm.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* One-Time Session */}
          <div className="rounded-[22px] border-[1.5px] border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d6e9ff] hover:shadow-xl">
            <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#eef5ff]">
              <span className="stroke-[#063660]">
                <CalendarIcon />
              </span>
            </div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#063660]">
              Single
            </p>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900">
              One-Time Session
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-500">
              Book a single session whenever you need it. Great for trying out
              different trainers or fitting in a one-off workout.
            </p>

            <div className="my-6 h-px bg-slate-100" />

            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold tracking-tight text-[#063660]">
                Pay
              </span>
              <span className="text-2xl font-bold text-slate-400">
                /session
              </span>
            </div>

            <ul className="mb-8 flex flex-col gap-3">
              {oneTimeFeatures.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-[10px] text-sm text-slate-700"
                >
                  <span className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef5ff]">
                    <CheckIcon className="stroke-[#063660]" />
                  </span>
                  {feat}
                </li>
              ))}
            </ul>

            <button className="w-full rounded-xl border-[1.5px] border-[#d6e9ff] bg-[#eef5ff] py-3 text-sm font-bold text-[#063660] transition-all duration-200 hover:-translate-y-px hover:border-transparent hover:bg-[#063660] hover:text-white hover:shadow-md">
              Book a Session
            </button>
          </div>

          {/* Monthly Subscription — Featured */}
          <div className="relative scale-[1.03] rounded-[22px] bg-gradient-to-b from-[#063660] to-[#0a509a] p-8 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg">
              Most Popular
            </div>

            <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-white/15">
              <span className="stroke-white">
                <LightningIcon />
              </span>
            </div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-white/65">
              Monthly
            </p>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-white">
              Monthly Subscription
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-white/75">
              Commit to your goals with a recurring monthly plan. Consistent
              coaching for lasting results.
            </p>

            <div className="my-6 h-px bg-white/15" />

            <div className="mb-1 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold tracking-tight text-white">
                Recurring
              </span>
            </div>
            <p className="mb-6 text-xs text-white/55">
              Sessions per month — details coming soon
            </p>

            <ul className="mb-8 flex flex-col gap-3">
              {monthlyFeatures.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-[10px] text-sm text-white/90"
                >
                  <span className="bg-white/18 mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                    <CheckIcon className="stroke-white" />
                  </span>
                  {feat}
                </li>
              ))}
            </ul>

            <button className="w-full rounded-xl bg-white py-3 text-sm font-bold text-[#063660] transition-all duration-200 hover:-translate-y-px hover:bg-primary hover:text-white hover:shadow-lg">
              Join the Waitlist
            </button>
          </div>

          {/* For Trainers */}
          <div className="rounded-[22px] border-[1.5px] border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d6e9ff] hover:shadow-xl">
            <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#eef5ff]">
              <span className="stroke-[#063660]">
                <PeopleIcon />
              </span>
            </div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#063660]">
              Trainers
            </p>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900">
              For Trainers
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-500">
              Focus on what you do best — coaching. FitCall manages all your
              payments and client billing seamlessly.
            </p>

            <div className="my-6 h-px bg-slate-100" />

            <div className="mb-6 flex items-baseline gap-2">
              <span className="rounded-lg bg-gradient-to-r from-[#063660] to-[#0a4f8f] px-3 py-1 text-4xl font-extrabold tracking-tight text-white">
                50%
              </span>
              <span className="text-base text-slate-400">revenue share</span>
            </div>

            <ul className="mb-8 flex flex-col gap-3">
              {trainerFeatures.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-[10px] text-sm text-slate-700"
                >
                  <span className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef5ff]">
                    <CheckIcon className="stroke-[#063660]" />
                  </span>
                  {feat}
                </li>
              ))}
            </ul>

            <button className="w-full rounded-xl border-[1.5px] border-[#d6e9ff] bg-[#eef5ff] py-3 text-sm font-bold text-[#063660] transition-all duration-200 hover:-translate-y-px hover:border-transparent hover:bg-[#063660] hover:text-white hover:shadow-md">
              Become a Trainer
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingCards
