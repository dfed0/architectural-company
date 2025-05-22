// import { getReviews } from '../components/Reviews'
// import * as cheerio from 'cheerio'
// import { getReviews } from '../components/Reviews';
import TestimonialCard from '../components/TestimonialCard'
// import { getReviews } from '../components/Reviews'
// const latestUsersComments = await getReviews()

export default async function CommentsSection() {

  return (
    <section className="flex flex-col justify-center items-center gap-[3.5rem] self-stretch">
      <h2 className="text-[#1E1B28] font-[Roboto_Serif_Bold] text-[2.5rem] font-[700] leading-[3.25rem] tracking-[0.05rem]">
        What Our Clients Say
      </h2>
      <div className="flex items-start gap-[3rem] self-stretch overflow-x-scroll">
        {/* {latestUsersComments.slice(0, 4).map((review, i) => {
          return (
            <TestimonialCard
              key={i}
              name={review.name}
              tender={review.tender}
              comment={review.comment}
              imageUrl="/images/avatar.jpeg"
            />
          )
        })} */}
        <TestimonialCard
          key={`Victor`}
          name={`Victor`}
          tender={`Basement plastering 35 sq.m. (Kyiv)`}
          comment={`I liked the cooperation. Very nice prices.
They gave advice on the choice of materials.
I cooperated with the team not only on plastering but also on the installation of drywall and exterior plastering. Everything was done with high quality.`}
          imageUrl="/images/first-photo.jpg"
        />
        <TestimonialCard
          key={`Oleh`}
          name={`Oleh`}
          tender={`Repair of the flat (Kyiv)`}
          comment={`There were a couple of small comments at the end of the repair, they fixed them the next day.
I recommend this team.`}
          imageUrl="/images/second-photo.jpg"
        />
        <TestimonialCard
          key={`Ihor`}
          name={`Ihor`}
          tender={`Plastering works (Chubynske village) (Kyiv)`}
          comment={`I recommend these masters.`}
          imageUrl="/images/third-photo.jpg"
        />
        <TestimonialCard
          key={`Oleg`}
          name={`Oleh`}
          tender={`Kitchen renovation (Kyiv)`}
          comment={`The main estimate was calculated in detail, and the work was completed on time and on budget.`}
          imageUrl="/images/fourth-photo.jpg"
        />
        <TestimonialCard
          key={`Serhii`}
          name={`Serhii`}
          tender={`Puttying walls for wallpapering and wallpapering`}
          comment={`I don't understand why these guys still don't have any reviews. very professional craftsmen. constantly checking themselves, no need to follow them and ‘poke their noses in’. I am very satisfied with the quality of work.`}
          imageUrl="/images/fifth-photo.jpg"
        />
      </div>
    </section>
  )
}
