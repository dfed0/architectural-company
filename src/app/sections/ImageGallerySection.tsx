'use client'
import Image from 'next/image'
import RoomCard from '../components/RoomCard'
import { useTranslation } from 'react-i18next'
import { useGoogleData } from '../contexts/GoogleDataContext'
const chunkByThree = <T,>(arr: T[]) =>
  Array.from({ length: Math.ceil(arr.length / 3) }, (_, i) =>
    arr.slice(i * 3, i * 3 + 3)
  )

export default function ImageGallerySection() {
  const { projects, loading, error } = useGoogleData()
  const { i18n, t } = useTranslation()
  const titleByLang =
    i18n.language === 'en' ? 'titleen' : i18n.language === 'uk' ? 'titleuk' : ''
  const lastProjects = projects.table
  const lastProjectsMainImages = { ...projects }.images.projects.map(
    (project) => project.mainImageUrl
  )
  const projectsWithMainImg = lastProjects.map((projects, index) => ({
    ...projects,
    imageUrl: lastProjectsMainImages[index],
  }))
  let gallerySectionProjects = projectsWithMainImg.filter(
    (project) =>
      project.order !== '1' &&
      project.order !== '6' &&
      project.order !== '10' &&
      project.order !== '12'
  )

  gallerySectionProjects = gallerySectionProjects.slice(-9).reverse()
  const groupedRooms = chunkByThree(gallerySectionProjects)
  return (
    <>
      {!loading && (
        <Image
          width={1328}
          height={672}
          style={{ height: '42rem', width: '100%', objectFit: 'cover' }}
          alt="main image"
          src="images/page-present.svg"
          className="rounded-[0.75rem] border-2"
          priority={true}
        />
      )}

      {!loading &&
        groupedRooms.map((group, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? ' md:flex-row sm:py-[1.25rem] xl:py-[3.5rem]'
                : ' md:flex-row  sm:py-[1.25rem] xl:pt-[0rem] xl:pb-[3.5rem]'
            } flex sm:flex-col sm:self-center md:items-start sm:gap-[1.25rem] xl:gap-[3.5rem] md:self-stretch w-full`}
          >
            {group.map((room, i) => {
              return (
                projects && (
                  <RoomCard
                    key={i}
                    title={room[titleByLang]}
                    titleForUrl={room['titleen']}
                    subtitle={t('title.subtitleProjects')}
                    imageUrl={room.imageUrl}
                    photoIndex={room.order}
                  />
                )
              )
            })}
          </div>
        ))}
    </>
  )
}
