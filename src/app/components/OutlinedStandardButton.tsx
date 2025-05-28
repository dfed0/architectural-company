// RoomCard.tsx

type ButtonProps = {
  title: string
}

const OutlinedStandardButton = ({ title }: ButtonProps) => {
  return (
    <button className="flex py-[1rem] px-[2.5rem] items-center justify-center border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] text-[0.9375rem] font-[400] font-[Inter_Var] leading-[1.25rem] hover:bg-[#8F5E00] hover:text-[#FFF] hover:font-[600] cursor-pointer">
      {title}
    </button>
  )
}

export default OutlinedStandardButton
