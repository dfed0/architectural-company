'use client'

type InteriorProps = {
  children: string
}

const InteriorDesign = ({ children }: InteriorProps) => {
  return (
    <p className=" text-[#000] font-[Inter_Var] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full hover:text-[#AD7C00]">
      {children}
    </p>
  )
}

export default InteriorDesign
