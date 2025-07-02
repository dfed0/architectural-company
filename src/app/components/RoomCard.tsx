'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
// import { useRouter } from 'next/navigation'

type RoomCardProps = {
  title: string
  subtitle: string
  imageUrl: string
  titleForUrl: string
  photoIndex: number
}

const RoomCard = ({
  title,
  titleForUrl,
  subtitle,
  imageUrl,
  photoIndex,
}: RoomCardProps) => {
  const searchParams = useSearchParams()

  return (
    <Suspense>
      <div className="flex items-start gap-[0.75rem] flex-col flex-[1_0_0] rounded-[0.75rem] justify-start self-stretch">
        <div className="w-full h-[17.0625rem]">
          <Image
            width={576}
            height={273}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            alt="main image"
            src={imageUrl}
            className="rounded-[0.75rem] border-2 sm:w-max"
          />
        </div>

        <Link
          className="flex flex-col items-start justify-between self-stretch"
          href={`project/${titleForUrl
            .toString()
            .normalize('NFKD')
            .replace(/[\u0300-\u036F]/g, '')
            .trim()
             .replace(/[^a-zA-Z0-9]+/g, '-') 
            .replace(
              /^-+|-+$/g,
              ''
            )}?project=${photoIndex}&lang=${searchParams.get('lang')}`}
        >
            <p className="text-[#000] overflow-ellipsis text-[1.25rem] font-[Inter_Var] font-[400] leading-[1.5rem]">
              {title.charAt(0).toUpperCase() + title.slice(1)}
            </p>
            <span className="text-[#00000099] overflow-ellipsis text-[1.0625rem] font-[Inter_Var] font-[400]">
              {subtitle || 'NO SUBTITLE'}
            </span>
        </Link>
      </div>
    </Suspense>
  )
}

export default RoomCard
