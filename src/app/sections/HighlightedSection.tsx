'use client'
import { useTranslation } from 'react-i18next'

interface MainText {
  title?: string
}
export default function HighlightedSection({ title }: MainText) {
  const { t } = useTranslation()
  console.log(t('title.firstRow'))
  return (
    <section className="pb-[3.5rem] pt-[13rem] flex flex-col self-stretch relative">
      <h1 className="font-[Roboto_Serif_Bold] text-[#1E1B28] text-[7.5rem] font-[700] leading-[7.5rem]">
        {title ? 'Gallery' : t('title.firstRow')}
      </h1>
      <h1 className="font-[Roboto_Serif_Bold] text-[#1E1B28] text-[7.5rem] font-[700] leading-[7.5rem] text-center">
        {title
          ? `of ${
              title
                .split('-') // ['kitchen', 'upgrade']
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))[0]
            }`
          : t('title.secondRow')}
        {/* overflow-hidden? */}
      </h1>
      <h1 className="font-[Roboto_Serif_Bold] text-[#1E1B28] text-[7.5rem] font-[700] leading-[7.5rem] text-right">
        {title
          ? `${title
              .split('-')
              .slice(1)
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}`
          : t('title.thirdRow')}
      </h1>
      <span className="absolute text-[#1E1B28] right-0 top-[12.25rem] font-[400] leading-[1.5rem] text-[1rem] font-[Inter_Var] tracking-[-0.005rem] text-right ">
        {t('title.date')}
      </span>
      <span className="absolute text-[#1E1B28] bottom-[4.25rem]  leading-[1.5rem] text-[1rem] font-[Inter_Var] font-[400] tracking-[-0.005rem]">
        {t('title.location')}
      </span>
    </section>
  )
}
