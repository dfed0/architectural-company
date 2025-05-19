'use client'
interface MainText {
  title?: string
}
export default function HighlightedSection({ title }: MainText) {
  return (
    <section className="pb-[3.5rem] pt-[13rem] flex flex-col self-stretch relative">
      <h1 className="font-[Roboto_Serif] text-[#1E1B28] text-[7.5rem] font-[700] leading-[7.5rem]">
        {title ? 'Gallery' : 'European'}
      </h1>
      <h1 className="font-[Roboto_Serif] text-[#1E1B28] text-[7.5rem] font-[700] leading-[7.5rem] text-center">
        {title
          ? `of ${
              title
                .split('-') // ['kitchen', 'upgrade']
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))[0]
            }`
          : 'Style'}
        {/* overflow-hidden? */}
      </h1>
      <h1 className="font-[Roboto_Serif] text-[#1E1B28] text-[7.5rem] font-[700] leading-[7.5rem] text-right">
        {title
          ? `${title
              .split('-')
              .slice(1)
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}`
          : 'Renovations'}
      </h1>
      <span className="absolute text-[#1E1B28] right-0 top-[12.25rem] font-[400] leading-[1.5rem] text-[1rem]  tracking-[-0.005rem] text-right ">
        Established in 2005
      </span>
      <span className="absolute text-[#1E1B28] bottom-[4.25rem]  leading-[1.5rem] text-[1rem] font-[400] tracking-[-0.005rem]">
        Based in Kyiv, Ukraine
      </span>
    </section>
  )
}
