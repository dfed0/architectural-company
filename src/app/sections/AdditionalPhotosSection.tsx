'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function AdditionalPhotosSection() {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const projectNumber = searchParams.get('project')
  return (
    <>
      <section
        className="flex sm:pb-[1.25rem] md:py-[1.25rem] xl:py-[3.5rem] items-start sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch"
        id="portfolio-text"
      >
        <div className="w-full sm:hidden md:block"></div>
        <p className="font-[Inter_Var] text-[1.5rem] font-[400] leading-[2rem] tracking-[-0.0075rem] text-[#000] w-full">
          {t('motivateTitle')}
        </p>
      </section>
      <section
        className="flex flex-col xl:flex-row sm:py-[1.25rem] xl:py-[2.5rem] items-start sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch"
        id="portfolio-photos-1"
      >
        <div className="sm:h-[25rem] sm:w-full xl:h-[41.5rem] xl:w-full ">
          <Image
            width={636}
            height={664}
            style={{ objectFit: 'cover' }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-9.jpg`}
            className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] md:h-full md:w-full sm:h-full sm:w-full"
          />
        </div>
        <div className="sm:h-[25rem] sm:w-full xl:h-[27.6875rem] xl:w-full">
          <Image
            width={636}
            height={443}
            style={{
              objectFit: 'cover',
            }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-10.jpg`}
            className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[27.6875rem] xl:w-full"
          />
        </div>
      </section>

      <section
        className="flex flex-col xl:flex-row xl:py-[2.5rem] md:justify-start xl:justify-end xl:items-start self-stretch"
        id="portfolio-photos-2"
      >
        <div className="sm:h-[12.17294rem] sm:w-[20rem] md:h-[25rem] md:w-[43rem] xl:h-[42rem] xl:w-full sm:flex sm:justify-start sm:items-start xl:justify-end xl:items-end">
          <Image
            width={1008}
            height={672}
            style={{ objectFit: 'cover' }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-11.jpg`}
            className="sm:rounded-[0.457rem] md:rounded-[0.9385rem] xl:rounded-[1.375rem] border-2 border-[lightgray] border-solid xl:flex sm:h-full sm:w-full xl:h-[42rem] xl:w-[63rem]"
          />
        </div>
      </section>
      <section
        className="sm:flex sm:flex-col xl:flex-row sm:py-[1.25rem] xl:py-[2.5rem] items-start sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch"
        id="portfolio-photos-3"
      >
        <div className="sm:h-[27.6875rem] sm:w-full xl:h-[42rem] xl:w-full xl:flex justify-end items-end">
          <Image
            width={636}
            height={443}
            style={{
              objectFit: 'cover',
            }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-12.jpg`}
            className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[42rem] xl:w-full "
          />
        </div>
        <div className="sm:h-[27.6875rem] sm:w-full xl:h-[42rem] xl:w-full xl:flex justify-end items-end">
          <Image
            width={636}
            height={664}
            style={{
              objectFit: 'cover',
            }}
            alt="main image"
            src={`/images/projects/${projectNumber}/photo-13.jpg`}
            className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0] sm:h-full sm:w-full xl:h-[42rem] xl:w-full"
          />
        </div>
      </section>
    </>
  )
}
