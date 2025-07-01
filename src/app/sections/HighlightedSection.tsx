'use client'
import { useTranslation } from 'react-i18next'
// import i18next, { rooms } from '../i18n/translations/i18next'
import { useEffect, useRef } from 'react'
import { useGoogleData } from '../contexts/GoogleDataContext'
interface MainText {
  title?: string
  projectNumber?: string
  page: string
}
export default function HighlightedSection({
  title,
  projectNumber,
  page,
}: MainText) {
  const { t, i18n } = useTranslation()
  const { projects, loading, error } = useGoogleData()
  const sectionRef = useRef(null)
  // const lastProjects = projects.table.slice(-9)
  // const lastProjectsMainImages = projects.images.projects
  //   .map((project) => project.mainImageUrl)
  //   .slice(-9)
  // const projectsWithMainImg = lastProjects.map((projects, index) => ({
  //   ...projects,
  //   imageUrl: lastProjectsMainImages[index],
  // }))

  useEffect(() => {
    if (!sectionRef.current) return

    const headers = sectionRef.current.querySelectorAll('.resize-heading')
    const fontSizes: number[] = []
    const headersArray = [...headers]
    headersArray.forEach((el) => {
      el.style.fontSize = '' // Убираем кастомный стиль
    })
    if (
      headersArray.some((el) => el.scrollWidth > el.parentElement.clientWidth)
    ) {
      headers.forEach((el) => {
        let fontSize = 120
        el.style.fontSize = `${fontSize}px`
        while (el.scrollWidth > el.parentElement.clientWidth && fontSize > 10) {
          fontSize -= 0.5
          el.style.fontSize = `${fontSize}px`
        }
        fontSizes.push(fontSize)
      })
    }
    const minFontSize = Math.min(...fontSizes)
    headers.forEach((el) => {
      el.style.fontSize = `${minFontSize}px`
    })
  }, [title, page, loading, i18n.language])
  return (
    <>
      {!loading && (
        <section
          className={`xl:pb-[3.5rem] sm:pb-[2.5rem] ${
            page === 'project' && 'xl:pt-[9.5rem]'
          } ${
            page === 'home' && 'xl:pt-[13rem] xl:pb-[7rem]'
          } sm:pt-[9.75rem] flex flex-col self-stretch relative`}
          ref={sectionRef}
        >
          <h1 className="font-[Roboto_Serif_Bold] text-[#1E1B28] sm:text-[3.25rem] md:text-[6.25rem] xl:text-[7.5rem] font-[700] sm:leading-[3.25rem] md:leading-[6.25rem] xl:leading-[7.5rem] resize-heading">
            {title
              ? t('title.projectTitle').split('_')[0]
              : t('title.firstRow')}
          </h1>
          <h1 className="font-[Roboto_Serif_Bold] text-[#1E1B28] sm:text-[3.25rem] md:text-[6.25rem] xl:text-[7.5rem] font-[700] sm:leading-[3.25rem] md:leading-[6.25rem] xl:leading-[7.5rem] text-center whitespace-nowrap resize-heading">
            {title
              ? `${t('title.projectTitle').split('_')[1]} ${
                  title.split(' ')[0].length < 4
                    ? title
                        .split(' ')
                        .slice(0, 2)
                        .filter((word) => word.toLowerCase() !== 'of')
                        .join(' ')
                    : title.split(' ')[0] !== 'of' && title.split(' ')[0]
                }`
              : t('title.secondRow')}
          </h1>
          <h1 className="font-[Roboto_Serif_Bold] text-[#1E1B28] sm:text-[3.25rem] md:text-[6.25rem] xl:text-[7.5rem] font-[700] sm:leading-[3.25rem] md:leading-[6.25rem] xl:leading-[7.5rem]  text-right resize-heading whitespace-nowrap">
            {title
              ? `${
                 title.split(' ')[0].length < 4
                    ? title.split(' ').slice(2).filter((word) => word.toLowerCase() !== 'of').join(' ') 
                    : title.split(' ').slice(1).filter((word) => word.toLowerCase() !== 'of').join(' ') 
                }`
              : t('title.thirdRow')}
          </h1>
          <span
            className={`absolute text-[#1E1B28] right-0 font-[400] leading-[1.5rem] text-[1rem] font-[Inter_Var] tracking-[-0.005rem] text-right ${
              page === 'home' && 'sm:top-[7.25rem] xl:top-[13rem]'
            } ${page === 'project' && 'sm:top-[6rem] xl:top-[9.5rem]'}`}
          >
            {title ? title.charAt(0).toUpperCase() + title.slice(1) : t('title.date')}
          </span>
          <span className={`absolute text-[#1E1B28] sm:bottom-[0] ${page === 'home' &&'xl:bottom-[7rem]'} ${page === 'project' &&'xl:bottom-[3.5rem]'} leading-[1.5rem] text-[1rem] font-[Inter_Var] font-[400] tracking-[-0.005rem]`}>
            {/* {i18next.language === 'en' ? projectNumber
          ? rooms[projectNumber].date + ', ' + rooms[projectNumber].locationEn
          : t('title.location') : projectNumber
          ? rooms[projectNumber].date + ', ' + rooms[projectNumber].locationUk
          : t('title.location')} */}
            {projectNumber
              ? projects.table[Number(projectNumber) - 1].date.split('.').map((num, index) => index !== 2 ? num.padStart(2, '0'): num ).join('.') +
                ', ' +
                t('title.locationProject')
              : t('title.location')}
          </span>
        </section>
      )}
    </>
  )
}
