'use client'
import { useTranslation } from 'react-i18next'

interface MainText {
  title?: string
}
export default function HighlightedSection({ title }: MainText) {
  const { t } = useTranslation()
  console.log(t('title.firstRow'))

  return (
    <section className="xl:pb-[3.5rem] md:pb-[2.5rem]  xl:pt-[13rem] md:pt-[9.75rem] flex flex-col self-stretch relative">
      <h1 className="font-[Roboto_Serif_Bold] text-[#1E1B28] md:text-[6.25rem] xl:text-[7.5rem] font-[700] md:leading-[6.25rem] xl:leading-[7.5rem]">
        {title ? t('title.projectTitle').split('_')[0] : t('title.firstRow')}
      </h1>
      <h1 className="font-[Roboto_Serif_Bold] text-[#1E1B28] md:text-[6.25rem] xl:text-[7.5rem] font-[700] md:leading-[6.25rem] xl:leading-[7.5rem] text-center w-[100%]">
        {title
          ? `${t('title.projectTitle').split('_')[1]} ${
              title
                .split(' ')
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))[0]
            }`
          : t('title.secondRow')}
        {/* overflow-hidden? */}
      </h1>
      <h1 className="font-[Roboto_Serif_Bold] text-[#1E1B28] md:text-[6.25rem] xl:text-[7.5rem] font-[700] md:leading-[6.25rem] xl:leading-[7.5rem]  text-right">
        {title
          ? `${title
              .split(' ')
              .slice(1)
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}`
          : t('title.thirdRow')}
      </h1>
      <span className="absolute text-[#1E1B28] right-0 md:top-[7.25rem] xl:top-[13rem] font-[400] leading-[1.5rem] text-[1rem] font-[Inter_Var] tracking-[-0.005rem] text-right ">
        {t('title.date')}
      </span>
      <span className="absolute text-[#1E1B28] md:bottom-[0] xl:bottom-[3.5rem]  leading-[1.5rem] text-[1rem] font-[Inter_Var] font-[400] tracking-[-0.005rem]">
        {t('title.location')}
      </span>
    </section>
  )
}
