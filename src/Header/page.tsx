'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="z-10 fixed left-[3.5rem] right-[3.5rem] top-[0rem] bottom-[calc(100vh-6rem)] flex py-[1.5rem] justify-between items-center self-stretch bg-background">
      <div className="flex h-[3rem] items-center gap-1">
        <div className="flex h-[2rem] items-center gap-[0.375rem]">
          <Image
            src="/images/logomark.svg"
            alt="Picture of the author"
            height={32}
            width={32}
          />
          <span className="text-[#AD7C00] font-[500] text-[1.25rem] leading-[100%] font-inter">
            Masters100%
          </span>
        </div>
      </div>
      <div
        role="navigation"
        aria-label="Main menu"
        className="flex items-start gap-[3rem]"
      >
        <div className="flex content-center items-center gap-[0.625rem] h-[43.5px]">
          <Link
            href="/home"
            className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
            aria-label="Go to about home page"
          >
            Home
          </Link>
        </div>
        <div className="flex content-center items-center gap-[0.625rem] h-[43.5px]">
          <Link
            href="/home#services"
            className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
            aria-label="Go to services section"
          >
            Our Services
          </Link>
        </div>
        <div className="flex content-center items-center gap-[0.625rem] h-[43.5px]">
          <Link
            href="/home#about-us"
            className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
            aria-label="Go to about us section"
          >
            About Us
          </Link>
        </div>
        <div className="flex content-center items-center gap-[0.625rem] h-[43.5px]">
          <Link
            href="#gallery"
            className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
            aria-label="Go to gallery page"
          >
            Gallery of Works
          </Link>
        </div>
        <div className="flex content-center items-center gap-[0.625rem] h-[43.5px]">
          <Link
            href="/home#contact"
            className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
            aria-label="Go to about contact section"
          >
            Contact
          </Link>
        </div>
      </div>
      
    </header>
    // <header className="flex py-[1.5rem] justify-between items-center self-stretch bg-background">
    //   <div className="flex h-[3rem] items-center gap-1">
    //     <div className="flex h-[2rem] items-center gap-[0.375rem]">
    //       <Image
    //         src="/images/logomark.svg"
    //         alt="Picture of the author"
    //         height={32}
    //         width={32}
    //       />
    //       <span className="text-[#AD7C00] font-[500] text-[1.25rem] leading-[100%] font-inter">
    //         Masters100%
    //       </span>
    //     </div>
    //   </div>
    //   <div className="flex items-start gap-[3rem]">
    //     <div className="flex content-center items-center gap-[0.625rem] h-[43.5px]">
    //       <Link
    //         href="home-page"
    //         className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
    //       >
    //         Home
    //       </Link>
    //     </div>
    //     <div className="flex content-center items-center gap-[0.625rem] h-[43.5px]">
    //       <Link
    //         href="services"
    //         className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
    //       >
    //         Our Services
    //       </Link>
    //     </div>
    //     <div className="flex content-center items-center gap-[0.625rem] h-[43.5px]">
    //       <Link
    //         href="about-us"
    //         className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
    //       >
    //         About Us
    //       </Link>
    //     </div>
    //     <div className="flex content-center items-center gap-[0.625rem] h-[43.5px]">
    //       <Link
    //         href="gallery"
    //         className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
    //       >
    //         Gallery of Works
    //       </Link>
    //     </div>
    //     <div className="flex content-center items-center gap-[0.625rem] h-[43.5px]">
    //       <Link
    //         href="contact"
    //         className="text-[#1E1B28] text-[1.25rem] font-[500] hover:text-[#8F5E00]"
    //       >
    //         Contact
    //       </Link>
    //     </div>
    //   </div>
    // </header>
  )
}
