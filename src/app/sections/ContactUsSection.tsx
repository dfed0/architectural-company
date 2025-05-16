'use client'

import FilledStandardButton from '../components/FilledStandardButton'

export default function ContactUsSection() {
  return (
    <section className="flex py-[3.5rem] items-start gap-[6rem] self-stretch">
      <div className="self-stretch w-full">
        <h2 className="text-[#1E1B28] font-[Roboto_Serif] text-[2.5rem] font-[700] leading-[3.25rem]">
          Contact Us
        </h2>
        <p className="self-stretch text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem]">
          Get in touch with our team for more information or to schedule a<br /> tour.
        </p>
      </div>
      {/* <div className="w-full"> */}
      <form className=" flex flex-col items-start gap-[1.5rem] w-full">
        <div className="flex items-start gap-[1.5rem] self-stretch">
          <input className="flex min-h-[2.75rem] p-[1rem] items-center gap-[0.5rem] flex-[1_0_0] border-[2px] rounded-[0.75rem] border-solid border-[#00000029]"></input>
          <input className="flex min-h-[2.75rem] p-[1rem] items-center gap-[0.5rem] flex-[1_0_0] border-[2px] rounded-[0.75rem] border-solid border-[#00000029]"></input>
        </div>
        <input className="flex min-h-[2.75rem] p-[1rem] items-center gap-[0.5rem] self-stretch border-[2px] rounded-[0.75rem] border-solid border-[#00000029] w-full"></input>
        <textarea className="flex min-h-[7.75rem] p-[1rem] items-start gap-[0.5rem] self-stretch border-[2px] rounded-[0.75rem] border-solid border-[#00000029]"></textarea>
        <FilledStandardButton title="Submit" />
      </form>
      {/* </div> */}
    </section>
  )
}
