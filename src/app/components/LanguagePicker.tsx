'use client'

import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { useWindowSize } from '../contexts/WindowSizeContext'
type FlagState = {
  engHover: boolean
  ukrHover: boolean
  hover: boolean
  flag: string
  click: boolean
}

type Props = {
  setFlag: Dispatch<SetStateAction<FlagState>>
  flag: FlagState
}
export default function LanguagePicker({ setFlag, flag }: Props) {
  const { i18n } = useTranslation()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  const router = useRouter()
  const { windowWidth } = useWindowSize()
    return (
      <>
        {windowWidth >= 1440 && (
          <>
            <div
              className="z-20 sm:hidden xl:flex w-[10.4rem] flex-col items-start border-[#8F5E00] border-[1px] border-solid shadow-xl shadow-[rgba(15,42,81,0.08)] absolute right-0 top-[4rem] cursor-pointer rounded-b-[0.25rem] overflow-hidden"
              onMouseLeave={() =>
                setFlag((prevValue) => ({
                  engHover: false,
                  ukrHover: false,
                  hover: false,
                  flag: prevValue.flag,
                  click: prevValue.click,
                }))
              }
            >
              <div
                className="flex p-[0.75rem] justify-between items-center self-stretch bg-[#FFF] hover:bg-[#8F5E00] h-[2rem]"
                onMouseEnter={() =>
                  setFlag((prevValue) => ({
                    engHover: true,
                    ukrHover: false,
                    hover: true,
                    flag: prevValue.flag,
                    click: prevValue.click,
                  }))
                }
                onClick={() => {
                  setFlag((prevValue) => ({
                    engHover: false,
                    ukrHover: false,
                    hover: false,
                    flag: 'en',
                    click: prevValue.click,
                  }))
                  params.set('lang', 'en')
                  console.log(params.toString())
                  router.push(`?${params.toString()}`, { scroll: false })
                  i18n.changeLanguage('en')
                }}
              >
                <p
                  className={`${
                    flag.engHover ? 'text-[#FFF]' : 'text-[#1E1B28]'
                  } font-[Inter_Var] text-[1rem] font-[500] leading-[2rem]`}
                >
                  English
                </p>
                <Image
                  height={18}
                  width={26}
                  alt="flag"
                  src={`/images/flag-en.svg`}
                />
              </div>
              <div
                className="flex p-[0.75rem] h-[2rem] justify-between items-center self-stretch bg-[#FFF] hover:bg-[#8F5E00]"
                onMouseEnter={() =>
                  setFlag((prevValue) => ({
                    engHover: false,
                    ukrHover: true,
                    hover: true,
                    flag: prevValue.flag,
                    click: prevValue.click
                  }))
                }
                onClick={() => {
                  setFlag((prevValue) => ({
                    engHover: false,
                    ukrHover: false,
                    hover: false,
                    flag: 'uk',
                    click: prevValue.click
                  }))
                  params.set('lang', 'uk')
                  router.push(`?${params.toString()}`, { scroll: false })
                  i18n.changeLanguage('uk')
                }}
              >
                <p
                  className={`${
                    flag.ukrHover ? 'text-[#FFF]' : 'text-[#1E1B28]'
                  } font-[Inter_Var] text-[1rem] font-[500] leading-[2rem]`}
                >
                  Українська
                </p>
                <Image
                  height={18}
                  width={26}
                  alt="flag"
                  src={`/images/flag-uk.svg`}
                />
              </div>
            </div>
          </>
        )}
      </>
    )
  }

