'use client'

import OutlinedStandardButton from '@/app/components/OutlinedStandardButton'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1328"
        height="2"
        viewBox="0 0 1328 2"
        fill="none"
        className='w-full'
      >
        <path d="M-96 1H1410" className="stroke-[#00000029]" />
      </svg>
      <footer className="flex md:pt-[1.25rem] xl:pt-[3.5rem] flex-col items-start gap-[3.5rem] self-stretch">
        <section className="flex sm:py-[1.25rem] xl:py-[3.5rem] sm:flex-col xl:flex-row items-start sm:gap-[1.25rem] xl:gap-[2.5rem] self-stretch">
          <div className="flex flex-col xl:h-[3rem] items-start md:px-[1.25rem] xl:py-[0] gap-[1.5rem] flex-[1_0_0] self-stretch">
            <div className="flex h-[2rem] items-center gap-[0.375rem]">
              <Image
                src="/images/logomark.svg"
                alt="Logo"
                height={32}
                width={32}
              />
              <span className="text-[#AD7C00] font-[500] text-[1.25rem] leading-[100%] font-[Inter_Var]">
                Masters100%
              </span>
            </div>
            <div className="flex items-start gap-[1.5rem]">
              <Image
                src="/images/facebook-1.svg"
                alt="Facebook logo"
                height={24}
                width={24}
              />
              <Image
                src="/images/telegram-1.svg"
                alt="Telegram logo"
                height={24}
                width={24}
              />
              <Image
                src="/images/viber-1.svg"
                alt="Viber logo"
                height={24}
                width={24}
              />
            </div>
          </div>
          <div className="sm:hidden md:flex sm:flex-col md:flex-row xl:flex-col xl:hidden w-full md:px-[1.25rem] items-start gap-[1.25rem] self-stretch">
            <div className="sm:hidden md:flex xl:hidden w-full flex-col justify-center items-start gap-[1rem]">
              <p className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
                {t('footer.section1').split('_')[0]}
              </p>
              <p className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
                {t('footer.section1').split('_')[1]}
              </p>
              <p className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
                {t('footer.section1').split('_')[2]}
              </p>
            </div>
            <div className="sm:hidden md:flex xl:hidden w-full flex-col justify-center items-start gap-[1rem]">
              <p className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
                {t('footer.section2').split('_')[0]}
              </p>
              <p className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
                {t('footer.section2').split('_')[1]}
              </p>
            </div>
          </div>
          <div className="sm:flex md:hidden sm:flex-col md:flex-row xl:flex-col xl:hidden w-full md:px-[1.25rem] items-start gap-[1.25rem] self-stretch">
            <div className="sm:flex md:hidden xl:hidden w-full flex-col justify-center items-start gap-[1rem]">
              <p className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
                {t('footer.section1').split('_')[0]}
              </p>
              <p className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
                {t('footer.section1').split('_')[1]}
              </p>
              <p className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
                {t('footer.section1').split('_')[2]}
              </p>
              <p className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
                {t('footer.section2').split('_')[1]}
              </p>
            </div>
          </div>
          <div className="sm:hidden xl:flex flex w-[12.5rem] flex-col justify-center items-start gap-[1rem]">
            <p className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
              {t('footer.section1').split('_')[0]}
            </p>
            <p className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
              {t('footer.section1').split('_')[1]}
            </p>
            <p className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
              {t('footer.section1').split('_')[2]}
            </p>
          </div>
          <div className="sm:hidden xl:flex w-[12.5rem] flex-col justify-center items-start gap-[1rem]">
            <p className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
              {t('footer.section2').split('_')[1]}
            </p>
          </div>
          <div className="flex sm:w-full md:px-[1.25rem] xl:px-0 xl:w-[25rem] sm:flex-row xl:flex-col justify-center items-start gap-[2.5rem]">
            <div className="flex sm:flex-col md:flex-row sm:w-full xl:flex-col items-start self-stretch sm:gap-[1.25rem] xl:gap-[1.5rem] sm:left-[1.25rem] sm:right-[1.25rem] xl:left-[3.5rem] xl:right-[3.5rem]">
              <div className="flex flex-col items-start self-stretch gap-[0.375rem] sm:w-full">
                <p className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[500] leading-[1.25rem] self-stretch">
                  {t('footer.section3.title')}
                </p>
                <p className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem] self-stretch">
                  {t('footer.section3.subtitle')}
                </p>
              </div>
              <div className="flex items-start gap-[1rem] self-stretch sm:flex-col xl:flex-row sm:w-full">
                <input
                  placeholder={t('footer.form.inputTitle')}
                  className="flex py-[1rem] px-[1.5rem] items-center gap-[0.75] flex-[1_0_0] border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#0000005c] w-full"
                />
                <OutlinedStandardButton title={t('footer.form.btnTitle')} />
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}
