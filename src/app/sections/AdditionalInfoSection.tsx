'use client'

import Image from 'next/image'
import FilledStandardButton from '../components/FilledStandardButton'
import { Trans, useTranslation } from 'react-i18next'

export default function AdditionalInfoSection() {
  const { t } = useTranslation()
  return (
    <section className='xl:py-[3.5rem]'>
      <div
        id="divider"
        className="flex flex-col items-start self-stretch bg-[#00000029] h-[2px]"
      ></div>
      <div className=" xl:h-[37.875rem] self-stretch flex sm:flex-col xl:flex-row items-center">
        <div className="sm:py-[0] py-[2.5rem]">
          <Image
            width={760}
            height={1028}
            // style={{ height: '64.25rem', width: '47.5rem' }}
            alt="description to get interested"
            src="/images/room-sofa-second.svg"
            className="sm:w-[25.46544rem] sm:h-[12.86806rem] md:h-[29.5rem] md:w-[52.438rem] md:object-cover md:object-[center_67%] md:py-[2.5rem] xl:hidden "
          />
        </div>
        <div className="inline-flex flex-col items-start sm:gap-[2.25rem] xl:gap-[3rem] xl:w-[50rem] md:w-full">
          <div className="flex flex-col items-start gap-[1rem] xl:hidden">
            <h3 className="self-stretch text-[#1E1B28] font-[Roboto_Serif_Bold] text-[2.5rem] leading-[3.25rem] ">
              <Trans
                i18nKey="sections.additionalInfo.titleTablet"
                components={{ br: <br /> }}
              />
            </h3>
            <p className="text-[#000] font-[Inter_Var] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] self-stretch">
              <Trans
                i18nKey="sections.additionalInfo.subtitleTablet"
                components={{ br: <br /> }}
              />
            </p>
            <div className="sm:hidden md:block xl:hidden pt-[1.25rem]">
              <FilledStandardButton
                title={t('sections.additionalInfo.btnTitle')}
                type="button"
                link={`projects.title_${5}`}
                project="10"
              />
            </div>
          </div>
          <div className="sm:block md:hidden xl:hidden">
            <FilledStandardButton
              title={t('sections.additionalInfo.btnTitle')}
              type="button"
              link={`projects.title_${5}`}
              project="10"
            />
          </div>
          <div className="flex flex-col items-start gap-[1rem] sm:hidden xl:flex">
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
              link={`projects.title_${5}`}
              project="10"
            />
          </div>
        </div>
        <Image
          width={760}
          height={1028}
          style={{ height: '64.25rem', width: '47.5rem' }}
          alt="description to get interested"
          src="/images/room-sofa.svg"
          className="sm:hidden xl:block xl:h-[64.25rem] xl:w-[47.5rem] xl:mb-[8rem]"
        />
        {/* </div> */}
      </div>
      <div
        id="divider"
        className="flex flex-col items-start self-stretch bg-[#00000029] h-[2px] sm:hidden xl:block"
      ></div>
    </section>
  )
}
