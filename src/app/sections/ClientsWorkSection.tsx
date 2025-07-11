'use client'
import { Trans, useTranslation } from 'react-i18next'
import InteriorDesign from '../components/InteriorDesign'
import CommentsSection from './CommentsSection'
import ContactUsSection from './ContactUsSection'

export default function ClientsWorkSection() {
  const { t } = useTranslation()
  const grouped = t('sections.clientsWork.servings.description', {
    returnObjects: true,
  }) as string[][]
  return (
    <section
      id="about-us"
      className="scroll-mt-[6rem] flex sm:py-[1.25rem] xl:pb-[3.5rem] xl:pt-[3.5rem] flex-col justify-center items-center self-stretch"
    >
      <CommentsSection />
      <div className="flex sm:flex-col sm:pt-[2.5rem] xl:flex-row md:py-[1.25rem] md:pt-[2.5rem] xl:py-[0rem] xl:pt-[7rem] items-start md:gap-[1.25rem] xl:gap-[3.5rem] self-stretch">
        <h3 className="text-[#1E1B28] text-[2.5rem] font-[700] font-[Roboto_Serif_Bold] leading-[3.25rem]  w-full ">
          {t('sections.clientsWork.process.title')}
        </h3>
        <p className=" text-[#000] font-[Inter_Var] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem] w-full">
          <Trans
            i18nKey="sections.clientsWork.process.description"
            components={{ br: <br /> }}
          />
        </p>
      </div>
      <div className="flex sm:flex-col xl:flex-row sm:py-[1.25rem] xl:py-[0rem] xl:pt-[3.5rem] items-start sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch">
        <h3 className="text-[#1E1B28] text-[2.5rem] font-[700] font-[Roboto_Serif_Bold] leading-[3.25rem] w-full ">
          {t('sections.clientsWork.achievements.title')}
        </h3>
        <div className="w-full">
          <div className="flex sm:flex-col md:flex-row items-center md:gap-[1.25rem] self-stretch">
            <div className="flex sm:self-stretch pt-[3rem] pb-[3.5rem] flex-col justify-center items-start gap-[0.75rem] flex-[1_0_0] border-t-[2px] border-[#5c5c5c33] border-solid">
              <span className="line-clamp-1 self-stretch text-[#212121] overflow-ellipsis font-[Inter_Var] text-[3rem] font-[600] leading-[3.25rem] tracking-[-0.075rem]">
                {t(
                  'sections.clientsWork.achievements.description.completedProjects.title'
                )}
              </span>
              <span className="line-clamp-2 self-stretch text-[#000] overflow-ellipsis font-[Inter_Var] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem]">
                {t(
                  'sections.clientsWork.achievements.description.completedProjects.description'
                )}
              </span>
            </div>
            <div className="flex sm:self-stretch pt-[3rem] pb-[3.5rem] flex-col justify-center items-start gap-[0.75rem] flex-[1_0_0] border-t-[2px] border-[#5c5c5c33] border-solid">
              <span className="line-clamp-1 self-stretch text-[#212121] overflow-ellipsis font-[Inter_Var] text-[3rem] font-[600] leading-[3.25rem] tracking-[-0.075rem]">
                {t(
                  'sections.clientsWork.achievements.description.industryExperience.title'
                )}
              </span>
              <span className="line-clamp-2 self-stretch text-[#000] overflow-ellipsis font-[Inter_Var] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem]">
                {t(
                  'sections.clientsWork.achievements.description.industryExperience.description'
                )}
              </span>
            </div>
          </div>
          <div className="flex sm:flex-col md:flex-row items-center md:gap-[1.25rem] self-stretch">
            <div className="flex sm:self-stretch pt-[3rem] sm:pb-[0rem] flex-col justify-center items-start gap-[0.75rem] flex-[1_0_0] border-t-[2px] border-[#5c5c5c33] border-solid sm:h-[9rem]">
              <span className="line-clamp-1 self-stretch text-[#212121] overflow-ellipsis font-[Inter_Var] text-[3rem] font-[600] leading-[3.25rem] tracking-[-0.075rem]">
                {t(
                  'sections.clientsWork.achievements.description.clientSatisfaction.title'
                )}
              </span>
              <span className="line-clamp-2 self-stretch text-[#000] overflow-ellipsis font-[Inter_Var] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem]">
                {t(
                  'sections.clientsWork.achievements.description.clientSatisfaction.description'
                )}
              </span>
            </div>
            <div className="flex sm:self-stretch pt-[3rem] sm:pb-[0rem] flex-col justify-center items-start gap-[0.75rem] flex-[1_0_0] border-t-[2px] border-[#5c5c5c33] border-solid  sm:h-[9rem]">
              <span className="line-clamp-1 self-stretch text-[#212121] overflow-ellipsis font-[Inter_Var] text-[3rem] font-[600] leading-[3.25rem] tracking-[-0.075rem]">
                {t(
                  'sections.clientsWork.achievements.description.teamMembers.title'
                )}
              </span>
              <span className="line-clamp-2 self-stretch text-[#000] overflow-ellipsis font-[Inter_Var] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem]">
                {t(
                  'sections.clientsWork.achievements.description.teamMembers.description'
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col xl:flex-row sm:py-[1.25rem] xl:py-[0rem] xl:pt-[3.5rem] items-start sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch">
        <h3 className="text-[#1E1B28] text-[2.5rem] font-[700] font-[Roboto_Serif_Bold] leading-[3.25rem] w-full ">
          {t('sections.clientsWork.servings.title')}
        </h3>
        <div className="flex flex-col justify-center items-start gap-[1.5rem] w-full">
          {grouped.map((group, i) => {
            return (
              <div key={'i' + i} className="self-stretch">
                <div
                  className="sm:hidden md:flex items-center  md:gap-[2.5rem] xl:gap-[3.5rem] self-stretch w-full "
                  key={i}
                >
                  {group.map((text, index) => (
                    <InteriorDesign key={index}>{text}</InteriorDesign>
                  ))}
                </div>
                <div className="flex flex-col md:hidden gap-[1.25rem]">
                  {group.map((text, index) => (
                    <InteriorDesign key={'index' + index}>
                      {text}
                    </InteriorDesign>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <ContactUsSection />
    </section>
  )
}
