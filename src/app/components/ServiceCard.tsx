// RoomCard.tsx

import Image from 'next/image'
import FilledStandardButton from './FilledStandardButton'

type ServiceCardProps = {
  title: string
  subtitle: string
  imageUrl: string
  altText: string
}

const ServiceCard = ({
  title,
  subtitle,
  imageUrl,
  altText,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-start gap-[2.5rem] flex-[1_0_0]">
      <Image
        src={imageUrl}
        alt={altText}
        height={420}
        width={405}
        // objectFit='cover'
        // width={auto}
        style={{ width: '100%', height: '26.25rem', objectFit: 'cover' }}
        className="rounded-[0.75rem] border-2"
      />
      <div className="flex flex-col items-center gap-[1rem] self-stretch">
        <p className="text-[#000] overflow-ellipsis font-[inter] text-[1.25rem] font-[300] leading-[1.5rem] self-stretch">
          {title}
        </p>
        <p className="text-[#000] font-[inter] text-[0.9375rem] font-[400] leading-[1.25rem] self-stretch">
          {subtitle}
        </p>
      </div>
      <FilledStandardButton title='Learn More'/>
    </div>
  )
}

export default ServiceCard
