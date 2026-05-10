'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <section className="md:pt-38 relative w-full overflow-hidden pt-32">
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="absolute -left-20 top-0 h-[600px] w-[600px] rounded-full bg-[#C2DCFF]/40 blur-[120px]"></div>
      <div className="absolute -right-20 top-0 h-[600px] w-[600px] rounded-full bg-[#F5D9C0]/40 blur-[120px]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary bg-transparent px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-600"></span>
            Live Trainer Accountability
          </div>

          <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-muted-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Stay Consistent With Real{' '}
            <span className="relative mt-2 inline-block bg-primary px-4 py-1 text-white">
              Trainers
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            FitCall pairs you with a real Nigerian trainer who calls you for
            every session, Zoom, WhatsApp, or audio. Real accountability,
            structured workouts, zero excuses.
          </p>

          <div className="mb-16 flex flex-col items-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#" className="flex items-center justify-center gap-3">
                <Image
                  src="/images/landing-page/apple.svg"
                  alt="Apple"
                  width={24}
                  height={24}
                />
                <div className="text-left">
                  <p className="text-[10px] uppercase leading-none opacity-80">
                    Download on App Store
                  </p>
                </div>
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="bg-white">
              <Link href="#" className="flex items-center justify-center gap-3">
                <Image
                  src="/images/landing-page/google-play.svg"
                  alt="Playstore"
                  width={24}
                  height={24}
                />
                <div className="text-left">
                  <p className="text-[10px] uppercase leading-none opacity-80">
                    Get it on PlayStore
                  </p>
                </div>
              </Link>
            </Button>
          </div>

          <div className="relative min-h-[21vh] w-full max-w-5xl md:h-[500px] lg:h-[600px]">
            <div
              className="absolute bottom-0 left-0 w-[38%]"
              style={{ transform: 'translateY(0)' }}
            >
              <Image
                src="/images/landing-page/hero2.png"
                alt="App UI Left"
                width={500}
                height={600}
                className="h-auto w-full opacity-80 shadow-2xl"
              />
            </div>

            <div className="absolute bottom-0 left-1/2 z-10 w-[46%] -translate-x-1/2">
              <Image
                src="/images/landing-page/hero1.png"
                alt="App UI Center"
                width={500}
                height={700}
                className="h-auto w-full shadow-2xl transition-transform hover:scale-105"
                priority
              />
            </div>

            <div className="absolute bottom-0 right-0 w-[38%]">
              <Image
                src="/images/landing-page/hero2.png"
                alt="App UI Right"
                width={500}
                height={600}
                className="h-auto w-full opacity-80 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
