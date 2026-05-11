import type { Metadata } from 'next'
const interClass = 'font-sans'
import './globals.css'
import { Toaster } from 'sonner'
import { cn } from '~/utils'
import { Providers } from './provider'

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
      <body className={cn(interClass, 'max-w-[1920px] antialiased')}>
        <Providers>
          {children}
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  )
}
