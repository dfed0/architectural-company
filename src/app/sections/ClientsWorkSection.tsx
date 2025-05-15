'use client'

import TestimonialCard from '../components/TestimonialCard'

export default function ClientsWorkSection() {
  return (
    <>
      <section className="flex py-[3.5rem] flex-col justify-center items-center gap-[3.5rem] self-stretch">
        <h2 className="text-[#1E1B28] font-[Roboto_Serif] text-[2.5rem] font-[700] leading-[3.25rem] tracking-[0.05rem]">
          What Our Clients Say
        </h2>
        <div className="flex items-start gap-[3rem] self-stretch">
          <TestimonialCard
            name="Ludwig Van Cleef"
            role="Architect"
            comment="The renovation was seamless and exceeded our expectations..."
            imageUrl="/images/avatar.jpeg"
          />
          <TestimonialCard
            name="Ludwig Van Cleef"
            role="Architect"
            comment="The renovation was seamless and exceeded our expectations... Very nice and beautiful! Amazing job!"
            imageUrl="/images/avatar.jpeg"
          />
          <TestimonialCard
            name="Ludwig Van Cleef"
            role="Architect"
            comment="The renovation was seamless and exceeded our expectations..."
            imageUrl="/images/avatar.jpeg"
          />
          <TestimonialCard
            name="Ludwig Van Cleef"
            role="Architect"
            comment="The renovation was seamless and exceeded our expectations... wow wow wow"
            imageUrl="/images/avatar.jpeg"
          />
        </div>
      </section>
      <section>
        <div className="flex py-[3.5rem] items-start gap-[3.5rem] self-stretch">
          <h3 className="text-[#1E1B28] text-[2.5rem] font-[700] font-[Roboto_Serif] leading-[3.25rem] w-full ">
            Our Process
          </h3>
          <p className=" text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
            We professionally, qualitatively, quickly and inexpensively perform
            <br />
            finishing (putty, plaster, wallpaper, painting), drywall, tile work,
            <br />
            screed, laminate, linoleum, baseboards, etc.
          </p>
        </div>
      </section>
    </>
  )
}
