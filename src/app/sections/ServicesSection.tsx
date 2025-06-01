'use client'

import { useTranslation } from 'react-i18next'
import ServiceCard from '../components/ServiceCard'

export default function ServicesSection() {
  const { t } = useTranslation()
  const services = [
    {
      title: 'Apartment Renovation',
      subtitle: 'Complete apartment renovations tailored to your needs.',
      imageUrl: '/images/first-service.svg',
      altText: 'Redesigned apatment',
    },
    {
      title: 'Office Renovation',
      subtitle: 'Expert renovation services to transform your space.',
      imageUrl: '/images/second-service.svg',
      altText: 'Redesigned office',
    },
    {
      title: 'Painting works',
      subtitle: 'Individual solutions in the field of painting work',
      imageUrl: '/images/third-service.svg',
      altText: 'Redesigned paintings',
    },
  ]
  return (
    <section
      className="sm:py-[1.25rem] xl:py-[3.5rem] flex flex-col items-start gap-[2.5rem] self-stretch scroll-mt-[6rem]"
      id="services"
    >
      <div className="flex flex-col items-start gap-[2.5rem] self-stretch">
        <h2 className="text-[#1E1B28] text-[2.5rem] text-center font-[Roboto_Serif_Bold] font-[700] leading-[3.25rem] self-stretch h-[2.5rem]">
          {t('sections.services.title')}
        </h2>
      </div>
      <div className="flex sm:items-center md:items-center sm:flex-col md:flex-row sm:justify-center sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch">
        {services.map((service, index) => (
          <ServiceCard
            title={t(`sections.services.service_${index + 1}.title`)}
            subtitle={t(`sections.services.service_${index + 1}.subtitle`)}
            imageUrl={service.imageUrl}
            altText={service.altText}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
