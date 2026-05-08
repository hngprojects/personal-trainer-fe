'use client'

import { useSession } from 'next-auth/react'
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
  const { status } = useSession()
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
        'sticky left-0 right-0 top-0 z-40 bg-background',
        scrolling ? 'shadow-md' : 'shadow-sm'
      )}
    >
      <div
        className={cn(
          'container relative items-center gap-x-4 transition-all duration-500 md:justify-between',
          scrolling ? 'py-2' : 'py-2.5 md:py-4',
          status === 'authenticated' && 'justify-between md:justify-between'
        )}
      >
        <MobileNav />
        <Logo />
        <div className="hidden w-full items-center justify-center gap-x-4 md:flex lg:gap-x-6">
          {NAV_LINKS.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className={cn(
                  'text-neutral-dark-1 p-3 text-[16px] font-medium capitalize transition-all duration-300 hover:text-primary',
                  pathname === item.link ? 'text-primary' : ''
                )}
              >
                {item.route}
              </Link>
            )
          })}
        </div>

        <Button asChild size="lg">
          <Link href="/register">join Wailist</Link>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
