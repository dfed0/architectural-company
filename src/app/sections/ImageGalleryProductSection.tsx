'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useGoogleData } from '../contexts/GoogleDataContext'

export default function ImageGalleryProductSection() {
  const searchParams = useSearchParams()
  const projectNumber = searchParams.get('project')

  const { projects, loading, error } = useGoogleData()

  return (
    <section
      className="flex flex-col sm:py-[1.25rem] items-start self-stretch md:py-[1.25rem] xl:py-[1rem]"
      id="services"
    >
      {!loading && (
        <>
          <div className="flex sm:flex-col xl:flex-row xl:py-[2.5rem] items-start sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch">
            <div className="sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]">
              <Image
                width={405}
                height={416}
                style={{ objectFit: 'cover' }}
                alt="main image"
                src={
                  projects.images.projects[Number(projectNumber) - 1]?.images[0]
                    .url
                }
                className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
              />
            </div>
            <div className="sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]">
              <Image
                width={405}
                height={416}
                style={{ objectFit: 'cover' }}
                alt="main image"
                src={
                  projects.images.projects[Number(projectNumber) - 1]?.images[1]
                    .url
                }
                className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
              />
            </div>
            <div className="sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]">
              <Image
                width={405}
                height={416}
                style={{ objectFit: 'cover' }}
                alt="main image"
                src={
                  projects.images.projects[Number(projectNumber) - 1]?.images[2]
                    .url
                }
                className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
              />
            </div>
          </div>
          <div className="flex sm:flex-col xl:flex-row sm:py-[1.25rem] xl:py-[2.5rem] items-start sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch">
            <div className="sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]">
              <Image
                width={405}
                height={416}
                style={{ objectFit: 'cover' }}
                alt="main image"
                src={
                  projects.images.projects[Number(projectNumber) - 1]?.images[3]
                    .url
                }
                className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
              />
            </div>
            <div className="sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]">
              <Image
                width={405}
                height={416}
                style={{ objectFit: 'cover' }}
                alt="main image"
                src={
                  projects.images.projects[Number(projectNumber) - 1]?.images[4]
                    .url
                }
                className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
              />
            </div>
            <div className="sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]">
              <Image
                width={405}
                height={416}
                style={{ objectFit: 'cover' }}
                alt="main image"
                src={
                  projects.images.projects[Number(projectNumber) - 1]?.images[5]
                    .url
                }
                className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
              />
            </div>
          </div>
          <div className="flex sm:flex-col xl:flex-row sm:pb-[1.25rem] xl:py-[2.5rem] items-start sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch">
            <div className="sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]">
              <Image
                width={405}
                height={416}
                style={{ objectFit: 'cover' }}
                alt="main image"
                src={
                  projects.images.projects[Number(projectNumber) - 1]?.images[6]
                    .url
                }
                className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
              />
            </div>
            <div className="sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]">
              <Image
                width={405}
                height={416}
                style={{ objectFit: 'cover' }}
                alt="main image"
                src={
                  projects.images.projects[Number(projectNumber) - 1]?.images[7]
                    .url
                }
                className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
              />
            </div>
            <div className="sm:h-[25rem] sm:w-full xl:h-[26rem] xl:w-[25.33333rem]">
              <Image
                width={405}
                height={416}
                style={{ objectFit: 'cover' }}
                alt="main image"
                src={
                  projects.images.projects[Number(projectNumber) - 1]?.images[8]
                    .url
                }
                className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[26rem] xl:w-[25.33333rem]"
              />
            </div>
          </div>
        
        </>
      )}
    </section>
  )
}
