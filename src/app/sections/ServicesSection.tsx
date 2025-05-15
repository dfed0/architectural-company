'use client'

import ServiceCard from '../components/ServiceCard'

export default function ServicesSection() {
  const services = [
    {
      title: 'Apartment Renovation',
      subtitle: 'Complete apartment renovations tailored to your needs.',
      imageUrl: '/images/room-three.jpg',
      altText: 'Redesigned apatment',
    },
    {
      title: 'Office Renovation',
      subtitle: 'Expert renovation services to transform your space.',
      imageUrl: '/images/room-three.jpg',
      altText: 'Redesigned office',
    },
    {
      title: 'Painting works',
      subtitle: 'Individual solutions in the field of painting work',
      imageUrl: '/images/room-three.jpg',
      altText: 'Redesigned paintings',
    },
  ]
  return (
    <section className="py-[3.5rem] flex flex-col items-start gap-[3.5rem] self-stretch ">
      <div className="flex flex-col items-start gap-[2.5rem] self-stretch">
        <h2 className="text-[#1E1B28] text-[2.5rem] text-center font-[Roboto_Serif] font-[700] leading-[3.25rem] self-stretch h-[2.5rem]">
          Our Services
        </h2>
      </div>
      <div className="flex items-center gap-[3.5rem] self-stretch">
        {services.map((service, index) => (
          <ServiceCard
            title={service.title}
            subtitle={service.subtitle}
            imageUrl={service.imageUrl}
            altText={service.altText}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
