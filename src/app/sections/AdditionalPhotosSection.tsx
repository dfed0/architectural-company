'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export default function AdditionalPhotosSection() {
  const searchParams = useSearchParams()
  const projectNumber = searchParams.get('project')
  return (
    <>
      <section
        className="flex py-[3.5rem] items-start gap-[3.5rem] self-stretch"
        id="portfolio-text"
      >
        <div className="w-full"></div>
        <p className="font-[Inter_Var] text-[1.5rem] font-[400] leading-[2rem] tracking-[-0.0075rem] text-[#000] w-full">
          Explore our collection of beautifully renovated <br /> apartments,
          each designed to offer a unique blend of <br /> comfort and style.
          From modern urban lofts to cozy <br /> suburban retreats, our gallery
          showcases the finest in <br />
          contemporary living spaces.
        </p>
      </section>
      <section
        className="flex py-[2.5rem] items-start gap-[3.5rem] self-stretch"
        id="portfolio-photos-1"
      >
        <Image
          width={636}
          height={664}
          style={{
            height: '41.5rem',
            width: '25.33333rem',
            objectFit: 'cover',
          }}
          alt="main image"
          src={`/images/projects/${projectNumber}/photo-9.jpg`}
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0]"
        />
        <Image
          width={636}
          height={443}
          style={{
            height: '27.6875rem',
            width: '25.33333rem',
            objectFit: 'cover',
          }}
          alt="main image"
          src={`/images/projects/${projectNumber}/photo-10.jpg`}
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0]"
        />
      </section>
      <section
        className="flex py-[2.5rem] justify-end items-start self-stretch"
        id="portfolio-photos-2"
      >
        <Image
          width={1008}
          height={672}
          style={{ height: '42rem', width: '63rem', objectFit: 'cover' }}
          alt="main image"
          src={`/images/projects/${projectNumber}/photo-11.jpg`}
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid"
        />
      </section>
      <section
        className="flex py-[2.5rem] items-start gap-[3.5rem] self-stretch"
        id="portfolio-photos-3"
      >
        <Image
          width={636}
          height={443}
          style={{
            height: '27.6875rem',
            width: '25.33333rem',
            objectFit: 'cover',
          }}
          alt="main image"
          src={`/images/projects/${projectNumber}/photo-12.jpg`}
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0]"
        />
        <Image
          width={636}
          height={664}
          style={{
            height: '41.5rem',
            width: '25.33333rem',
            objectFit: 'cover',
          }}
          alt="main image"
          src={`/images/projects/${projectNumber}/photo-13.jpg`}
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0]"
        />
      </section>
    </>
  )
}
