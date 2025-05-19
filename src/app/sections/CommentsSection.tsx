// import { getReviews } from '../components/Reviews'
import * as cheerio from 'cheerio'
import TestimonialCard from '../components/TestimonialCard'
export default async function CommentsSection() {
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
  // const length = Math.min(name.length, tender.length, comment.length)

  const length = Math.min(name.length, tender.length, comment.length)

  const latestUsersComments = Array.from({ length }, (_, i) => ({
    name: name[i],
    tender: tender[i],
    comment: comment[i],
  }))
  // res.status(200).send({ name, tender, comment })
  return (
    <section className="flex py-[3.5rem] flex-col justify-center items-center gap-[3.5rem] self-stretch">
      <h2 className="text-[#1E1B28] font-[Roboto_Serif] text-[2.5rem] font-[700] leading-[3.25rem] tracking-[0.05rem]">
        What Our Clients Say
      </h2>
      <div className="flex items-start gap-[3rem] self-stretch">
        {latestUsersComments.slice(0, 4).map((review) => {
          return (
            <TestimonialCard
              key={review.name}
              name={review.name}
              tender={review.tender}
              comment={review.comment}
              imageUrl="/images/avatar.jpeg"
            />
          )
        })}
        {/* <TestimonialCard
          name={name[0]}
          role={tender[0]}
          comment={comment[0]}
          imageUrl="/images/avatar.jpeg"
        />
        <TestimonialCard
          name="Ludwig Van Cleef"
          role="Architect"
          comment="The renovation was seamless and exceeded our expectations... Very nice and beautiful! Amazing job!"
          imageUrl="/images/avatar.jpeg"
        />
        <TestimonialCard
          name="Ludwig Van Cleef"
          role="Architect"
          comment="The renovation was seamless and exceeded our expectations..."
          imageUrl="/images/avatar.jpeg"
        />
        <TestimonialCard
          name="Ludwig Van Cleef"
          role="Architect"
          comment="The renovation was seamless and exceeded our expectations... wow wow wow"
          imageUrl="/images/avatar.jpeg"
        /> */}
      </div>
    </section>
  )
}
