import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link
      href="/"
      className="h-[37px] md:h-[52px] md:w-[200px] lg:max-w-[283px]"
      data-testid="logo"
    >
      <Image
        src="/images/logo-text.svg"
        alt="Fit call logo"
        height={52}
        width={283}
        className="h-full w-full object-contain"
      />
    </Link>
  )
}

export default Logo
