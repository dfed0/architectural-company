// RoomCard.tsx

import Image from 'next/image'

type TestimonialCardProps = {
  name: string
  role: string
  imageUrl: string
  comment: string
}

const TestimonialCard = ({
  name,
  role,
  imageUrl,
  comment,
}: TestimonialCardProps) => {
  return (
    <div className="flex w-[18rem] p-[3rem] flex-col items-center gap-[1.5rem] rounded-[1.375rem] border-[1px] border-solid border-[rgba(0, 0, 0, 0.00)] bg-[#3a257e17]">
      <div className="flex items-center gap-[1rem] self-stretch">
        <Image
          src={imageUrl}
          alt="avatar"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem', objectFit: 'cover'}}
          className="rounded-[1.5rem] border-[2px] border-solid border-[rgba(82, 73, 110, 0.00)] shrink-0"
        />
        <div className="flex flex-col items-start flex-[1_0_0]">
          <strong className="text-[#1E1B28] font-[Roboto_Serif] text-[1rem] font-[700] leading-[1.25rem] tracking-[-0.005rem] self-stretch">
            {name}
          </strong>
          <p className="text-[#1a142e9e] font-[Inter] text-[1rem] font-[400] leading-[1.25rem] tracking-[-0.005rem] self-stretch">
            {role}
          </p>
        </div>
      </div>
      <div className="flex pb-[0.75rem] items-start gap-[1rem] self-stretch opacity-[0.8]">
        <div className="flex w-[3rem] flex-col items-center self-stretch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="95"
            viewBox="0 0 2 95"
            fill="none"
          >
            <path
              d="M1 0V95"
              stroke="#52496E"
              // stroke-opacity="0.2"
              // stroke-width="1.5"
            />
          </svg>
        </div>
        <p className="flex-[1_0_0] text-[#000] font-[Inter] text-[1rem] font-[400] leading-normal tracking-[-0.005rem]">
          {comment}
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard
