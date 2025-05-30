import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
// import { rooms } from '@/app/sections/ImageGallerySection'
export const rooms = [
  {
    titleEn: 'Renovation of 2 flats',
    titleUk: 'Реконструкція 2 квартир',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/1/photo-main.jpg',
  },
  {
    titleEn: 'Rusanovka',
    titleUk: 'Русанівка',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/2/photo-main.jpg',
  },
  {
    titleEn: 'Housing Estate Republic',
    titleUk: 'ЖК Республіка',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/3/photo-main.jpg',
  },
  {
    titleEn: 'Forest Area',
    titleUk: 'Лісовий масив',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/4/photo-main.jpg',
  },
  {
    titleEn: 'House Renovation',
    titleUk: 'Реновація Будинку',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/5/photo-main.jpg',
  },
  {
    titleEn: 'Obolon',
    titleUk: 'Оболонь',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/6/photo-main.jpg',
  },
  {
    titleEn: 'Gostomel Duplex',
    titleUk: 'Гостомель Дуплекс',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/7/photo-main.jpg',
  },
  {
    titleEn: 'Zazimier Penthouse',
    titleUk: `Пентхаус "Зазим'я"`,
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/8/photo-main.jpg',
  },
  {
    titleEn: 'Sofievska Borschagivka',
    titleUk: 'Софієвська Боршагівка',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/9/photo-main.jpg',
  },
  {
    titleEn: 'Penthouse in Bucha',
    titleUk: 'Пентхаус в Бучі',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/10/photo-main.jpg',
  },
  {
    titleEn: 'House in Vasylkiv',
    titleUk: 'Дім в Василькові',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/11/photo-main.jpg',
  },
  {
    titleEn: `St Peter's Townhouse`,
    titleUk: 'Свято-Петрівське Таунхаус',
    subtitleEn: 'Renovation',
    subtitleUk: 'Реновація',
    imageUrl: '/images/projects/12/photo-main.jpg',
  },
]

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    resources: {
      en: {
        translation: {
          title: {
            firstRow: 'European',
            secondRow: 'Style',
            thirdRow: 'Renovations',
            projectTitle: 'Gallery_of',
            location: 'Based in Kyiv, Ukraine',
            date: 'Established in 2005',
          },
          header: {
            text: 'Home_Our Services_About Us_Gallery of Works_Contact',
          },
          projects: {
            title_1: rooms[0].titleEn,
            title_2: rooms[1].titleEn,
            title_3: rooms[2].titleEn,
            title_4: rooms[3].titleEn,
            title_5: rooms[4].titleEn,
            title_6: rooms[5].titleEn,
            title_7: rooms[6].titleEn,
            title_8: rooms[7].titleEn,
            title_9: rooms[8].titleEn,
            title_10: rooms[9].titleEn,
            title_11: rooms[10].titleEn,
            title_12: rooms[11].titleEn,
            subtitle_1: rooms[0].subtitleEn,
            subtitle_2: rooms[1].subtitleEn,
            subtitle_3: rooms[2].subtitleEn,
            subtitle_4: rooms[3].subtitleEn,
            subtitle_5: rooms[4].subtitleEn,
            subtitle_6: rooms[5].subtitleEn,
            subtitle_7: rooms[6].subtitleEn,
            subtitle_8: rooms[7].subtitleEn,
            subtitle_9: rooms[8].subtitleEn,
          },
          sections: {
            services: {
              title: 'Our Services',
              service_1: {
                title: 'Apartment Renovation',
                subtitle:
                  'Complete apartment renovations tailored to your needs.',
              },
              service_2: {
                title: 'Office Renovation',
                subtitle: 'Expert renovation services to transform your space.',
              },
              service_3: {
                title: 'Painting works',
                subtitle: 'Individual solutions in the field of painting work.',
              },
              buttonTitle: 'Learn More',
            },
            additionalInfo: {
              title: 'Modern Repair and <br /> Quality Service',
              subtitle:
                'Our specialists will offer the best types of materials, taking <br /> into account modern aesthetics and functionality, creating <br /> the best living conditions for you.',
              titleTablet: 'Modern Repair and Quality Service',
              subtitleTablet:
                'Our specialists will offer the best types of materials, taking into account modern aesthetics and functionality, creating the best living conditions for you.',
              btnTitle: 'Learn More',
            },
            comments: {
              title: 'What Our Clients Say',
              1: {
                name: 'Victor',
                tender: 'Basement plastering 35 sq.m. (Kyiv)',
                review:
                  'I liked the cooperation. Very nice prices. They gave advice on the choice of materials. I cooperated with the team not only on plastering but also on the installation of drywall and exterior plastering. Everything was done with high quality.',
              },
              2: {
                name: 'Oleh',
                tender: 'Repair of the flat (Kyiv)',
                review:
                  'There were a couple of small comments at the end of the repair, they fixed them the next day. I recommend this team.',
              },
              3: {
                name: 'Ihor',
                tender: 'Plastering works (Chubynske village) (Kyiv)',
                review: 'I recommend these masters.',
              },
              4: {
                name: 'Oleh',
                tender: 'Kitchen renovation (Kyiv)',
                review:
                  'The main estimate was calculated in detail, and the work was completed on time and on budget.',
              },
              5: {
                name: 'Serhii',
                tender: 'Puttying walls for wallpapering and wallpapering',
                review: `I don't understand why these guys still don't have any reviews. very professional craftsmen. constantly checking themselves, no need to follow them and ‘poke their noses in’. I am very satisfied with the quality of work.`,
              },
            },
            clientsWork: {
              process: {
                title: 'Our Process',
                description:
                  'We professionally, qualitatively, quickly and inexpensively perform <br /> finishing (putty, plaster, wallpaper, painting), drywall, tile work, <br /> screed, laminate, linoleum, baseboards, etc.',
              },
              achievements: {
                title: 'Our Achievements',
                description: {
                  completedProjects: {
                    title: '150+',
                    description: 'Projects completed',
                  },
                  industryExperience: {
                    title: '20 Years',
                    description: 'Industry Experience',
                  },
                  clientSatisfaction: {
                    title: '100%',
                    description: 'Client Satisfaction',
                  },
                  teamMembers: {
                    title: '10+',
                    description: 'Team Members',
                  },
                },
              },
              servings: {
                title: 'What We Offer',
                description: [
                  ['Tile Work', 'Drywall Installation'],

                  ['Floor Coverings', 'Wallpapering'],
                  ['Soundproofing', 'Installation of Lining'],
                  ['Kitchen Renovation', 'Bathroom or Toilet Renovation'],

                  ['Wall Panels', 'Waterproofing'],
                  ['Thermal Insulation', 'Masonry Works'],
                  [
                    'Demolition of Walls and Partitions',
                    'Dismantling of Plumbing',
                  ],
                  ['Removing Paints', 'Electrical Installation Works'],
                  ['Plumbing Works', 'Installation Works (Slabs, FBS)'],
                  ['Decorative Wall Finishing', 'Rough Work on the Floor'],
                ],
              },
              contactUs: {
                title: 'Contact Us',
                subtitle:
                  'Get in touch with our team for more information or to schedule a tour.',
                form: {
                  input1: 'First name',
                  input2: 'Last name',
                  input3: 'Email',
                  textarea: 'Placeholder',
                  btnTitle: 'Submit',
                  errors: {
                    firstName: 'Invalid First Name',
                    lastName: 'Invalid Last Name',
                    email: 'Invalid Email',
                  },
                },
              },
            },
          },
          footer: {
            section1: 'Home_About Us_Our Services',
            section2: 'Gallery of Works_Contact Us',
            section3: {
              title: 'Subscribe to our newsletter',
              subtitle:
                'Stay updated with our latest renovation tips and offers!',
            },
            form: { inputTitle: 'Email address', btnTitle: 'Subscribe' },
          },
        },
      },
      uk: {
        translation: {
          title: {
            firstRow: 'Ремонт',
            secondRow: 'В Європейському',
            thirdRow: 'Стилі',
            projectTitle: 'Галерея_',
            location: 'Базуємося в Києві, Україна',
            date: 'Засновано у 2005 році',
          },
          header: {
            text: 'Домашня_Наші Послуги_Про Нас_Галерея Робіт_Контакти',
          },
          projects: {
            title_1: rooms[0].titleUk,
            title_2: rooms[1].titleUk,
            title_3: rooms[2].titleUk,
            title_4: rooms[3].titleUk,
            title_5: rooms[4].titleUk,
            title_6: rooms[5].titleUk,
            title_7: rooms[6].titleUk,
            title_8: rooms[7].titleUk,
            title_9: rooms[8].titleUk,
            subtitle_1: rooms[0].subtitleUk,
            subtitle_2: rooms[1].subtitleUk,
            subtitle_3: rooms[2].subtitleUk,
            subtitle_4: rooms[3].subtitleUk,
            subtitle_5: rooms[4].subtitleUk,
            subtitle_6: rooms[5].subtitleUk,
            subtitle_7: rooms[6].subtitleUk,
            subtitle_8: rooms[7].subtitleUk,
            subtitle_9: rooms[8].subtitleUk,
          },
          sections: {
            services: {
              title: 'Наші послуги',
              service_1: {
                title: 'Реконструкція квартир',
                subtitle: 'Повний ремонт квартир під ваші потреби.',
              },
              service_2: {
                title: 'Ремонт офісу',
                subtitle:
                  'Експертні ремонтні послуги для перетворення вашого простору.',
              },
              service_3: {
                title: 'Малярні роботи',
                subtitle: 'Індивідуальні рішення в галузі малярних робіт.',
              },
              buttonTitle: 'Дізнайтеся Більше',
            },
            additionalInfo: {
              title: 'Сучасний ремонт та якісне обслуговування',
              subtitle:
                'Наші фахівці запропонують найкращі види матеріалів, враховуючи сучасну естетику та функціональність, створюючи для вас найкращі умови для життя.',
              btnTitle: 'Дізнайтеся Більше',
            },
            comments: {
              title: 'Що Кажуть Наші Клієнти',
              1: {
                name: 'Віктор',
                tender: 'Штукатурка підвалу 35 м.кв. (Київ)',
                review:
                  'Співпраця сподобалась. Дуже приємні ціни. Надали поради щодо вибору матеріалів. Співпрацював з бригадою не тільки по штукатурці а й по монтажу гіпсокартону та зовнішнім штукатурним роботам. Все виконано з високою якістю.',
              },
              2: {
                name: 'Олег',
                tender: 'Ремонт квартири (Київ)',
                review:
                  'Були пару невеличких зауважень по закінченню ремонту, виправили на наступний день. Рекомендую цю бригаду.',
              },
              3: {
                name: 'Ігор',
                tender: 'Штукатурні роботи (с. Чубинське) (Київ)',
                review: 'Рекомендую цих майстрів.',
              },
              4: {
                name: 'Олег',
                tender: 'Ремонт Кухні (Київ)',
                review:
                  'Детально розрахована основна мета, добре виконання робіт в поставлені строки та бюджет.',
              },
              5: {
                name: 'Сергій',
                tender: 'Шпаклювання стін під шпалери та поклейка шпалер',
                review: `Я не розумію чому у цих хлопців досі немає відгуків. дуже професійні майстри. постійно самі себе перевіряють, не потрібно ходити за ними і «тикати носом». Я дуже задоволений якістю робіт.`,
              },
            },
            clientsWork: {
              process: {
                title: 'Наша робота',
                description:
                  'Професійно, якісно, швидко і недорого виконуємо оздоблювальні роботи (шпаклівка, штукатурка, шпалери, фарбування), гіпсокартон, плиточні роботи, стяжка, ламінат, лінолеум, плінтуси тощо.',
              },
              achievements: {
                title: 'Наші досягнення',
                description: {
                  completedProjects: {
                    title: '150+',
                    description: 'Проектів виконано',
                  },
                  industryExperience: {
                    title: '20 Років',
                    description: 'Галузевого досвіду',
                  },
                  clientSatisfaction: {
                    title: '100%',
                    description: 'Задоволеність клієнта',
                  },
                  teamMembers: {
                    title: '10+',
                    description: 'Членів команди',
                  },
                },
              },
              servings: {
                title: 'Що ми пропонуємо',
                description: [
                  ['Укладка плитки', 'Монтаж гіпсокартону'],

                  ['Покриття для підлоги', 'Поклейка шпалер'],
                  ['Шумоізоляція', 'Монтаж вагонки'],
                  ['Ремонт кухні', 'Ремонт ванної або туалету'],

                  ['Стінові панелі', 'Гідроізоляція'],
                  ['Теплоізоляція', 'Кладка'],
                  ['Демонтаж стін та перегородок', 'Демонтаж сантехніки'],
                  ['Зняття фарби', 'Електромонтажні роботи'],
                  ['Сантехнічні роботи', 'Монтажні роботи (плити, ФБС)'],
                  ['Декоративне оздоблення стін', 'Чорнові роботи на підлозі'],
                ],
              },
              contactUs: {
                title: `Зв'яжіться з нами`,
                subtitle:
                  'Зв’яжіться з нашою командою для отримання додаткової інформації або планування.',
                form: {
                  input1: `Ім'я`,
                  input2: 'Фамілія',
                  input3: 'Адреса електронної пошти',
                  textarea: 'Поле для тексту',
                  btnTitle: 'Надіслати',
                  errors: {
                    firstName: 'Недійсне Ім’я',
                    lastName: 'Недійсне Прізвище',
                    email: 'Недійсна електронна адреса',
                  },
                },
              },
            },
          },
          footer: {
            section1: 'Домашня_Про Нас_Наші Послуги',
            section2: 'Галерея Робіт_Контакти',
            section3: {
              title: 'Підпишіться на нашу розсилку',
              subtitle:
                'Слідкуйте за нашими останніми порадами та пропозиціями щодо ремонту!',
            },
            form: { inputTitle: 'Адреса ел. пошти', btnTitle: 'Підписатися' },
          },
        },
      },
    },
  })

export default i18next
