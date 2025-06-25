'use client'

import Image from 'next/image'
import TooltipParagraph from './tooltip'
import { useState } from 'react'
import Modal from './Modal'
import { useWindowSize } from '../contexts/WindowSizeContext'

type TestimonialCardProps = {
  name: string
  tender: string
  imageUrl: string
  comment: string
}

const TestimonialCard = ({
  name,
  tender,
  imageUrl,
  comment,
}: TestimonialCardProps) => {
  const [isModalActive, setModalActive] = useState(false)
const { windowWidth } = useWindowSize()
 
  const handleModalOpen = () => {
    setModalActive(true)
  }
  const handleModalClose = () => {
    setModalActive(false)
  }
  return (
    <button type="button" onClick={handleModalOpen}>
      {isModalActive && windowWidth <= 800 && (
        <div className="md:hidden">
          <Modal imageUrl={imageUrl} name={name} tender={tender} onClose={handleModalClose}>
            {comment}
          </Modal>
        </div>
      )}

      <div className="flex w-[18rem] p-[3rem] flex-col items-center gap-[1.5rem] rounded-[1.375rem] border-[1px] border-solid border-[rgba(0, 0, 0, 0.00)] bg-[#3a257e17]">
        <div className="flex items-center gap-[1rem] self-stretch w-[12rem]">
          <Image
            src={imageUrl}
            alt="avatar"
            width={48}
            height={48}
            style={{ width: '3rem', height: '3rem', objectFit: 'cover' }}
            className="rounded-[1.5rem] border-[2px] border-solid border-[rgba(82, 73, 110, 0.00)] shrink-0 object-top"
          />
          <div className="flex flex-col items-start flex-[1_0_0]">
            <strong className="text-[#1E1B28] font-[Roboto_Serif_Bold] text-[1rem] font-[700] leading-[1.25rem] tracking-[-0.005rem] self-stretch text-left">
              {name}
            </strong>
            <p className="text-[#1a142e9e] font-[Inter_Var] text-[1rem] font-[400] leading-[1.25rem] tracking-[-0.005rem] self-stretch text-left">
              {tender}
            </p>
          </div>
        </div>

        <div className="max-w-xl cursor-pointer overflow-hidden transition-all duration-300 ease-in-out h-auto w-[12rem]">
          <TooltipParagraph
            text={comment}
            pClass={`flex-[1_0_0] text-[#000] text-start font-[Inter_Var] text-[1rem] font-[400] leading-normal tracking-[-0.005rem] break-words whitespace-normal 
            [display:-webkit-box] 
            [webkit-box-orient:vertical] 
            [webkit-line-clamp:4] 
            line-clamp-4
            overflow-hidden 
            text-ellipsis 
            [line-height:1.5em] 
            [max-height:6em] 
            transition-all duration-300 ease-in-out  w-[max] border-solid border-l-[2px] pl-[2.5rem] border-[#52496e33] ml-[1.5rem]`}
          />
        </div>
      </div>
    </button>
  )
}

export default TestimonialCard
