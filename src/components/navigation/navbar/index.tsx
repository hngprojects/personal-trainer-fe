'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import useVersionSync from '~/actions/useVersionSync'
import Logo from '~/components/global/main-logo'
import { cn } from '~/utils'
import { NAV_LINKS } from './links'
import MobileNav from './mobile-navbar'
import { Button } from '~/components/ui/button'

const Navbar = () => {
  const [scrolling, setIsScrolling] = useState<boolean>(false)
  const pathname = usePathname()

  const version = 'v1.0'
  useVersionSync(version)

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolling(window.scrollY > 1)
    }

    window.addEventListener('scroll', handleScrollEvent)

    return () => window.removeEventListener('scroll', handleScrollEvent)
  }, [])

  return (
    <nav
      className={cn(
        'sticky left-0 right-0 top-0 z-40 bg-background transition-all duration-300',
        scrolling ? 'shadow-md' : 'shadow-sm'
      )}
    >
      <div
        className={cn(
          'container flex items-center justify-between transition-all duration-500',
          scrolling ? 'py-2' : 'py-3 md:py-5'
        )}
      >
        <div className="flex items-center">
          <Logo />
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden items-center justify-center gap-x-2 md:flex lg:gap-x-4">
          {NAV_LINKS.map((item, index) => {
            const isActive = pathname === item.link

            return (
              <Link
                key={index}
                href={item.link}
                className={cn(
                  'p-3 text-[16px] font-medium capitalize transition-all duration-300 hover:text-primary',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {item.route}
              </Link>
            )
          })}
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="flex items-center">
          {/* Desktop Button */}
          <Button asChild size="lg" className="hidden md:inline-flex">
            <Link href="/register">Join Waitlist</Link>
          </Button>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
