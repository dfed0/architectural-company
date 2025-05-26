// import Image from 'next/image'
// import Link from 'next/link'
'use server'
import HighlightedSection from '@/app/sections/HighlightedSection'
import ImageGalleryProductSection from '@/app/sections/ImageGalleryProductSection'
import AdditionalPhotosSection from '@/app/sections/AdditionalPhotosSection'
import Footer from '@/app/footer/page'
import Header from '@/app/header/page'
import * as cheerio from 'cheerio'
export default async function GalleryOfProject({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const res = await fetch('https://www.rabotniki.ua/14758', {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  })
  const html = await res.text()
  const $ = cheerio.load(html)

  const name = $('.col-xl-10')
    .children()
    .map((_, el) => {
      return $(el).find('.h5').text().trim()
    })
    .get()
    .slice(1, 6)
  const tender = $('.col-xl-10')
    .children()
    .map((_, el) => {
      return $(el)
        .find('div.col-lg-8')
        .children()
        .map((_, el) => {
          if ($(el).text().trim().includes('Отзыв на тендер:')) {
            return $(el)
              .text()
              .trim()
              .replace(/Отзыв на тендер:\s*|\r?\n|\r/g, '')
          }
        })
        .get()
    })
    .get()
    .slice(1, 6)

  const comment = $('.col-xl-10')
    .children()
    .map((_, el) => {
      return $(el)
        .find('div.col-lg-8')
        .children()
        .map((_, el) => {
          if ($(el).text().trim().includes('Общие выводы:')) {
            return $(el)
              .text()
              .trim()
              .replace(/Общие выводы:\s*|\r?\n|\r/g, '')
          }
        })
        .get()
    })
    .get()
    .slice(1, 6)

  console.log({ name, tender, comment })
  // res.status(200).send({ name, tender, comment })
  return (
    <div className="xl:flex xl:w-[90rem] xl:min-h-[56.25rem] xl:px-[3.5rem] xl:flex-col xl:items-start bg-background ">
      <Header></Header>
      <main className="self-stretch">
        <HighlightedSection title={(await params).slug} />
        <div className="flex flex-col py-[3.5rem] items-start self-stretch">
          <ImageGalleryProductSection />
          <AdditionalPhotosSection />
        </div>
        <Footer />
        {/* {html} */}
      </main>
    </div>
  )
}
