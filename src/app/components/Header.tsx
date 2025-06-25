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
import { useWindowSize } from '../contexts/WindowSizeContext'
// import { useWindowSize } from '../contexts/WindowSizeContext'
export default function HeaderComponent() {
  const { t } = useTranslation()
  const { clientWidth } = useWindowSize()
  // const { i18n } = useTranslation()
  // const { scrollSize, divWidth } = useWindowSize()
  const searchParams = useSearchParams()
  // const params = new URLSearchParams(searchParams.toString())
  const router = useRouter()
  const [menuActive, setMenuActive] = useState({
    navigation: false,
    language: false,
  })
  console.log(menuActive)
  const langParam = searchParams.get('lang')
  const [flag, setFlag] = useState(() => ({
    engHover: false,
    ukrHover: false,
    hover: false,
    flag: langParam,
    click: false,
  }))
  console.log(router)
  useEffect(() => {
    setFlag((prevValue) => ({ ...prevValue, flag: langParam }))
  }, [langParam])
  useEffect(() => {}, [flag.flag])
  return (
    <Suspense>
      <header
        className={`z-10 fixed sm:left-[1.25rem] sm:right-[calc(1.25rem+15px)] md:left-[1.25rem] md:right-[calc(1.25rem+15px)] xl:left-[3.5rem] xl:right-[3.5rem] top-[0rem] flex flex-col py-[1.5rem] md:px-[1.25rem] justify-between items-center self-stretch bg-background sm:bottom-[calc(100vh-6rem)]`}
      >
       
        <div className="flex flex-col w-full h-full gap-[2.5rem]">
          <div className="z-15 sm:gap-[2.5rem] md:gap-0 flex justify-between">
            <div className="flex h-[3rem] items-center gap-1 self-stretch">
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
                    setMenuActive((prevValue) => ({
                      ...prevValue,
                      navigation: !prevValue.navigation,
                    }))
                    setFlag((prevValue) => ({ ...prevValue, click: false }))
                  }}
                >
                  {menuActive.navigation || menuActive.language ? (
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
                {!(menuActive.language || menuActive.navigation) && (
                  <>
                    {clientWidth >= 390 && clientWidth < 1440 && (
                      <div
                        onClick={() => {
                          setFlag((prevValue) => ({
                            ...prevValue,
                            click: true,
                          }))
                          setMenuActive(() => ({
                            navigation: false,
                            language: true,
                          }))
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
                    )}
                    {(clientWidth < 390 || clientWidth >= 1440) && (
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
                    )}
                  </>
                )}
                <div
                  className="flex items-center xl:hidden"
                  onClick={() => {
                    if (Object.is(menuActive.navigation, menuActive.language)) {
                      setMenuActive(() => ({
                        navigation: true,
                        language: false,
                      }))
                    } else {
                      setMenuActive(() => ({
                        navigation: false,
                        language: false,
                      }))
                    }

                    setFlag((prevValue) => ({ ...prevValue, click: false }))
                  }}
                >
                  {menuActive.navigation || menuActive.language ? (
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
          
          </div>
          {menuActive.navigation && (
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
                  thisPage: true,
                  deleteParams: false,
                  fragment: '#contact',
                  deleteFragment: false,
                },
              ]}
              // ['Home', 'Our Services', 'About Us', 'Contact']
            />
          )}
          {menuActive.language && (
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
