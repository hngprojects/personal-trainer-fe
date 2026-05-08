'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import useVersionSync from '~/actions/useVersionSync'
import Logo from '~/components/global/main-logo'
import { cn } from '~/utils'
import { NAV_LINKS } from './links'
import MobileNav from './mobile-navbar'

const Navbar = () => {
  const [scrolling, setIsScrolling] = useState<boolean>(false)
  const pathname = usePathname()

  const version = 'v1.0'
  useVersionSync(version)

  const handleScrollEvent = () => {
    if (window.scrollY > 1) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  })
  return (
    <nav
      className={cn(
        'sticky left-0 right-0 top-0 z-40 bg-white',
        scrolling ? 'shadow-md' : 'border-b shadow-none'
      )}
    >
      <div
        className={cn(
          'relative mx-auto flex w-full max-w-[1200px] items-center justify-between gap-x-4 px-4 transition-all duration-500 md:justify-between xl:px-0',
          scrolling ? 'py-2' : 'py-4'
        )}
      >
        <Logo />
        <div className="hidden flex-1 items-center justify-center gap-x-6 md:flex lg:gap-x-10">
          {NAV_LINKS.map((item, index) => {
            const isActive = pathname === item.link
            return (
              <Link
                key={index}
                href={item.link}
                className={cn(
                  'relative px-2 py-1 text-[16px] font-medium capitalize transition-all duration-300',
                  isActive
                    ? 'text-[#063660]'
                    : 'text-neutral-dark-1 hover:text-[#063660]'
                )}
              >
                {item.route}
                {isActive && (
                  <span className="absolute bottom-0 left-0 block h-[2px] w-full bg-[#063660] transition-all"></span>
                )}
              </Link>
            )
          })}
        </div>
        <Link
          href="/waitlist"
          className="hidden h-[44px] place-items-center whitespace-nowrap rounded-xl bg-[#063660] px-6 font-medium text-white hover:bg-[#063660]/90 md:grid lg:px-8"
        >
          Join Waitlist
        </Link>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
