'use client'

import { useTranslation } from 'react-i18next'
import ServiceCard from '../components/ServiceCard'
import { useGoogleData } from '../contexts/GoogleDataContext'
import { useEffect, useRef } from 'react'

export default function ServicesSection() {
  const { t } = useTranslation()
  const { projects, loading, error } = useGoogleData()
  const { i18n } = useTranslation()
  const titleByLang =
    i18n.language === 'en' ? 'titleen' : i18n.language === 'uk' ? 'titleuk' : ''
  const lastProjects = projects.table
  const lastProjectsMainImages = projects.images.projects.map(
    (project) => project.mainImageUrl
  )
  const projectsWithMainImg = lastProjects.map((projects, index) => ({
    ...projects,
    imageUrl: lastProjectsMainImages[index],
  }))
  const servicesProject = [
    projectsWithMainImg[0],
    projectsWithMainImg[5],
    projectsWithMainImg[11],
  ]
  const h2Ref = useRef(null)

  useEffect(() => {
    const h2Element = h2Ref.current
    if (!h2Element) return
    if (!(h2Element.scrollWidth > h2Element.parentElement.clientWidth)) return

    let fontSize = 120
    h2Element.style.fontSize = `${fontSize}px`

    while (
      h2Element.scrollWidth > h2Element.parentElement.clientWidth &&
      fontSize > 10
    ) {
      fontSize -= 0.5
      h2Element.style.fontSize = `${fontSize}px`
    }
  }, [loading, i18n.language])
  return (
    <>
      {!loading && (
        <section
          className="sm:py-[1.25rem] xl:py-[3.5rem] flex flex-col items-start gap-[2.5rem] self-stretch scroll-mt-[6rem]"
          id="services"
        >
          <div className="flex flex-col items-start gap-[2.5rem] self-stretch">
            <h2
              className="text-[#1E1B28] text-[2.5rem] text-center font-[Roboto_Serif_Bold] font-[700] leading-[3.25rem] self-stretch h-[2.5rem] text-nowrap"
              ref={h2Ref}
            >
              {t('sections.services.title')}
            </h2>
          </div>
          <div className="flex sm:items-center md:items-center sm:flex-col md:flex-row sm:justify-center sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch">
            {servicesProject.map((service, index) => (
              <ServiceCard
                // title={t(`sections.services.service_${index + 1}.title`)}
                // subtitle={t(`sections.services.service_${index + 1}.subtitle`)}
                title={
                  service[titleByLang].charAt(0).toUpperCase() +
                  service[titleByLang].slice(1)
                }
                subtitle={t('title.subtitleProjects')}
                imageUrl={service.imageUrl}
                altText="services images"
                key={index}
                projectTitleEn={service.titleen}
                serviceIndex={service.order}
              />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
