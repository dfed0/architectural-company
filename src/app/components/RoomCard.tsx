// RoomCard.tsx
import Image from 'next/image'

type RoomCardProps = {
  title: string
  subtitle: string
  imageUrl: string
}

const RoomCard = ({ title, subtitle, imageUrl }: RoomCardProps) => {
  return (
    <div className="flex h-[20.8125rem] items-start gap-[0.75rem] flex-col flex-[1_0_0] rounded-[0.75rem] justify-between">
      <Image
        width={576}
        height={384}
        style={{
          height: '17.0625rem',
          width: '25.33333rem',
          objectFit: 'cover',
        }}
        alt="main image"
        src={imageUrl}
        className="rounded-[0.75rem] border-2"
      />
      <div className="flex flex-col items-start self-stretch">
        <span className="text-[#000] overflow-ellipsis text-[1.25rem] font-[400]">
          {title}
        </span>
        <span className="text-[#00000099] overflow-ellipsis text-[1.0625rem] font-[400]">
          {subtitle}
        </span>
      </div>
    </div>
  )
}

export default RoomCard
