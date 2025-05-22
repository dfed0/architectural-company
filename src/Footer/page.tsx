'use client'

import OutlinedStandardButton from '@/app/components/OutlinedStandardButton'
import Image from 'next/image'

export default function Footer() {
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
      <footer className="flex pt-[3.5rem] flex-col items-start gap-[3.5rem] self-stretch">
        <section className="flex py-[3.5rem] items-start gap-[2.5rem] self-stretch">
          <div className="flex flex-col h-[3rem] items-start gap-[1.5rem] flex-[1_0_0]">
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
          <div className="flex w-[12.5rem] flex-col justify-center items-start gap-[1rem]">
            <p className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
              Home
            </p>
            <p className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
              About Us
            </p>
            <p className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
              Our Services
            </p>
          </div>
          <div className="flex w-[12.5rem] flex-col justify-center items-start gap-[1rem]">
            <p className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
              Gallery of Works
            </p>
            <p className="text-[#00000099] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem]">
              Contact Us
            </p>
          </div>
          <div className="flex w-[25rem] flex-col justify-center items-start gap-[2.5rem]">
            <div className="flex flex-col items-start self-stretch gap-[2.5rem]">
              <div className="flex flex-col items-start self-stretch gap-[0.375rem]">
                <p className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[500] leading-[1.25rem] self-stretch">
                  Subscribe to our newsletter
                </p>
                <p className="text-[#000] font-[Inter_Var] text-[0.9375rem] font-[400] leading-[1.25rem] self-stretch">
                  Stay updated with our latest renovation tips and offers!
                </p>
              </div>
              <div className="flex items-start gap-[1rem] self-stretch">
                <input
                  placeholder="Email address"
                  className="flex py-[1rem] px-[1.5rem] items-center gap-[0.75] flex-[1_0_0] border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#0000005c]"
                />
                <OutlinedStandardButton title="Subscribe" />
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}
