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
            className="TooltipConten max-w-[500px] px-4 py-2 rounded-lg bg-[#e9e6f3] text-[#000] text-sm shadow-md z-50"
            side="bottom"
            sideOffset={3 * 16}
          >
            {text}
            <Tooltip.Arrow className="TooltipArrow h-[2rem] w-[2rem] fill-[#e9e6f3]"/>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default TooltipParagraph
