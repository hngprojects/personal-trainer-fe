import Image from 'next/image'

const beliefs = [
  {
    icon: '/images/about-us/heart.svg',
    title: 'Humans over algorithms',
    content: "A coach who knows you beats a feed that doesn't.",
  },
  {
    icon: '/images/about-us/crosshair.svg',
    title: 'Consistency over intensity',
    content: 'Showing up beats burning out.',
  },
  {
    icon: '/images/about-us/users.svg',
    title: 'Real accountability',
    content: "If a person is waiting, you'll show up.",
  },
  {
    icon: '/images/about-us/lightning.svg',
    title: 'Structure works',
    content: 'Plans you actually finish create real change.',
  },
]

const CoreBeliefs = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="mx-auto max-w-7xl px-5 py-[91px] md:px-10 lg:px-10 xl:px-10">
        <div className="flex flex-col items-center justify-center">
          <h3 className="mb-4 text-[32px] font-[700] text-[#1C1C1C] md:mb-12">
            What we believe
          </h3>

          <div className="grid w-full grid-cols-1 gap-4 sm:w-[500px] sm:grid-cols-2 md:w-[750px] md:grid-cols-3 lg:w-[1000px] lg:grid-cols-4 xl:w-[1200px]">
            {beliefs.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#EBEBEB] bg-white p-5"
              >
                <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#005F8B1A]">
                  <Image src={item.icon} alt="icon" width={32} height={32} />
                </div>
                <h3
                  className="mb-3 text-base font-medium text-[#1C1C1C] md:text-lg"
                  data-testid="integrity"
                >
                  {item.title}
                </h3>
                <p className="text-[14px] font-[400] text-neutral-600 md:text-[16px]">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoreBeliefs
