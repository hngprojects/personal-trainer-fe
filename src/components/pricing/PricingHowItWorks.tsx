import {
  ActivityIcon,
  CalendarSmallIcon,
  CardIcon,
  DollarIcon,
} from '~/components/pricing/PricingIcons'

const steps = [
  {
    Icon: CardIcon,
    title: 'FitCall Collects',
    body: 'All client payments — one-time sessions or monthly subscriptions — are processed securely by FitCall. Trainers never handle payments themselves.',
    highlight: null,
  },
  {
    Icon: DollarIcon,
    title: 'Revenue Split',
    body: 'Revenue is split equally — 50% to the trainer, 50% to FitCall. Simple, fair, and always transparent.',
    highlight: '50 / 50',
  },
  {
    Icon: CalendarSmallIcon,
    title: 'Monthly Payout',
    body: 'Trainers receive their earnings at the end of every calendar month. No chasing invoices — it is automatic.',
    highlight: null,
  },
  {
    Icon: ActivityIcon,
    title: 'Earnings Dashboard',
    body: 'Trainers have access to a real-time dashboard showing total earnings, session history, and monthly payout status.',
    highlight: null,
  },
]

const PricingHowItWorks = () => {
  return (
    <section className="bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#063660]">
          Transparent by design
        </p>
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          How payments work
        </h2>
        <p className="max-w-[560px] text-base text-slate-500">
          FitCall collects all payments so trainers can focus entirely on
          coaching. Here&apos;s how the money flows.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ Icon, title, body, highlight }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef5ff]">
                <Icon className="stroke-[#063660]" />
              </div>
              {highlight && (
                <div className="mb-3 inline-flex items-center rounded-lg bg-gradient-to-r from-[#063660] to-[#0a4f8f] px-3 py-1 text-2xl font-extrabold tracking-tight text-white">
                  {highlight}
                </div>
              )}
              <h4 className="mb-2 text-base font-bold text-slate-900">
                {title}
              </h4>
              <p className="text-sm leading-relaxed text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingHowItWorks
