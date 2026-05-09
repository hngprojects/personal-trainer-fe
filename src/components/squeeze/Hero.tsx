'use client'

import Image from 'next/image'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-background lg:h-screen lg:min-h-[850px]">
      <div className="container flex flex-1 flex-col justify-center py-12 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content Column */}
          <div className="order-2 flex flex-col gap-8 lg:order-1">
            <div className="flex">
              <div className="inline-flex items-center gap-2 rounded-full bg-primarybadge px-4 py-2 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Live trainer accountability
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-[2.75rem] font-bold leading-[1.1] tracking-tight text-foreground lg:text-[4.5rem] lg:leading-[1.05]">
                Never miss a <br />
                workout session
              </h1>
              <p className="text-description-text max-w-xl text-lg leading-relaxed lg:text-xl">
                Find a vetted Nigerian fitness trainer who calls you at your
                scheduled time - live, on video. Kindly fill the form and
                download FitCall today.
              </p>
            </div>

            <form
              className="flex w-full max-w-md flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="text"
                placeholder="Full name"
                className="h-14 rounded-2xl border-none bg-[#F8F9FA] px-6 text-base placeholder:text-neutral-400 focus-visible:ring-1 focus-visible:ring-primary/20"
              />
              <Input
                type="email"
                placeholder="johndoe@example.com"
                className="h-14 rounded-2xl border-none bg-[#F8F9FA] px-6 text-base placeholder:text-neutral-400 focus-visible:ring-1 focus-visible:ring-primary/20"
              />
              <Button
                size="xl"
                className="h-14 rounded-2xl bg-primary text-lg font-bold text-white shadow-lg shadow-primary/10 transition-all hover:bg-[#0a4d7d] active:bg-[#0e619e]"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Image Column */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-[540px] overflow-hidden rounded-[3rem] shadow-2xl shadow-black/5 lg:aspect-[0.9/1]">
              <Image
                src="/images/landing-page/hero.png"
                alt="Man running during workout"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Partners/Tools Section - Full Width Border */}
      <div className="w-full border-t border-border/50">
        <div className="container flex flex-col items-center justify-between gap-10 py-8 lg:flex-row lg:py-10">
          <p className="text-description-text text-center text-sm font-medium lg:text-left lg:text-base">
            Works with the tools you already use
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-x-12">
            {['Zoom', 'WhatsApp', 'Google Meet', 'Twitter', 'Facebook'].map(
              (tool) => (
                <span
                  key={tool}
                  className="cursor-default text-lg font-bold text-foreground/80 transition-colors hover:text-foreground lg:text-xl"
                >
                  {tool}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
