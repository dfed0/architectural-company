// RoomCard.tsx


type ButtonProps = {
  title: string
}

const FilledStandardButton = ({ title }: ButtonProps) => {
  return (
    <button className="flex py-[0.75rem] px-[1.5rem] justify-center items-center rounded-[0.75rem] text-[#fff] bg-[#AD7C00] hover:bg-[#8F5E00]">
      {title}
    </button>
  )
}

export default FilledStandardButton
