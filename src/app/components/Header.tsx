'use client'
// import i18next from '../a'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
export default function HeaderComponent() {
  const { t } = useTranslation()
  const { i18n } = useTranslation()

  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  const router = useRouter()
  const [flagHover, setFlagHover] = useState(() => ({
    engHover: false,
    ukrHover: false,
    hover: false,
    flag: searchParams.get('lang'),
  }))
  console.log(router)

  useEffect(() => {
    console.log(flagHover)
  }, [flagHover])
  return (
    <Suspense>
      <header className="z-10 fixed xl:left-[3.5rem] xl:right-[3.5rem] top-[0rem] bottom-[calc(100vh-6rem)] flex py-[1.5rem] md:px-[1.25rem] justify-between items-center self-stretch bg-background sm:left-[1.25rem] sm:right-[1.25rem] ">
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
          className="xl:flex items-start gap-[3rem] sm:hidden"
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
              href={`/home?lang=${searchParams.get('lang')}#gallery`}
              className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
              aria-label="Go to gallery page"
            >
              {t('header.text').split('_')[3]}
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
        {flagHover.hover ? (
          <>
            <div className="sm:hidden xl:block">
              <Image
                height={24}
                width={34}
                alt="flag"
                src={`/images/flag-en.svg`}
              />
            </div>
            <div
              className="xl:flex w-[11.9375rem] flex-col items-start border-[#8F5E00] border-[1px] border-solid shadow-xl shadow-[rgba(15,42,81,0.08)] absolute right-0 top-[1.25rem] cursor-pointer sm:hidden"
              onMouseLeave={() =>
                setFlagHover((prevValue) => ({
                  engHover: false,
                  ukrHover: false,
                  hover: false,
                  flag: prevValue.flag,
                }))
              }
            >
              <div
                className="flex p-[0.75rem] justify-between items-center self-stretch bg-[#FFF] hover:bg-[#8F5E00]"
                onMouseEnter={() =>
                  setFlagHover((prevValue) => ({
                    engHover: true,
                    ukrHover: false,
                    hover: true,
                    flag: prevValue.flag,
                  }))
                }
                onClick={() => {
                  setFlagHover(() => ({
                    engHover: false,
                    ukrHover: false,
                    hover: false,
                    flag: 'en',
                  }))
                  params.set('lang', 'en')
                  console.log(params.toString())
                  router.push(`?${params.toString()}`, { scroll: false })
                  i18n.changeLanguage('en')
                }}
              >
                <p
                  className={`${
                    flagHover.engHover ? 'text-[#FFF]' : 'text-[#1E1B28]'
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
                className="flex p-[0.75rem] items-center self-stretch gap-[1.5rem] bg-[#FFF] hover:bg-[#8F5E00]"
                onMouseEnter={() =>
                  setFlagHover((prevValue) => ({
                    engHover: false,
                    ukrHover: true,
                    hover: true,
                    flag: prevValue.flag,
                  }))
                }
                onClick={() => {
                  setFlagHover(() => ({
                    engHover: false,
                    ukrHover: false,
                    hover: false,
                    flag: 'uk',
                  }))
                  params.set('lang', 'uk')
                  router.push(`?${params.toString()}`, { scroll: false })
                  i18n.changeLanguage('uk')
                }}
              >
                <p
                  className={`${
                    flagHover.ukrHover ? 'text-[#FFF]' : 'text-[#1E1B28]'
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
        ) : (
          <div
            onMouseEnter={() =>
              setFlagHover((prevValue) => ({
                ...prevValue,
                engHover: true,
                hover: true,
              }))
            }
            className="sm:hidden xl:block"
          >
            <Image
              height={24}
              width={34}
              alt="flag"
              src={`/images/flag-${flagHover.flag}.svg`}
            />
          </div>
        )}
        <div className="xl:hidden">
          <Image
            alt="menu icon"
            src="images/menu.svg"
            width={24}
            height={24}
            className="object-fill"
            // objectFit="fill"
          />
        </div>
      </header>
    </Suspense>
  )
}
