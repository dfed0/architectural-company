'use client'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
type MenuActiveState = {
  navigation: boolean
  language: boolean
}
type FlagState = {
  engHover: boolean
  ukrHover: boolean
  hover: boolean
  flag: string
  click: boolean
}
type Props = {
  setFlag?: Dispatch<SetStateAction<FlagState>>
  setMenuActive?: Dispatch<SetStateAction<MenuActiveState>>
  navItems: {
    name: string
    itemClick?: () => undefined
    path?: string
    deleteParams?: boolean
    paramsToSave?: string[]
    lang?: string
    deleteFragment?: boolean
    fragment?: string
    thisPage?: boolean
  }[]
}
// navItems: object[] | string[]
//   itemClick?: () => undefined
//   path?: string
//   fragment?: string
//   lang?: string
export default function Burger(props: Props) {
  const { i18n } = useTranslation()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  // const [closeBurger, setCloseBurger] = useState(false)
  // useEffect(() => {
  //   if (props.setMenuActive && closeBurger) {
  //     props.setMenuActive(() => ({
  //       navigation: false,
  //       language: false,
  //     }))
  //   }
  // }, [searchParams, pathname, closeBurger])

  // !!!!
  // function spanHover(e) {
  //   console.log(e.target)
  //   if (e.type === 'click') {
  //     e.target.firstElementChild.classList.remove('text-[#1E1B28]')
  //     e.target.firstElementChild.classList.add('text-[#FFF]')
  //   }

  //   if (e.type === 'mouseleave') {
  //     e.target.firstElementChild.classList.add('text-[#1E1B28]')
  //     e.target.firstElementChild.classList.remove('text-[#FFF]')
  //   }
  // }
  return (
    <div className="fixed bottom-[0px] top-[6rem] left-[1.25rem] right-[1.25rem] flex flex-col content-center items-center self-stretch bg-[#FFF] xl:hidden gap-[0px]">
      {/* gap-[1.5rem] */}
      <div
        className="z-5 fixed bottom-[0px] top-[0rem] left-[0rem] right-[0rem] bg-[#FFF]"
        id="background-burger"
      ></div>
      {props.navItems.map((itemName) => {
        if (itemName.deleteParams) {
          if (itemName.deleteParams && itemName.paramsToSave) {
            for (const key of params.keys()) {
              if (!itemName.paramsToSave.includes(key)) {
                params.delete(key)
              }
            }
          }
        }

        if (itemName.lang) {
          params.set('lang', itemName.lang)
        }
        let hash: boolean | string = false
        if (!itemName.deleteFragment) {
          hash = itemName.fragment
            ? itemName.fragment
            : typeof window !== 'undefined' && window.location.hash
            ? window.location.hash
            : ''
        }
        const navItemUrl = `${itemName.path ? itemName.path : pathname}?${
          params.toString() ? params.toString() : ''
        }${hash ? hash : ''}`
        return (
          <div
            className="z-10 flex py-[0.625rem] content-center items-center gap-[0.625rem self-stretch] active:bg-[#AD7C00] h-[3.25rem] w-full justify-center"
            key={itemName.name}
          >
            <Link
              href={`${navItemUrl}`}
              scroll={!itemName.lang}
              className="active:text-[#FFF] text-[#1E1B28] text-[1.25rem] font-[Inter_Var] font-[600] leading-[2rem] w-full text-center"
              aria-label="Go to about home page"
              onClick={() => {
                if (itemName.lang) {
                  i18n.changeLanguage(itemName.lang)
                }
                props.setMenuActive(() => ({
                  navigation: false,
                  language: false,
                }))
              }}
            >
              {itemName.name}
            </Link>
          </div>
        )
      })}
      {/* <div
        className="z-10 flex py-[0.625rem] content-center items-center gap-[0.625rem self-stretch] active:bg-[#AD7C00] h-[3.25rem] w-full justify-center"
        // onMouseEnter={(e) => spanHover(e)}
        // onMouseLeave={(e) => spanHover(e)}
      >
        <Link
          href={`/home?lang=${searchParams.get('lang')}`}
          className="active:text-[#FFF] text-[#1E1B28] text-[1.25rem] font-[Inter_Var] font-[600] leading-[2rem] w-full text-center"
          aria-label="Go to about home page"
        >
          Home
        </Link>
      </div>
      <div
        className="z-10 flex py-[0.625rem] content-center items-center gap-[0.625rem self-stretch] active:bg-[#AD7C00] h-[3.25rem] w-full justify-center"
        // onMouseEnter={(e) => spanHover(e)}
        // onMouseLeave={(e) => spanHover(e)}
      >
        <Link
          href={`/home?lang=${searchParams.get('lang')}#services`}
          className="active:text-[#FFF] text-[#1E1B28] text-[1.25rem] font-[Inter_Var] font-[600] leading-[2rem] w-full text-center"
          aria-label="Go to about home page"
        >
          Our Services
        </Link>
      </div>
      <div
        className="z-10 flex py-[0.625rem] content-center items-center gap-[0.625rem self-stretch] active:bg-[#AD7C00] h-[3.25rem] w-full justify-center"
        // onMouseEnter={(e) => spanHover(e)}
        // onMouseLeave={(e) => spanHover(e)}
      >
        <Link
          href={`/home?lang=${searchParams.get('lang')}#about-us`}
          className="active:text-[#FFF] text-[#1E1B28] text-[1.25rem] font-[Inter_Var] font-[600] leading-[2rem] w-full text-center"
          aria-label="Go to about home page"
        >
          About Us
        </Link>
      </div>
      <div
        className="z-10 flex py-[0.625rem] content-center items-center gap-[0.625rem self-stretch] active:bg-[#AD7C00] h-[3.25rem] w-full justify-center"
        // onMouseEnter={(e) => spanHover(e)}
        // onMouseLeave={(e) => spanHover(e)}
      >
        <Link
          href={`/home?lang=${searchParams.get('lang')}#contact`}
          className="active:text-[#FFF] text-[#1E1B28] text-[1.25rem] font-[Inter_Var] font-[600] leading-[2rem] w-full text-center"
          aria-label="Go to about home page"
        >
          Contact
        </Link>
      </div> */}
    </div>
  )
}
