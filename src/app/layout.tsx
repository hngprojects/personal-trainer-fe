import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '~/utils'
import { Providers } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'African Personal Trainer | FitCall.me',
  description:
    'FitCall.me connects users with professional African personal trainers through a modern and accessible fitness platform designed for training, wellness, and personalized coaching.',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'max-w-[1920px] antialiased')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
