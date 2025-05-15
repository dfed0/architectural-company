'use client'
import Image from 'next/image'
import RoomCard from '../components/RoomCard'
const chunkByThree = <T,>(arr: T[]) =>
  Array.from({ length: Math.ceil(arr.length / 3) }, (_, i) =>
    arr.slice(i * 3, i * 3 + 3)
  )
export default function ImageGallerySection() {
  const rooms = [
    {
      title: 'Kitchen Upgrade',
      subtitle: 'Renovation',
      imageUrl: '/images/room-two.jpeg',
    },
    {
      title: 'Living Room',
      subtitle: 'Renovation',
      imageUrl: '/images/room-two.jpeg',
    },
    {
      title: 'Bathroom Remodel',
      subtitle: 'Renovation',
      imageUrl: '/images/room-two.jpeg',
    },
    {
      title: 'Kitchen Upgrade',
      subtitle: 'Renovation',
      imageUrl: '/images/room-two.jpeg',
    },
    {
      title: 'Living Room',
      subtitle: 'Renovation',
      imageUrl: '/images/room-two.jpeg',
    },
    {
      title: 'Bathroom Remodel',
      subtitle: 'Renovation',
      imageUrl: '/images/room-two.jpeg',
    },
    {
      title: 'Kitchen Upgrade',
      subtitle: 'Renovation',
      imageUrl: '/images/room-two.jpeg',
    },
    {
      title: 'Living Room',
      subtitle: 'Renovation',
      imageUrl: '/images/room-two.jpeg',
    },
    {
      title: 'Bathroom Remodel',
      subtitle: 'Renovation',
      imageUrl: '/images/room-two.jpeg',
    },
  ]
  const groupedRooms = chunkByThree(rooms)
  return (
    <>
      {/* местами font inter нужно понять добавлять или нет */}
      <section className="py-[1.5rem] flex flex-col self-stretch items-start">
        <Image
          width={1328}
          height={672}
          style={{ height: '42rem', width: '100%', objectFit: 'cover' }}
          alt="main image"
          src="/images/room-one.jpeg"
          className="rounded-[0.75rem] border-2"
        />

        {groupedRooms.map((group, index) => (
          <section
            key={index}
            className={`${
              index === 0 ? 'py-[3.5rem]' : 'pb-[3.5rem]'
            } flex items-start gap-[3.5rem] self-stretch`}
          >
            <div
              key={index}
              className="flex py-[3.5rem] items-start gap-[3.5rem] self-stretch"
            >
              {group.map((room, i) => (
                <RoomCard
                  key={i}
                  title={room.title}
                  subtitle={room.subtitle}
                  imageUrl={room.imageUrl}
                />
              ))}
            </div>
          </section>
        ))}
      </section>
    </>
  )
}
