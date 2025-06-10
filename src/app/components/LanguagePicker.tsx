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
  mode: 'dropdown' | 'burger'
}
export default function LanguagePicker({ mode, setFlag, flag }: Props) {
  const { i18n } = useTranslation()
  // const { scrollSize, divWidth } = useWindowSize()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  const router = useRouter()
  const { windowWidth } = useWindowSize()
  if (mode === 'dropdown') {
    return (
      <>
        {/* <div className="flex sm:mr-[24px] xl:mr-[0px]">
          <Image
            height={24}
            width={34}
            alt="flag"
            src={`/images/flag-${flag.hover}.svg`}
          />
        </div> */}
        <div
          className="sm:flex w-[11.9375rem] flex-col items-start border-[#8F5E00] border-[1px] border-solid shadow-xl shadow-[rgba(15,42,81,0.08)] absolute right-0 top-[1.25rem] cursor-pointer"
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
            className="flex p-[0.75rem] justify-between items-center self-stretch bg-[#FFF] hover:bg-[#8F5E00]"
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
              } font-[Inter_Var] text-[1.25rem] font-[500] leading-[2rem]`}
            >
              English
            </p>
            <Image
              height={24}
              width={34}
              alt="flag"
              src={`/images/flag-en.svg`}
            />
          </div>
          <div
            className="flex p-[0.75rem] justify-between items-center self-stretch bg-[#FFF] hover:bg-[#8F5E00]"
            onMouseEnter={() =>
              setFlag((prevValue) => ({
                engHover: false,
                ukrHover: true,
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
                flag: 'uk',
                click: prevValue.click,
              }))
              params.set('lang', 'uk')
              router.push(`?${params.toString()}`, { scroll: false })
              i18n.changeLanguage('uk')
            }}
          >
            <p
              className={`${
                flag.ukrHover ? 'text-[#FFF]' : 'text-[#1E1B28]'
              } font-[Inter_Var] text-[1.25rem] font-[500] leading-[2rem]`}
            >
              Українська
            </p>
            <Image
              height={24}
              width={34}
              alt="flag"
              src={`/images/flag-uk.svg`}
            />
          </div>
        </div>
      </>
    )
  } else if (mode === 'burger') {
    return (
      <>
        {/* <Burger
          setFlag={setFlag}
          navItems={['English', 'Українська']}
        /> */}
        {windowWidth >= 1440 && (
          <>
            {/* <div className="flex sm:mr-[24px] xl:mr-[0px]">
              <Image
                height={24}
                width={34}
                alt="flag"
                src={`/images/flag-${flag.flag}.svg`}
              />
            </div> */}
            <div
              className="sm:hidden xl:flex w-[11.9375rem] flex-col items-start border-[#8F5E00] border-[1px] border-solid shadow-xl shadow-[rgba(15,42,81,0.08)] absolute right-0 top-[1.25rem] cursor-pointer"
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
                className="flex p-[0.75rem] justify-between items-center self-stretch bg-[#FFF] hover:bg-[#8F5E00]"
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
                  } font-[Inter_Var] text-[1.25rem] font-[500] leading-[2rem]`}
                >
                  English
                </p>
                <Image
                  height={24}
                  width={34}
                  alt="flag"
                  src={`/images/flag-en.svg`}
                />
              </div>
              <div
                className="flex p-[0.75rem] justify-between items-center self-stretch bg-[#FFF] hover:bg-[#8F5E00]"
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
                  } font-[Inter_Var] text-[1.25rem] font-[500] leading-[2rem]`}
                >
                  Українська
                </p>
                <Image
                  height={24}
                  width={34}
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
}
