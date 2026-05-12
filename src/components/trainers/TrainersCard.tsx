import Image from 'next/image'
import { Button } from '../ui/button'
import { Trainer } from './trianers'

type Props = {
  trainer: Trainer
}

const TrainerCard = ({ trainer }: Props) => {
  const firstName = trainer.name.split(' ')[0]

  return (
    <div className="h-[470px] max-w-[350px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="relative h-[284px] w-full">
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="font-semibold text-muted-foreground">
            {trainer.name}
          </span>
          <span className="text-xs text-muted">
            {trainer.sessions} Sessions
          </span>
        </div>

        <p className="mb-4 text-xs text-muted">
          {trainer.specialties.join(' · ')}
        </p>

        <Button className="w-full">Book {firstName}</Button>
      </div>
    </div>
  )
}

export default TrainerCard
