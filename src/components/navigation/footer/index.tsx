'use client'

import { Instagram, Linkedin } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { route: 'How it works', link: '/' },
        { route: 'Pricing', link: '/pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { route: 'About Us', link: '/about-us' },
        { route: 'Contact', link: '/contact-us' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { route: 'Terms of Service', link: '/terms-of-service' },
        { route: 'Privacy Policy', link: '/privacy-and-policy' },
        { route: 'Help Centre', link: '/help-centre' },
      ],
    },
  ]

  const socialLinks = [
    {
      icon: FaXTwitter,
      link: '/',
    },
    {
      icon: Instagram,
      link: '/',
    },
    {
      icon: Linkedin,
      link: '/',
    },
  ]

  //

  return (
    <footer className="dark:bg-default border-t bg-white">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="px-4">
          <div className="items-start justify-between gap-[60px] pb-12 pt-[28px] sm:grid-cols-2 md:gap-4 md:pb-[46px] md:pt-[72px] lg:flex">
            <div className="mb-10 md:mb-[100px] lg:mb-0">
              <div className="mb-[47px] flex w-full flex-col items-start justify-center sm:mb-[60px] md:block md:max-w-[254px] md:items-center lg:mb-0">
                <h5 className="text-md text-neutral-dark-2 mb-[18px] flex gap-2 text-center font-bold sm:text-left md:items-center">
                  <Image
                    src="/images/logo-icon.svg"
                    width={40}
                    height={40}
                    alt="Fitcall logo"
                  />
                  <span className="text-2xl font-semibold">Fitcall.me</span>
                </h5>
                <p className="text-left text-base font-medium text-gray-500 md:text-sm">
                  Connecting you with expert Nigerian trainers for real
                  accountability.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-3 md:gap-8 md:gap-x-1 md:gap-y-[60px]">
              {footerLinks.map((item, index) => {
                return (
                  <div key={index}>
                    <h5 className="text-neutral-dark-2 mb-4 text-xl font-semibold">
                      {item.title}
                    </h5>
                    <ul className="flex flex-col gap-4">
                      {item.links.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link
                              href={item.link}
                              className="cursor-pointer text-base text-gray-500 transition-colors duration-300 hover:text-[#063660] hover:underline dark:text-white"
                            >
                              {item.route}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-100"></div>
        <div className="flex w-full items-center justify-between pb-[30px] pt-4 md:pt-[32px]">
          <p className="pr-4 text-left text-base font-medium text-gray-500 md:text-sm">
            &copy; {currentYear} Fitcall. All rights reserved.
          </p>
          <div className="flex shrink-0 items-center gap-4 md:gap-6">
            {socialLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="text-neutral-dark-2 flex items-center justify-center transition-colors hover:text-[#063660]"
                >
                  <item.icon className="h-6 w-6" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
