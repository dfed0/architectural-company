'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import FooterLinks from './FooterLinks'

export default function Footer() {
  const [hover, setHover] = useState({
    facebook: false,
    telegram: false,
    viber: false,
  })
  const searchParams = useSearchParams()
  return (
    <>
      <footer className="flex xl:pt-[0rem] flex-col items-start sm:gap-[1.25rem] md:gap-0 self-stretch">
        <div
          id="divider"
          className="flex flex-col items-start self-stretch bg-[#00000029] h-[2px]"
        ></div>
        <section className="flex sm:py-[1.25rem] sm:my-0 md:my-[1.75rem] xl:my-0 xl:py-[7rem] sm:flex-col md:flex-col xl:flex-row items-start sm:gap-[1.25rem] md:gap-[3.92rem] xl:gap-[0rem]  self-stretch md:items-center">
          {/* xl:pb-[3.5rem] */}
          <div className="flex w-full justify-between sm:flex-col md:flex-col xl:flex-row  sm:gap-[1.25rem] xl:gap-0">
            <div className="flex sm:flex-col md:flex-row xl:flex-row xl:h-[3rem] sm:items-center md:items-center xl:items-center xl:px-[1.25rem] xl:py-[0] sm:gap-[1.5rem] self-stretch">
              <div className="flex h-[2rem] items-center sm:w-max">
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
              <div className="flex sm:items-start gap-[1.5rem] w-[7.5rem] h-[1.5rem]">
                <Link
                  href={'https://www.facebook.com/groups/2276962082759857/?ref=share'}
                  className="w-full h-full"
                  onMouseEnter={() =>
                    setHover((prevValue) => ({ ...prevValue, facebook: true }))
                  }
                  onMouseLeave={() =>
                    setHover((prevValue) => ({ ...prevValue, facebook: false }))
                  }
                >
                  <Image
                    src={`/images/facebook-1${
                      hover.facebook ? '-hover' : ''
                    }.svg`}
                    alt="Facebook logo"
                    height={24}
                    width={24}
                  />
                </Link>
                <Link
                  href={'https://t.me/+HO-_-Ofq4jMzOGNi'}
                  className="w-full h-full"
                  onMouseEnter={() =>
                    setHover((prevValue) => ({ ...prevValue, telegram: true }))
                  }
                  onMouseLeave={() =>
                    setHover((prevValue) => ({ ...prevValue, telegram: false }))
                  }
                >
                  <Image
                    src={`/images/telegram-1${
                      hover.telegram ? '-hover' : ''
                    }.svg`}
                    alt="Telegram logo"
                    height={24}
                    width={24}
                  />
                </Link>
                <Link
                  href={
                    'https://invite.viber.com/?g2=AQBY0CHLGVa3xVT1pU%2B2Xb2kmkmBxNs%2FpJ541vFIRaRtOdLE4hLki2lMQqX7%2FeZU'
                  }
                  className="w-full h-full"
                  onMouseEnter={() =>
                    setHover((prevValue) => ({ ...prevValue, viber: true }))
                  }
                  onMouseLeave={() =>
                    setHover((prevValue) => ({ ...prevValue, viber: false }))
                  }
                >
                  <Image
                    src={`/images/viber-1${hover.viber ? '-hover' : ''}.svg`}
                    alt="Viber logo"
                    height={24}
                    width={24}
                  />
                </Link>
              </div>
            </div>

            <div className="sm:hidden md:flex xl:hidden md:gap-[3.92rem]  sm:flex-col md:flex-row xl:flex-col xl:px-[1.25rem] items-start md:items-center md:justify-between gap-[1.25rem] self-stretch h-[2rem]">
              <FooterLinks
                links={[
                  { href: '', label: 'footer.section1.title1' },
                  { href: '#about-us', label: 'footer.section1.title2' },
                  { href: '#services', label: 'footer.section2.title1' },
                  { href: '#contact', label: 'footer.section2.title2' },
                ]}
                linkClass="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[500] leading-[1.25rem] w-max sm:hidden md:block xl:hidden self-center hover:text-[#8F5E00]"
                langParam={`${searchParams.get('lang')}`}
              />
            </div>
            <div className="sm:flex md:hidden xl:hidden sm:flex-col md:flex-row xl:flex-col w-full md:px-[1.25rem] gap-[1.25rem] self-stretch">
              <div className="sm:flex md:hidden xl:hidden w-full flex-col justify-center items-center sm:gap-[1.25rem]">
                <FooterLinks
                  links={[
                    { href: '', label: 'footer.section1.title1' },
                    { href: '#about-us', label: 'footer.section1.title2' },
                    { href: '#services', label: 'footer.section2.title1' },
                    { href: '#contact', label: 'footer.section2.title2' },
                  ]}
                  linkClass="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[500] leading-[1.25rem] w-max hover:text-[#8F5E00]"
                  langParam={`${searchParams.get('lang')}`}
                />
              </div>
            </div>
            <FooterLinks
              links={[
                { href: '', label: 'footer.section1.title1' },
                { href: '#about-us', label: 'footer.section1.title2' },
                { href: '#services', label: 'footer.section2.title1' },
                { href: '#contact', label: 'footer.section2.title2' },
              ]}
              linkClass="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[500] leading-[1.25rem] w-max sm:hidden xl:block self-center hover:text-[#8F5E00]"
              langParam={`${searchParams.get('lang')}`}
            />
          </div>
        </section>
      </footer>
    </>
  )
}
