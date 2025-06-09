import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import Portal, { createContainer } from './Portal'
import Image from 'next/image'

const MODAL_CONTAINER_ID = 'modal-container-id'
type Props = {
  onClose?: () => void
  title: string
  image: string
  children?: React.ReactNode
}
const Modal = (props: Props) => {
  const focusRef = useRef<HTMLDivElement>(null)
  const { image, title, children } = props
  const { onClose } = props
  const [isMounted, setMounted] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const modalText = useRef<HTMLParagraphElement>(null)
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

    if (modalText) {
      console.log('Top from viewport:', top)
    }
  }, [isMounted])
  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event
      console.log(target, btnRef, rootRef)
      if (rootRef.current === target || btnRef.current === target) {
        onClose?.()
      }
    }
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
      if (event.key === 'Tab') {
        console.log(event)
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
        className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 text-[#000]"
        onClick={handleClose}
        ref={rootRef}
      >
        <div
          className="absolute left-[10vw] right-[10vw] bg-white p-[5%] rounded-[20px] flex items-center flex-col"
          style={{
            boxShadow: '0 0 30px rgba(0,0,0,0.15)',
            top: '20vh',
          }}
          onClick={(e) => e.stopPropagation()}
          ref={focusRef}
          id="modal"
        >
          <Image
            src={image}
            alt="avatar"
            width={80}
            height={80}
            style={{ width: '5rem', height: '5rem', objectFit: 'cover' }}
            className="rounded-[1.5rem] border-[2px] border-solid border-[rgba(82, 73, 110, 0.00)] shrink-0 object-top rounded-[50%]"
          />
          <h2 className="font-[Inter_Var] font-[600] text-[3rem]">{title}</h2>

          <p className="font-[Inter_Var] overflow-y-auto text-[1.2rem]">
            {children}
          </p>
          <button
            ref={btnRef}
            className="absolute top-[5%] bottom-[85%] left-[85%] right-[5%] flex items-center justify-center"
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
