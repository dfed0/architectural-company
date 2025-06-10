'use client'

// import * as React from 'react'
import { Tooltip } from 'radix-ui'
import { useWindowSize } from '../contexts/WindowSizeContext'
import { useEffect, useState } from 'react'
// import '../globals.css'

const TooltipParagraph = ({ text, pClass }) => {
  const [remInPx, setRemInPx] = useState(16)
  const { clientWidth } = useWindowSize()
  // let dynamicFontSize
  // if (dynamicText) {
  //   dynamicFontSize = (16 + 16.82 * ((clientWidth - 390) / 410)) - (16.82 * ((clientWidth - 390) / 410)) / 4
  // }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rem = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      )
      setRemInPx(rem)
    }
  }, [])

  let sideOffset
  if (clientWidth > 799 && clientWidth < 1440) {
    sideOffset = 0 + 3 * remInPx + 4
  } else if (clientWidth > 1439) {
    sideOffset = 0 + 3 * remInPx + 4
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <p className={pClass}>{text}</p>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="sm:hidden md:flex w-[18rem] p-[0.5rem] flex-col content-center items-center gap-[0.625rem] bg-[#AD7C00] text-[#fff] font-[Inter_Var] text-[1rem] font-[400] leading-[-0.005rem] mr-[1.5rem] rounded-[0.25rem]"
            side="bottom"
            sideOffset={sideOffset}
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
