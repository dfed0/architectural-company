'use client'

import Image from 'next/image'
import FilledStandardButton from '../components/FilledStandardButton'
import { Trans, useTranslation } from 'react-i18next'

export default function AdditionalInfoSection() {
  const { t } = useTranslation()
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1328"
        height="2"
        viewBox="0 0 1328 2"
        fill="none"
      >
        <path d="M-96 1H1410" className="stroke-[#00000029]" />
      </svg>
      <section className=" xl:h-[56.25rem] self-stretch flex sm:flex-col xl:flex-row items-center">
        <div className="sm:py-[0] py-[2.5rem]">
          {/* <Image
            width={760}
            height={1028}
            // style={{ height: '64.25rem', width: '47.5rem' }}
            alt="description to get interested"
            src="/images/room-sofa.svg"
            className="sm:hidden sm:w-[25.46544rem] sm:h-[28.86806rem] md:h-[29.5rem] md:w-[52.438rem] md:object-cover sm:object-[900%_center] md:object-[center_67%] xl:hidden "
          /> */}
          <Image
            width={760}
            height={1028}
            // style={{ height: '64.25rem', width: '47.5rem' }}
            alt="description to get interested"
            src="/images/room-sofa-second.svg"
            className="sm:w-[25.46544rem] sm:h-[12.86806rem] md:h-[29.5rem] md:w-[52.438rem] md:object-cover md:object-[center_67%] xl:hidden "
          />
        </div>
        <div className="inline-flex flex-col items-start sm:gap-[2.25rem] xl:gap-[3rem] xl:w-[50rem] md:w-full">
          <div className="flex flex-col items-start gap-[1rem] xl:hidden">
            <h3 className="self-stretch text-[#1E1B28] font-[Roboto_Serif_Bold] text-[2.5rem] leading-[3.25rem]">
              <Trans
                i18nKey="sections.additionalInfo.titleTablet"
                components={{ br: <br /> }}
              />
            </h3>
            <p className="text-[#000] font-[Inter_Var] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] self-stretch">
              {/* {t('sections.additionalInfo.subtitle')} */}
              <Trans
                i18nKey="sections.additionalInfo.subtitleTablet"
                components={{ br: <br /> }}
              />
            </p>
            <div className="sm:hidden md:block xl:hidden">
              <FilledStandardButton
                title={t('sections.additionalInfo.btnTitle')}
                type="button"
              />
            </div>
          </div>
          <div className="sm:block md:hidden xl:hidden">
              <FilledStandardButton
                title={t('sections.additionalInfo.btnTitle')}
                type="button"
              />
            </div>
          <div className="flex flex-col items-start gap-[1rem] sm:hidden xl:block">
            <h3 className="self-stretch text-[#1E1B28] font-[Roboto_Serif_Bold] text-[2.5rem] leading-[3.25rem]">
              <Trans
                i18nKey="sections.additionalInfo.title"
                components={{ br: <br /> }}
              />
            </h3>
            <p className="text-[#000] font-[Inter_Var] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] self-stretch">
              {/* {t('sections.additionalInfo.subtitle')} */}
              <Trans
                i18nKey="sections.additionalInfo.subtitle"
                components={{ br: <br /> }}
              />
            </p>
          </div>

          <div className="sm:hidden xl:block">
            <FilledStandardButton
              title={t('sections.additionalInfo.btnTitle')}
              type="button"
            />
          </div>
        </div>
        <Image
          width={760}
          height={1028}
          style={{ height: '64.25rem', width: '47.5rem' }}
          alt="description to get interested"
          src="/images/room-sofa.svg"
          className="sm:hidden xl:block xl:h-[64.25rem] xl:w-[47.5rem]"
        />
        {/* </div> */}
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1328"
        height="2"
        viewBox="0 0 1328 2"
        fill="none"
        className="sm:hidden xl:block"
      >
        <path d="M-96 1H1410" className="stroke-[#00000029]" />
      </svg>
    </>
  )
}
