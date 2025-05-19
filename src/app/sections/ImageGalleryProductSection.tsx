'use client'

import Image from 'next/image'

export default function ImageGalleryProductSection() {
  return (
    <section
      className="flex flex-col py-[1rem] items-start self-stretch"
      id="services"
    >
      <div className="flex py-[2.5rem] items-start gap-[3.5rem] self-stretch">
        <Image
          width={405}
          height={416}
          style={{ height: '26rem', width: '25.33333rem', objectFit: 'cover' }}
          alt="main image"
          src="/images/room-one.jpeg"
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0]"
        />
        <Image
          width={405}
          height={416}
          style={{ height: '26rem', width: '25.33333rem', objectFit: 'cover' }}
          alt="main image"
          src="/images/room-one.jpeg"
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0]"
        />
        <Image
          width={405}
          height={416}
          style={{ height: '26rem', width: '25.33333rem', objectFit: 'cover' }}
          alt="main image"
          src="/images/room-one.jpeg"
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0]"
        />
      </div>
      <div className="flex py-[2.5rem] items-start gap-[3.5rem] self-stretch">
        <Image
          width={405}
          height={416}
          style={{ height: '26rem', width: '25.33333rem', objectFit: 'cover' }}
          alt="main image"
          src="/images/room-one.jpeg"
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0]"
        />
        <Image
          width={405}
          height={416}
          style={{ height: '26rem', width: '25.33333rem', objectFit: 'cover' }}
          alt="main image"
          src="/images/room-one.jpeg"
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0]"
        />
        <Image
          width={405}
          height={416}
          style={{ height: '26rem', width: '25.33333rem', objectFit: 'cover' }}
          alt="main image"
          src="/images/room-one.jpeg"
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0]"
        />
      </div>
      <div className="flex py-[2.5rem] items-start gap-[3.5rem] self-stretch">
        <Image
          width={405}
          height={416}
          style={{ height: '26rem', width: '25.33333rem', objectFit: 'cover' }}
          alt="main image"
          src="/images/room-one.jpeg"
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0]"
        />
        <Image
          width={405}
          height={416}
          style={{ height: '26rem', width: '25.33333rem', objectFit: 'cover' }}
          alt="main image"
          src="/images/room-one.jpeg"
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0]"
        />
        <Image
          width={405}
          height={416}
          style={{ height: '26rem', width: '25.33333rem', objectFit: 'cover' }}
          alt="main image"
          src="/images/room-one.jpeg"
          className="rounded-[1.375rem] border-2 border-[lightgray] border-solid flex-[1_0_0]"
        />
      </div>
    </section>
  )
}
