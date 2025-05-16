'use client'

import Image from 'next/image'
import FilledStandardButton from '../components/FilledStandardButton'

export default function AdditionalInfoSection() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1328"
        height="2"
        viewBox="0 0 1328 2"
        fill="none"
       
      >
        <path
          d="M-96 1H1410"
          className='stroke-[#fff]'
        />
      </svg>
      <section className="h-[56.25rem] self-stretch flex flex-row items-center">
        <div className="inline-flex flex-col items-start gap-[3rem] xl:w-[50rem]">
          <div className="flex flex-col items-start gap-[1rem]">
            <h3 className="self-stretch text-[#1E1B28] font-[Roboto_Serif] text-[2.5rem] font-[700] leading-[3.25rem]">
              Modern Repair and <br />
              Quality Service
            </h3>
            <p className="text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem]tracking-[-0.00625rem] self-stretch">
              Our specialists will offer the best types of materials, taking
              <br />
              into account modern aesthetics and functionality, creating <br />
              the best living conditions for you.
            </p>
          </div>
          <FilledStandardButton title="Learn More" />
        </div>
        <div className="inline-flex flex-col w-[100%] items-center h-[56.25rem]">
          <Image
            width={800}
            height={900}
            style={{ height: '56.25rem', width: '100%' }}
            alt="description to get interested"
            src="/images/room-sofa.svg"
            // className="object-cover"
          />
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1328"
        height="2"
        viewBox="0 0 1328 2"
        fill="none"
      >
        <path
          d="M-96 1H1410"
          stroke="black"
          // stroke-opacity="0.16"
          // stroke-width="2"
        />
      </svg>
    </>
  )
}
