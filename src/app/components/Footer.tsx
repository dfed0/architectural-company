'use client'

import OutlinedStandardButton from '@/app/components/OutlinedStandardButton'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  return (
    <>
      <footer className="flex xl:pt-[0rem] flex-col items-start gap-[3.5rem] self-stretch">
        <div
          id="divider"
          className="flex flex-col items-start self-stretch bg-[#00000029] h-[2px]"
        ></div>

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
              <Link href={'https://www.facebook.com/share/g/1DvCdDc2zQ/'}>
                <Image
                  src="/images/facebook-1.svg"
                  alt="Facebook logo"
                  height={24}
                  width={24}
                />
              </Link>
              <Link href={'https://t.me/+PE2Tlwp5AeYyZTMy'}>
                <Image
                  src="/images/telegram-1.svg"
                  alt="Telegram logo"
                  height={24}
                  width={24}
                />
              </Link>
              <Link
                href={
                  'https://invite.viber.com/?g=E6gvPNyp6FRRbqVka2NqRoPDqjaRKPHU'
                }
              >
                <Image
                  src="/images/viber-1.svg"
                  alt="Viber logo"
                  height={24}
                  width={24}
                />
              </Link>
            </div>
          </div>
          <div className="sm:hidden md:flex xl:hidden sm:flex-col md:flex-row xl:flex-col w-full md:px-[1.25rem] items-start gap-[1.25rem] self-stretch">
            <div className="sm:hidden md:flex xl:hidden w-full flex-col justify-center items-start gap-[1rem]">
              <Link
                href={`/home?lang=${searchParams.get('lang')}`}
                aria-label="Go to home page"
                className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]"
              >
                {t('footer.section1.title1')}
              </Link>
              <Link
                href={`/home?lang=${searchParams.get('lang')}#about-us`}
                aria-label="Go to about us section"
                className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]"
              >
                {t('footer.section1.title2')}
              </Link>
            </div>
            <div className="sm:hidden md:flex xl:hidden w-full flex-col justify-center items-start gap-[1rem]">
              <Link
                href={`/home?lang=${searchParams.get('lang')}#services`}
                aria-label="Go to services section"
                className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]"
              >
                {t('footer.section2.title1')}

                {/* {t('footer.section2').split('_')[0]} */}
              </Link>
              <Link
                href={`/home?lang=${searchParams.get('lang')}#contact`}
                aria-label="Go to about contact section"
                className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]"
              >
                {t('footer.section2.title2')}
              </Link>
            </div>
          </div>
          <div className="sm:flex md:hidden xl:hidden sm:flex-col md:flex-row xl:flex-col  w-full md:px-[1.25rem] items-start gap-[1.25rem] self-stretch">
            <div className="sm:flex md:hidden xl:hidden w-full flex-col justify-center items-start gap-[1rem]">
              <Link
                href={`/home?lang=${searchParams.get('lang')}`}
                aria-label="Go to home page"
                className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]"
              >
                {t('footer.section1.title1')}
              </Link>
              <Link
                href={`/home?lang=${searchParams.get('lang')}#about-us`}
                aria-label="Go to about us section"
                className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]"
              >
                {t('footer.section1.title2')}
              </Link>
              <Link
                href={`/home?lang=${searchParams.get('lang')}#services`}
                aria-label="Go to services section"
                className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]"
              >
                {t('footer.section2.title1')}
              </Link>
              <Link
                href={`/home?lang=${searchParams.get('lang')}#contact`}
                aria-label="Go to about contact section"
                className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]"
              >
                {t('footer.section2.title2')}
              </Link>
            </div>
          </div>
          <div className="sm:hidden xl:flex flex w-[12.5rem] flex-col justify-center items-start gap-[1rem]">
            <Link
              href={`/home?lang=${searchParams.get('lang')}`}
              aria-label="Go to home page"
              className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]"
            >
              {t('footer.section1.title1')}
            </Link>
            <Link
              href={`/home?lang=${searchParams.get('lang')}#about-us`}
              aria-label="Go to about us section"
              className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]"
            >
              {t('footer.section1.title2')}
            </Link>
          </div>
          <div className="sm:hidden xl:flex w-[12.5rem] flex-col justify-center items-start gap-[1rem]">
            <Link
              href={`/home?lang=${searchParams.get('lang')}#services`}
              aria-label="Go to services section"
              className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]"
            >
              {t('footer.section2.title1')}
            </Link>
            <Link
              href={`/home?lang=${searchParams.get('lang')}#contact`}
              aria-label="Go to about contact section"
              className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]"
            >
              {t('footer.section2.title2')}
            </Link>
          </div>
          {/* facebook */}
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
                  className="flex py-[1rem] px-[1.5rem] items-center gap-[0.75] flex-[1_0_0] border-[2px] rounded-[0.75rem] border-solid border-[#00000029] focus:outline-none focus:border-[#00000029] text-[#0000005c] w-full"
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
