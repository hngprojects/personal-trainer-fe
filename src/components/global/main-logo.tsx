import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/Logo.svg"
        alt="FitCall logo"
        width={40}
        height={40}
        className="h-[36px] w-[36px] object-contain sm:h-[42px] sm:w-[42px]"
      />

      <h1 className="text-xl font-semibold leading-none sm:text-3xl lg:text-4xl">
        FitCall
      </h1>
    </Link>
  )
}

export default Logo
