import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import Portal, { createContainer } from './Portal'
import Image from 'next/image'
import TooltipParagraph from './tooltip'
import { useWindowSize } from '../contexts/WindowSizeContext'

const MODAL_CONTAINER_ID = 'modal-container-id'
type Props = {
  onClose?: () => void
  name: string
  imageUrl: string
  tender: string
  children?: React.ReactNode
}
const Modal = (props: Props) => {
  const { clientWidth } = useWindowSize()
  const focusRef = useRef<HTMLDivElement>(null)
  const { imageUrl, name, tender, children } = props
  const { onClose } = props

  const [isMounted, setMounted] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> =
    useCallback(() => {
      onClose?.()
    }, [onClose])
  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID })
    setMounted(true)
    setTimeout(() => {
      ;(document.activeElement as HTMLElement)?.blur()
    }, 0)
  }, [])
  useEffect(() => {
    if (isMounted && rootRef.current) {
      rootRef.current.focus()
    }

   
  }, [isMounted])
  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event
      if (rootRef.current === target || btnRef.current === target) {
        onClose?.()
      }
    }
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
      if (event.key === 'Tab') {
        event.preventDefault()
      }
    }

    window.addEventListener('click', handleWrapperClick)
    window.addEventListener('keydown', handleEscapePress)

    return () => {
      window.removeEventListener('click', handleWrapperClick)
      window.removeEventListener('keydown', handleEscapePress)
    }
  }, [onClose])
  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div
        className="fixed flex items-center justify-center top-0 left-0 w-full h-full bg-black/50 z-50 text-[#000]"
        onClick={handleClose}
        ref={rootRef}
      >
        <div
          className="relative h-min w-[100%] flex p-[3rem] flex-col items-center gap-[1.5rem] rounded-[1.375rem] border-[1px] border-solid border-[rgba(0, 0, 0, 0.00)] bg-[#edebf2]"
          style={{
            marginLeft: `calc(1.25rem + ${(clientWidth - 390) / 2}px)`,
            marginRight: `calc(1.25rem + 15px + ${(clientWidth - 390) / 2}px)`,
          }}
          onClick={(e) => e.stopPropagation()}
          ref={focusRef}
          id="modal"
        >
          <div className="flex items-center gap-[1rem] self-stretch w-[12rem]">
            <Image
              src={imageUrl}
              alt="avatar"
              width={48}
              height={48}
              style={{ objectFit: 'cover' }}
              className="w-[3rem] h-[3rem] rounded-[1.5rem] border-[2px] border-solid border-[rgba(82, 73, 110, 0.00)] shrink-0 object-top"
            />
            <div className="flex flex-col items-start flex-[1_0_0]">
              <strong className="text-[#1E1B28] font-[Roboto_Serif_Bold] font-[700] text-[1rem] leading-[1.25rem] tracking-[-0.005rem] self-stretch text-left">
                {name}
              </strong>
              <p className="text-[#1a142e9e] font-[Inter_Var] font-[400] text-[1rem] leading-[1.25rem] tracking-[-0.005rem] self-stretch text-left">
                {tender}
              </p>
            </div>
          </div>

          <div
            className={`max-w-xl overflow-hidden transition-all duration-300 ease-in-out h-auto`}
          >
            <TooltipParagraph
              text={children}
              pClass={`flex-[1_0_0] text-[#000] text-left font-[Inter_Var] font-[400] leading-normal tracking-[-0.005rem] break-words whitespace-normal 
           
            transition-all duration-300 ease-in-out  w-[max] border-solid border-l-[2px] pl-[2.5rem] border-[#52496e33] ml-[1.5rem] text-[1rem]`}
            />
          </div>
          <button
            ref={btnRef}
            className="absolute top-[5%] right-[5%] flex items-center justify-center"
            onClick={handleClose}
          >
            <Image
              alt="menu icon"
              src="/images/close.svg"
              width={24}
              height={24}
              className="object-fill"
            />
          </button>
        </div>
      </div>
    </Portal>
  ) : null
}

export default Modal
