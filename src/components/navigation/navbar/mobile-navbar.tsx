'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'
import { cn } from '~/utils'
import { NAV_LINKS } from './links'
import { Button } from '~/components/ui/button'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn('flex items-center justify-center')}
      >
        <Menu className="h-8 w-8 text-foreground" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                'fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm md:hidden'
              )}
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="sidebar"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className={cn(
                'fixed left-0 top-0 z-[999] flex h-full w-72 flex-col bg-white shadow-2xl md:hidden'
              )}
            >
              <div
                className={cn(
                  'flex items-center justify-between border-b border-[#EBEBEB] px-6 py-5'
                )}
              >
                <span className={cn('text-base font-semibold text-[#1C1C1C]')}>
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center justify-center rounded-full p-1 hover:bg-[#F7F7F7]'
                  )}
                >
                  <X className="h-5 w-5 text-[#5C5C5C]" />
                </button>
              </div>

              <nav
                className={cn(
                  'flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6'
                )}
              >
                {NAV_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    href={link.link}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-xl px-4 py-3 text-sm font-medium text-[#1C1C1C] transition-colors hover:bg-[#F7F7F7] hover:text-primary'
                    )}
                  >
                    {link.route}
                  </Link>
                ))}
              </nav>

              <div className={cn('border-t border-[#EBEBEB] px-6 py-6')}>
                <Button asChild className="w-full">
                  <Link href="/waitlist" onClick={() => setOpen(false)}>
                    Join Waitlist
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
