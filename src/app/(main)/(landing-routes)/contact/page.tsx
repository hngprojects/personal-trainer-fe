import { ContactForm } from '~/components/contact/contact-form'
import { FaqSection } from '~/components/contact/faq-section'
import { CtaSection } from '~/components/contact/cta-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - FitCall',
  description: "Get in touch with us. We're online & happy to help.",
}

export default function ContactPage() {
  return (
    <main className="w-full bg-[#F5F5F5]">
      {/* ── Hero Section ─────────────────────────────────────────
          Full-width bg. Content max-w 1440px, px 80px each side.
          Two columns: left text 40%, right form 60%, gap 72px.
          Padding: 80px top, 100px bottom.
      ──────────────────────────────────────────────────────────── */}
      <section className="w-full pb-16 pt-12 md:pb-[100px] md:pt-[80px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[80px]">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-[72px]">
            {/* Left — text block, vertically centered relative to form */}
            <div className="flex flex-col justify-center pt-8 md:justify-start">
              {/* Badge pill */}
              <div className="mb-7 inline-flex h-[32px] w-fit items-center gap-2 rounded-full bg-[#EAF4FF] px-4">
                <span className="h-[8px] w-[8px] flex-shrink-0 rounded-full bg-[#0B4D8D]" />
                <span className="text-[13px] font-medium leading-none text-[#0B4D8D]">
                  We&apos;re online &amp; happy to help
                </span>
              </div>

              {/* Hero H1 — 56px fills the space well on 1440px laptop */}
              <h1
                className="mb-6 font-bold text-[#111111]"
                style={{
                  fontSize: '56px',
                  lineHeight: '1.07',
                  letterSpacing: '-0.025em',
                }}
              >
                Get in touch
                <br />
                <span className="text-[#0B4D8D]">with us</span>
              </h1>

              {/* Body text — 17px, comfortable reading at laptop scale */}
              <p
                className="font-normal text-[#5B5B5B]"
                style={{
                  fontSize: '17px',
                  lineHeight: '1.7',
                  maxWidth: '380px',
                }}
              >
                Have questions about FitCall, trainers, or getting started?
                We&apos;re here to help &mdash; no scripts, just real humans.
              </p>
            </div>

            {/* Right — Contact Form */}
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </main>
  )
}
