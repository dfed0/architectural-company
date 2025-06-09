'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export default function ImageGalleryProductSection() {
  const searchParams = useSearchParams()
  const projectNumber = searchParams.get('project')
  return (
    <section
      className="flex flex-col sm:py-[1.25rem] items-start self-stretch md:py-[2.5rem]"
      id="services"
    >
      <div className="flex sm:flex-col xl:flex-row xl:py-[2.5rem] items-start sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch">
        <div className='sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]'>
          <Image
            width={405}
            height={416}
            style={{ objectFit: 'cover' }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-0.jpg`}
            className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
          />
        </div>
        <div className='sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]'>
          <Image
            width={405}
            height={416}
            style={{ objectFit: 'cover' }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-1.jpg`}
            className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
          />
        </div>
          <div className='sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]'>
          <Image
            width={405}
            height={416}
            style={{ objectFit: 'cover' }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-2.jpg`}
            className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
          />
        </div>
      </div>
      <div className="flex sm:flex-col xl:flex-row sm:py-[1.25rem] xl:py-[2.5rem] items-start sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch">
        <div className='sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]'>
          <Image
            width={405}
            height={416}
            style={{ objectFit: 'cover' }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-3.jpg`}
            className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
          />
        </div>
        <div className='sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]'>
          <Image
            width={405}
            height={416}
            style={{ objectFit: 'cover' }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-4.jpg`}
            className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
          />
        </div>
          <div className='sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]'>
          <Image
            width={405}
            height={416}
            style={{ objectFit: 'cover' }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-5.jpg`}
            className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
          />
        </div>
      </div>
      <div className="flex sm:flex-col xl:flex-row sm:pb-[1.25rem] xl:py-[2.5rem] items-start sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch">
        <div className='sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]'>
          <Image
            width={405}
            height={416}
            style={{ objectFit: 'cover' }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-6.jpg`}
            className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
          />
        </div>
        <div className='sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]'>
          <Image
            width={405}
            height={416}
            style={{ objectFit: 'cover' }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-7.jpg`}
            className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
          />
        </div>
          <div className='sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]'>
          <Image
            width={405}
            height={416}
            style={{ objectFit: 'cover' }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-8.jpg`}
            className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
          />
        </div>
      </div>
    </section>
  )
}
