// RoomCard.tsx
import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'

type RoomCardProps = {
  title: string
  subtitle: string
  imageUrl: string
}

const RoomCard = ({ title, subtitle, imageUrl }: RoomCardProps) => {
  // const router = useRouter()
  // function pushRouterTitle(project: string) {
  //   router.push(`/project-${project}`)
  //   return
  // }
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
      <Link
        className="flex flex-col items-start self-stretch"
        href={`project/${title
          .toString()
          .normalize('NFKD')
          .replace(/[\u0300-\u036F]/g, '')
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '')}`}
        // onClick={() => pushRouterTitle(title)}
      >
        <span className="text-[#000] overflow-ellipsis text-[1.25rem] font-[400]">
          {title}
        </span>
        <span className="text-[#00000099] overflow-ellipsis text-[1.0625rem] font-[400]">
          {subtitle}
        </span>
      </Link>
    </div>
  )
}

export default RoomCard
