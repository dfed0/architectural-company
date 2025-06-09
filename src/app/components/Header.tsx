'use client'
// import i18next from '../a'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Burger from './Burger'
import LanguagePicker from './LanguagePicker'
// import { useWindowSize } from '../contexts/WindowSizeContext'
export default function HeaderComponent() {
  const { t } = useTranslation()
  // const { i18n } = useTranslation()
  // const { scrollSize, divWidth } = useWindowSize()
  const searchParams = useSearchParams()
  // const params = new URLSearchParams(searchParams.toString())
  const router = useRouter()
  const [menuActive, setMenuActive] = useState(false)
  console.log(menuActive)
  const [flag, setFlag] = useState(() => ({
    engHover: false,
    ukrHover: false,
    hover: false,
    flag: searchParams.get('lang'),
    click: false,
  }))
  console.log(router)

  useEffect(() => {
    console.log(flag)
  }, [flag])

  return (
    <Suspense>
      <header
        className={`z-10 fixed xl:left-[3.5rem] xl:right-[3.5rem] top-[0rem] flex flex-col py-[1.5rem]  md:px-[1.25rem] justify-between items-center self-stretch bg-background sm:left-[1.25rem] sm:right-[calc(1.25rem+15px)] md:right-[calc(1.25rem)] ${
          menuActive
            ? 'bottom-[calc(100vh-30.54rem)]'
            : 'bottom-[calc(100vh-6rem)]'
        }`}
      >
        <div className="flex flex-col w-full h-full gap-[2.5rem]">
          <div className="z-15 flex justify-between">
            <div className="flex h-[3rem] items-center gap-1">
              <div className="flex h-[2rem] items-center gap-[0.375rem]">
                <Image
                  src="/images/logomark.svg"
                  alt="Picture of the author"
                  height={32}
                  width={32}
                />
                <span className="text-[#AD7C00] font-[500] text-[1.25rem] leading-[100%] font-[Inter_Var]">
                  Masters100%
                </span>
              </div>
            </div>
            <div
              role="navigation"
              aria-label="Main menu"
              className="xl:flex items-center gap-[3rem] sm:hidden"
            >
              <div className="flex content-center items-center gap-[0.625rem] h-[43.5px] font-[Inter_Var]">
                <Link
                  href={`/home?lang=${searchParams.get('lang')}`}
                  className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
                  aria-label="Go to about home page"
                >
                  {t('header.text').split('_')[0]}
                </Link>
              </div>
              <div className="flex content-center items-center gap-[0.625rem] h-[43.5px] font-[Inter_Var]">
                <Link
                  href={`/home?lang=${searchParams.get('lang')}#services`}
                  className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
                  aria-label="Go to services section"
                >
                  {t('header.text').split('_')[1]}
                </Link>
              </div>
              <div className="flex content-center items-center gap-[0.625rem] h-[43.5px] font-[Inter_Var]">
                <Link
                  href={`/home?lang=${searchParams.get('lang')}#about-us`}
                  className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
                  aria-label="Go to about us section"
                >
                  {t('header.text').split('_')[2]}
                </Link>
              </div>

              <div className="flex content-center items-center gap-[0.625rem] h-[43.5px] font-[Inter_Var]">
                <Link
                  href={`/home?lang=${searchParams.get('lang')}#contact`}
                  className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
                  aria-label="Go to about contact section"
                >
                  {t('header.text').split('_')[4]}
                </Link>
              </div>
            </div>
            {flag.hover ? (
              <div className="flex">
                <LanguagePicker flag={flag} setFlag={setFlag} mode="burger" />

                <div
                  onMouseEnter={() =>
                    setFlag((prevValue) => ({
                      ...prevValue,
                      engHover: true,
                      hover: true,
                    }))
                  }
                  className="sm:mr-[24px] xl:mr-[0px] self-center"
                >
                  <Image
                    height={24}
                    width={34}
                    alt="flag"
                    src={`/images/flag-${flag.flag}.svg`}
                  />
                </div>
                <div
                  className="flex items-center xl:hidden"
                  onClick={() => {
                    setMenuActive((prevValue) => !prevValue)
                    setFlag((prevValue) => ({ ...prevValue, click: false }))
                  }}
                >
                  {menuActive ? (
                    <div className="flex items-center xl:hidden">
                      <Image
                        alt="menu icon"
                        src="/images/close.svg"
                        width={24}
                        height={24}
                        className="object-none w-[24px] h-[24px]"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center xl:hidden">
                      <Image
                        alt="menu icon"
                        src="/images/menu.svg"
                        width={24}
                        height={24}
                        className="object-none w-[24px] h-[24px]"
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex">
                <div
                  // onMouseEnter={() =>
                  //   setFlag((prevValue) => ({
                  //     ...prevValue,
                  //     engHover: true,
                  //     hover: true,
                  //   }))
                  // }
                  onClick={() => {
                    setFlag((prevValue) => ({ ...prevValue, click: true }))
                    setMenuActive(() => false)
                  }}
                  className="sm:mr-[24px] xl:mr-[0px] self-center"
                >
                  <Image
                    height={24}
                    width={34}
                    alt="flag"
                    src={`/images/flag-${flag.flag}.svg`}
                  />
                </div>
                <div
                  className="flex items-center xl:hidden"
                  onClick={() => {
                    setMenuActive((prevValue) => !prevValue)
                    setFlag((prevValue) => ({ ...prevValue, click: false }))
                  }}
                >
                  {menuActive ? (
                    <Image
                      alt="menu icon"
                      src="/images/close.svg"
                      width={24}
                      height={24}
                      className="object-none w-[24px] h-[24px]"
                    />
                  ) : (
                    <Image
                      alt="menu icon"
                      src="/images/menu.svg"
                      width={24}
                      height={24}
                      className="object-none w-[24px] h-[24px]"
                    />
                  )}
                </div>
              </div>
            )}
            {/* <div
              className="flex items-center xl:hidden"
              onClick={() => setMenuActive((prevValue) => !prevValue)}
            >
              {menuActive ? (
                <Image
                  alt="menu icon"
                  src="/images/close.svg"
                  width={24}
                  height={24}
                  className="object-none w-[24px] h-[24px]"
                />
              ) : (
                <Image
                  alt="menu icon"
                  src="/images/menu.svg"
                  width={24}
                  height={24}
                  className="object-none w-[24px] h-[24px]"
                />
              )}
            </div> */}
          </div>
          {menuActive && (
            <Burger
              setMenuActive={setMenuActive}
              navItems={[
                {
                  name: 'Home',
                  path: '/home',
                  deleteParams: true,
                  paramsToSave: ['lang'],
                  deleteFragment: true,
                },
                {
                  name: 'Our Services',
                  path: '/home',
                  deleteParams: true,
                  paramsToSave: ['lang'],
                  fragment: '#services',
                  deleteFragment: false,
                },
                {
                  name: 'About Us',
                  path: '/home',
                  deleteParams: true,
                  paramsToSave: ['lang'],
                  fragment: '#about-us',
                  deleteFragment: false,
                },
                {
                  name: 'Contact',
                  path: '/home',
                  deleteParams: true,
                  paramsToSave: ['lang'],
                  fragment: '#contact',
                  deleteFragment: false,
                },
              ]}
              // ['Home', 'Our Services', 'About Us', 'Contact']
            />
          )}
          {flag.click && (
            <Burger
              setMenuActive={setMenuActive}
              navItems={[
                {
                  name: 'English',
                  lang: 'en',
                  deleteParams: false,
                  deleteFragment: false,
                },
                {
                  name: 'Українська',
                  lang: 'uk',
                  deleteParams: false,
                  deleteFragment: false,
                },
              ]}
            />
          )}
        </div>
      </header>
    </Suspense>
  )
}
