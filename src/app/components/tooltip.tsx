'use client'

import * as React from 'react'
import { Tooltip } from 'radix-ui'
// import '../globals.css'

const TooltipParagraph = ({ text, pClass }) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <p className={pClass}>{text}</p>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="flex  w-[18rem] p-[0.5rem] flex-col content-center items-center gap-[0.625rem] bg-[#AD7C00] text-[#fff] font-[Inter_Var] text-[1rem] font-[400] leading-[-0.005rem] mr-[1.5rem] rounded-[0.25rem]"
            side="bottom"
            sideOffset={3 * 16}
          >
            {text}
            <Tooltip.Arrow
              className="w-[0.75rem] h-[0.5625rem]"
              fill="#AD7C00"
            />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default TooltipParagraph
