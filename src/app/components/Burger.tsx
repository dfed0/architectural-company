import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
// import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
// import { useTranslation } from 'react-i18next'

export default function Burger({ setMenuActive }) {
  const searchParams = useSearchParams()
  // const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
    setMenuActive((prevValue) => !prevValue)
    console.log(setMenuActive, 'aaa')
  }, [setMenuActive, searchParams, pathname])
  // const { t } = useTranslation()
  function spanHover(e) {
    console.log(e.target)
    if (e.type === 'mouseenter') {
      e.target.firstElementChild.classList.remove('text-[#1E1B28]')
      e.target.firstElementChild.classList.add('text-[#FFF]')
    }
    if (e.type === 'mouseleave') {
      e.target.firstElementChild.classList.add('text-[#1E1B28]')
      e.target.firstElementChild.classList.remove('text-[#FFF]')
    }
  }
  return (
    <div className="flex flex-col content-center items-center gap-[3rem] self-stretch bg-[#FFF] xl:hidden">
      <div
        className="z-10 flex py-[0.625rem] content-center items-center gap-[0.625rem self-stretch] hover:bg-[#AD7C00] h-[3.25rem] w-full justify-center"
        onMouseEnter={(e) => spanHover(e)}
        onMouseLeave={(e) => spanHover(e)}
      >
        <Link
          href={`/home?lang=${searchParams.get('lang')}`}
          className="hover:text-[#FFF] text-[#1E1B28] text-[1.25rem] font-[Inter_Var] font-[600] leading-[2rem] w-full text-center"
          aria-label="Go to about home page"
          // onClick={() =>
          //   router. .on(
          //     'routeChangeComplete',
          //     setMenuActive((prevValue) => !prevValue)
          //   )
          // }
        >
          Home
        </Link>
      </div>
      <div
        className="z-10 flex py-[0.625rem] content-center items-center gap-[0.625rem self-stretch] hover:bg-[#AD7C00] h-[3.25rem] w-full justify-center"
        onMouseEnter={(e) => spanHover(e)}
        onMouseLeave={(e) => spanHover(e)}
      >
        <Link
          href={`/home?lang=${searchParams.get('lang')}#services`}
          className="hover:text-[#FFF] text-[#1E1B28] text-[1.25rem] font-[Inter_Var] font-[600] leading-[2rem] w-full text-center"
          aria-label="Go to about home page"
          // onClick={() => setMenuActive((prevValue) => !prevValue)}
        >
          Our Services
        </Link>
      </div>
      <div
        className="z-10 flex py-[0.625rem] content-center items-center gap-[0.625rem self-stretch] hover:bg-[#AD7C00] h-[3.25rem] w-full justify-center"
        onMouseEnter={(e) => spanHover(e)}
        onMouseLeave={(e) => spanHover(e)}
      >
        <Link
          href={`/home?lang=${searchParams.get('lang')}#about-us`}
          className="hover:text-[#FFF] text-[#1E1B28] text-[1.25rem] font-[Inter_Var] font-[600] leading-[2rem] w-full text-center"
          aria-label="Go to about home page"
          // onClick={() => setMenuActive((prevValue) => !prevValue)}
        >
          About Us
        </Link>
      </div>
      <div
        className="z-10 flex py-[0.625rem] content-center items-center gap-[0.625rem self-stretch] hover:bg-[#AD7C00] h-[3.25rem] w-full justify-center"
        onMouseEnter={(e) => spanHover(e)}
        onMouseLeave={(e) => spanHover(e)}
      >
        <Link
          href={`/home?lang=${searchParams.get('lang')}#contact`}
          className="hover:text-[#FFF] text-[#1E1B28] text-[1.25rem] font-[Inter_Var] font-[600] leading-[2rem] w-full text-center"
          aria-label="Go to about home page"
          // onClick={() => setMenuActive((prevValue) => !prevValue)}
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
