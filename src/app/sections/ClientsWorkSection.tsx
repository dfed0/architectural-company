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
      <section>
        <div className="flex py-[3.5rem] items-start gap-[3.5rem] self-stretch">
          <h3 className="text-[#1E1B28] text-[2.5rem] font-[700] font-[Roboto_Serif] leading-[3.25rem] w-full ">
            Our Achievements
          </h3>
          <div className="w-full">
            <div className="flex items-center gap-[3.5rem] self-stretch">
              <div className="flex pt-[3rem] pb-[3.5rem] flex-col justify-center items-start gap-[0.75rem] flex-[1_0_0] border-t-[2px] border-[#5c5c5c33] border-solid">
                <span className="line-clamp-1 self-stretch text-[#212121] overflow-ellipsis font-[Inter] text-[3rem] font-[600] leading-[3.25rem] tracking-[-0.075rem]">
                  150+
                </span>
                <span className="line-clamp-2 self-stretch text-[#000] overflow-ellipsis font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem]">
                  Projects completed
                </span>
              </div>
              <div className="flex pt-[3rem] pb-[3.5rem] flex-col justify-center items-start gap-[0.75rem] flex-[1_0_0] border-t-[2px] border-[#5c5c5c33] border-solid">
                <span className="line-clamp-1 self-stretch text-[#212121] overflow-ellipsis font-[Inter] text-[3rem] font-[600] leading-[3.25rem] tracking-[-0.075rem]">
                  20 Years
                </span>
                <span className="line-clamp-2 self-stretch text-[#000] overflow-ellipsis font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem]">
                  Industry Experience
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[3.5rem] self-stretch">
              <div className="flex pt-[3rem] pb-[3.5rem] flex-col justify-center items-start gap-[0.75rem] flex-[1_0_0] border-t-[2px] border-[#5c5c5c33] border-solid">
                <span className="line-clamp-1 self-stretch text-[#212121] overflow-ellipsis font-[Inter] text-[3rem] font-[600] leading-[3.25rem] tracking-[-0.075rem]">
                  100%
                </span>
                <span className="line-clamp-2 self-stretch text-[#000] overflow-ellipsis font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem]">
                  Client Satisfaction
                </span>
              </div>
              <div className="flex pt-[3rem] pb-[3.5rem] flex-col justify-center items-start gap-[0.75rem] flex-[1_0_0] border-t-[2px] border-[#5c5c5c33] border-solid">
                <span className="line-clamp-1 self-stretch text-[#212121] overflow-ellipsis font-[Inter] text-[3rem] font-[600] leading-[3.25rem] tracking-[-0.075rem]">
                  10+
                </span>
                <span className="line-clamp-2 self-stretch text-[#000] overflow-ellipsis font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem]">
                  Team Members
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex py-[3.5rem] items-start gap-[3.5rem] self-stretch">
          <h3 className="text-[#1E1B28] text-[2.5rem] font-[700] font-[Roboto_Serif] leading-[3.25rem] w-full ">
            What We Offer
          </h3>
          <div className="flex flex-col justify-center items-start gap-[1.5rem]  w-full">
            <div className="flex items-center gap-[3.5rem] self-stretch w-full">
              <p className="text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Tile Work
              </p>
              <p className=" text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Drywall Installation
              </p>
            </div>
            <div className="flex items-center gap-[3.5rem] self-stretch w-full">
              <p className="text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Floor Coverings
              </p>
              <p className=" text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Wallpapering
              </p>
            </div>
            <div className="flex items-center gap-[3.5rem] self-stretch w-full">
              <p className="text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Soundproofing
              </p>
              <p className=" text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Installation of Lining
              </p>
            </div>
            <div className="flex items-center gap-[3.5rem] self-stretch w-full">
              <p className="text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Kitchen Renovation
              </p>
              <p className=" text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Bathroom or Toilet Renovation
              </p>
            </div>
            <div className="flex items-center gap-[3.5rem] self-stretch w-full">
              <p className="text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Wall Panels
              </p>
              <p className=" text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Waterproofing
              </p>
            </div>
            <div className="flex items-center gap-[3.5rem] self-stretch w-full">
              <p className="text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Thermal Insulation
              </p>
              <p className=" text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Masonry Works
              </p>
            </div>
            <div className="flex items-center gap-[3.5rem] self-stretch w-full">
              <p className="text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Demolition of Walls and Partitions
              </p>
              <p className=" text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Dismantling of Plumbing
              </p>
            </div>
            <div className="flex items-center gap-[3.5rem] self-stretch w-full">
              <p className="text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Removing Paints
              </p>
              <p className=" text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Electrical Installation Works
              </p>
            </div>
            <div className="flex items-center gap-[3.5rem] self-stretch w-full">
              <p className="text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Plumbing Works
              </p>
              <p className=" text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Installation Works (Slabs, FBS)
              </p>
            </div>
            <div className="flex items-center gap-[3.5rem] self-stretch w-full">
              <p className="text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Decorative Wall Finishing
              </p>
              <p className=" text-[#000] font-[Inter] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
                Rough Work on the Floor
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
