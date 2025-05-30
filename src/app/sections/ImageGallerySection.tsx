'use client'
import Image from 'next/image'
import RoomCard from '../components/RoomCard'
import { useTranslation } from 'react-i18next'
const chunkByThree = <T,>(arr: T[]) =>
  Array.from({ length: Math.ceil(arr.length / 3) }, (_, i) =>
    arr.slice(i * 3, i * 3 + 3)
  )

export const rooms = [
  {
    titleEn: 'Renovation of 2 flats',
    titleUk: 'Реконструкція 2 квартир',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/1/photo-main.jpg',
  },
  {
    titleEn: 'Rusanovka',
    titleUk: 'Русанівка',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/2/photo-main.jpg',
  },
  {
    titleEn: 'Housing Estate Republic',
    titleUk: 'ЖК Республіка',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/3/photo-main.jpg',
  },
  {
    titleEn: 'Forest Area',
    titleUk: 'Лісовий масив',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/4/photo-main.jpg',
  },
  {
    titleEn: 'House Renovation',
    titleUk: 'Реновація Будинку',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/5/photo-main.jpg',
  },
  {
    titleEn: 'Obolon',
    titleUk: 'Оболонь',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/6/photo-main.jpg',
  },
  {
    titleEn: 'Gostomel Duplex',
    titleUk: 'Гостомель Дуплекс',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/7/photo-main.jpg',
  },
  {
    titleEn: 'Zazimier Penthouse',
    titleUk: `Пентхаус "Зазим'я"`,
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/8/photo-main.jpg',
  },
  {
    titleEn: 'Sofievska Borschagivka',
    titleUk: 'Софієвська Боршагівка',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/9/photo-main.jpg',
  },
]
export default function ImageGallerySection() {
  const groupedRooms = chunkByThree(rooms)
  const { t } = useTranslation()
  return (
    <>
      <Image
        width={1328}
        height={672}
        style={{ height: '42rem', width: '100%', objectFit: 'cover' }}
        alt="main image"
        src="/images/page-present.svg"
        className="rounded-[0.75rem] border-2"
        priority={true}
      />

      {groupedRooms.map((group, index) => (
          <div
          key={index}
          className={`${
            index === 0
              ? ' md:flex-row sm:py-[1.25rem] xl:py-[3.5rem]'
              : ' md:flex-row  sm:py-[1.25rem] xl:pb-[3.5rem]'
          } flex sm:flex-col sm:self-center md:items-start sm:gap-[1.25rem] gap-[3.5rem] md:self-stretch`}
        >
          {group.map((room, i) => (
            <RoomCard
              key={i}
              title={t(`projects.title_${index * 3 + (i + 1)}`)}
              titleForUrl={`projects.title_${index * 3 + (i + 1)}`}
              subtitle={t(`projects.subtitle_${index * 3 + (i + 1)}`)}
              imageUrl={room.imageUrl}
            />
          ))}
        </div>
      ))}
    </>
  )
}
