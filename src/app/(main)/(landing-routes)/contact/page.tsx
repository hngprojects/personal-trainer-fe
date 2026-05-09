import { ContactForm } from '~/components/contact/contact-form'
import { Metadata } from 'next'
import CTASection from '~/components/homepage/Cta'
import FAQSection from '~/components/homepage/Faq'

export const metadata: Metadata = {
  title: 'Contact Us - FitCall',
  description: "Get in touch with us. We're online & happy to help.",
}

export default function ContactPage() {
  return (
    <main className="w-full bg-secondary">
      <section className="w-full pb-10 pt-12 md:pb-[120px] md:pt-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#D1E9FF] bg-primarybadge px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">
                  We&apos;re online & happy to help
                </span>
              </div>

              <h1 className="mb-6 text-3xl font-bold tracking-tight text-[#101828] md:text-5xl lg:text-6xl">
                Get in touch <br />
                <span className="text-primary">with us</span>
              </h1>

              <p className="mg:text-lg max-w-[480px] leading-relaxed text-muted">
                Have questions about FitCall, trainers, or getting started?
                We&apos;re here to help &mdash; no scripts, just real humans.
              </p>
            </div>

            {/* Right Content */}
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </main>
  )
}
