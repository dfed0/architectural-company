'use client'
// import { getReviews } from '../components/Reviews'
// import * as cheerio from 'cheerio'
// import { getReviews } from '../components/Reviews';
import { useTranslation } from 'react-i18next'
import TestimonialCard from '../components/TestimonialCard'
// import { getReviews } from '../components/Reviews'
// const latestUsersComments = await getReviews()

export default function CommentsSection() {
  const { t } = useTranslation()
  return (
    <section className="flex flex-col justify-center items-center sm:gap-[1.25rem] gap-[3.5rem] self-stretch">
      <h2 className="text-[#1E1B28] font-[Roboto_Serif_Bold] text-[2.5rem] font-[700] leading-[3.25rem] tracking-[0.05rem]">
        {t('sections.comments.title')}
      </h2>
      <div className="flex items-start sm:gap-[1.25rem] xl:gap-[3rem] self-stretch overflow-x-scroll">
        <TestimonialCard
          key={t('sections.comments.1.review')}
          name={t('sections.comments.1.name')}
          tender={t('sections.comments.1.tender')}
          comment={t('sections.comments.1.review')}
          imageUrl="/images/first-photo.jpg"
        />
        <TestimonialCard
          key={t('sections.comments.2.review')}
          name={t('sections.comments.2.name')}
          tender={t('sections.comments.2.tender')}
          comment={t('sections.comments.2.review')}
          imageUrl="/images/second-photo.jpg"
        />
        <TestimonialCard
          key={t('sections.comments.3.review')}
          name={t('sections.comments.3.name')}
          tender={t('sections.comments.3.tender')}
          comment={t('sections.comments.3.review')}
          imageUrl="/images/third-photo.jpg"
        />
        <TestimonialCard
          key={t('sections.comments.4.review')}
          name={t('sections.comments.4.name')}
          tender={t('sections.comments.4.tender')}
          comment={t('sections.comments.4.review')}
          imageUrl="/images/fourth-photo.jpg"
        />
        <TestimonialCard
          key={t('sections.comments.5.review')}
          name={t('sections.comments.5.name')}
          tender={t('sections.comments.5.tender')}
          comment={t('sections.comments.5.review')}
          imageUrl="/images/fifth-photo.jpg"
        />
      </div>
    </section>
  )
}
