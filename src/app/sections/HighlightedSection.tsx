'use client'
import { useTranslation } from 'react-i18next'
import i18next, { rooms } from '../i18n/translations/i18next'
interface MainText {
  title?: string
  projectNumber?: string
}
export default function HighlightedSection({ title, projectNumber }: MainText) {
  const { t } = useTranslation()
  console.log(rooms)

  return (
    <section className="xl:pb-[3.5rem] sm:pb-[2.5rem]  xl:pt-[13rem] sm:pt-[9.75rem] flex flex-col self-stretch relative">
      <h1 className="font-[Roboto_Serif_Bold] text-[#1E1B28] sm:text-[3.25rem] md:text-[6.25rem] xl:text-[7.5rem] font-[700] sm:leading-[3.25rem] md:leading-[6.25rem] xl:leading-[7.5rem]">
        {title ? t('title.projectTitle').split('_')[0] : t('title.firstRow')}
      </h1>
      <h1 className="font-[Roboto_Serif_Bold] text-[#1E1B28] sm:text-[3.25rem] md:text-[6.25rem] xl:text-[7.5rem] font-[700] sm:leading-[3.25rem] md:leading-[6.25rem] xl:leading-[7.5rem] text-center w-[100%]">
        {title
          ? `${t('title.projectTitle').split('_')[1]} ${
              title
                .split(' ')
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))[0]
            }`
          : t('title.secondRow')}
      </h1>
      <h1 className="font-[Roboto_Serif_Bold] text-[#1E1B28] sm:text-[3.25rem] md:text-[6.25rem] xl:text-[7.5rem] font-[700] sm:leading-[3.25rem] md:leading-[6.25rem] xl:leading-[7.5rem]  text-right">
        {title
          ? `${title
              .split(' ')
              .slice(1)
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}`
          : t('title.thirdRow')}
      </h1>
      <span className="absolute text-[#1E1B28] right-0 sm:top-[7.25rem] xl:top-[13rem] font-[400] leading-[1.5rem] text-[1rem] font-[Inter_Var] tracking-[-0.005rem] text-right ">
        {title ? title : t('title.date')}
      </span>
      <span className="absolute text-[#1E1B28] sm:bottom-[0] xl:bottom-[3.5rem]  leading-[1.5rem] text-[1rem] font-[Inter_Var] font-[400] tracking-[-0.005rem]">
        {i18next.language === 'en' ? projectNumber
          ? rooms[projectNumber].date + ', ' + rooms[projectNumber].locationEn
          : t('title.location') : projectNumber
          ? rooms[projectNumber].date + ', ' + rooms[projectNumber].locationUk
          : t('title.location')}
      </span>
    </section>
  )
}
