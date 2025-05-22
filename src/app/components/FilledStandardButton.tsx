// RoomCard.tsx

type ButtonProps = {
  title: string
  type: 'submit' | 'reset' | 'button'
}

const FilledStandardButton = ({ title, type }: ButtonProps) => {
  return (
    <button
      className="flex py-[0.75rem] px-[1.5rem] justify-center items-center rounded-[0.75rem]  text-[#fff] font-[Inter_Var] font-[600] bg-[#AD7C00] hover:bg-[#8F5E00]"
      type={type}
    >
      {title}
    </button>
  )
}

export default FilledStandardButton
