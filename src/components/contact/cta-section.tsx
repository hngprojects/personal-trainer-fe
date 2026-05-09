import { Button } from '~/components/ui/button'
import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="w-full bg-[#F5F5F5] pb-[60px] pt-[40px]">
      <div className="mx-auto w-full max-w-[1440px] px-[80px]">
        {/*
          CTA card — rounded-[20px], full content width
          Gradient: 90deg #063C74 → #0E67C5
          Padding: 80px top/bottom, 100px left/right
        */}
        <div
          className="w-full text-center"
          style={{
            borderRadius: '20px',
            padding: '80px 100px',
            background: 'linear-gradient(90deg, #063C74 0%, #0E67C5 100%)',
          }}
        >
          {/* CTA Heading — 40px, fills wide card nicely */}
          <h2
            className="mx-auto font-bold text-white"
            style={{ fontSize: '40px', lineHeight: '1.2', maxWidth: '700px' }}
          >
            Stop skipping workouts. Start showing up.
          </h2>

          {/* CTA Description — 16px standard body */}
          <p
            className="mx-auto mt-5 font-normal"
            style={{
              maxWidth: '560px',
              fontSize: '16px',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.88)',
            }}
          >
            Your trainer will show up. So should you. Book your free session and
            feel the difference one phone call makes.
          </p>

          {/* CTA Button — white outlined, comfortable size */}
          <div className="mt-8">
            <Button
              asChild
              variant="outline"
              className="border-white bg-transparent font-semibold text-white transition-colors hover:bg-white hover:text-[#111111]"
              style={{
                height: '48px',
                padding: '0 36px',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 600,
              }}
            >
              <Link href="/trial">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
