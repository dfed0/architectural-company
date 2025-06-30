'use client'

import Image from 'next/image'
import FilledStandardButton from './FilledStandardButton'
import { useTranslation } from 'react-i18next'

type ServiceCardProps = {
  title: string
  subtitle: string
  imageUrl: string
  altText: string
  projectTitleEn: string
  serviceIndex: number
}

const ServiceCard = ({
  title,
  subtitle,
  imageUrl,
  altText,
  projectTitleEn,
  serviceIndex
}: ServiceCardProps) => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-start self-start gap-[2.5rem] sm:w-full flex-[1_0_0]">
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
      <div className="flex flex-col items-start self-stretch">
        <p className="text-[#000] overflow-ellipsis text-[1.25rem] font-[Inter_Var] font-[400] leading-[1.5rem]">
          {title}
        </p>
        {/* <p className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem] self-stretch"> */}
        <p className="text-[#00000099] overflow-ellipsis text-[1.0625rem] font-[Inter_Var] font-[400]">
          {subtitle}
        </p>
      </div>
      <FilledStandardButton
        title={t('sections.additionalInfo.btnTitle')}
        type="button"
        link={projectTitleEn}
        project={serviceIndex.toString()}
      />
    </div>
  )
}

export default ServiceCard
