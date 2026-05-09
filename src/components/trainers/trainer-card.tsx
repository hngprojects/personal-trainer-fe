import Image from 'next/image'

interface TrainerCardProps {
  name: string
  imageSrc: string
  sessionsCount: number
  specialties: string[]
  onBookClick?: () => void
}

const TrainerCard: React.FC<TrainerCardProps> = ({
  name,
  imageSrc,
  sessionsCount,
  specialties,
  onBookClick,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-[16px] border border-[#EAECF0] bg-white transition-all hover:shadow-md">
      <div className="relative h-[280px] w-full overflow-hidden bg-gray-100">
        <Image
          width={400}
          height={400}
          src={imageSrc}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-[24px] font-normal text-[#1C1C1C]">{name}</h3>
          <span className="text-[14px] font-medium text-[#5C5C5C]">
            {sessionsCount} Sessions
          </span>
        </div>
        <p className="mb-5 text-[14px] text-[#5C5C5C]">
          {specialties.join(' · ')}
        </p>
        <button
          onClick={onBookClick}
          className="w-full rounded-md bg-[#063660] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0A3055]/90"
        >
          Book {name.split(' ')[0]}
        </button>
      </div>
    </div>
  )
}

export default TrainerCard
