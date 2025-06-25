import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
  detection: {
  order: ['querystring'], // только query
  lookupQuerystring: 'lang',
  caches: [], // отключаем кэширование вообще
},
    debug: true,
    // detection: {
    //   order: ['localStorage', 'navigator'],
    //   caches: ['localStorage'],
    //   lookupLocalStorage: 'i18nextLng',
    // },
    resources: {
      en: {
        translation: {
          title: {
            firstRow: 'European',
            secondRow: 'Style',
            thirdRow: 'Renovations',
            projectTitle: 'Gallery_of',
            location: 'Based in Kyiv, Ukraine',
            locationProject: 'Kyiv, Ukraine',
            subtitleProjects: 'Renovation',
            date: 'Established in 2005',
          },
          header: {
            text: 'Home_Our Services_About Us_Gallery of Works_Contact',
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
                review: `I don't understand why these guys still don't have any feedback. very professional craftsmen. constantly checking themselves, no need to follow them and ‘poke their noses in’. I am very satisfied with the quality of work.`,
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
                  input4: 'Phone',
                  textarea: 'Placeholder',
                  btnTitle: 'Submit',
                  errors: {
                    emptyField: 'This field must be filled in',
                    notLetter: 'Only letters are supported',
                    email: 'Email must have the @ symbol',
                    spaces: 'Spaces are not supported',
                  },
                },
              },
            },
          },
          motivateTitle:
            'Explore our collection of beautifully renovated <br> apartments, each designed to offer a unique blend of <br> comfort and style. From modern urban lofts to cozy <br> suburban retreats, our gallery  showcases the finest in <br> contemporary living spaces.',
          motivateTitleTablet:
            'Explore our collection of <br> beautifully renovated <br> apartments, each designed to <br> offer a unique blend of comfort <br> and style. From modern urban <br> lofts to cozy suburban retreats, <br> our gallery  showcases the finest <br> in contemporary living spaces.',
          motivateTitlePhone:
            'Explore our collection of <br> beautifully renovated <br> apartments, each designed to <br> offer a unique blend of comfort <br> and style. From modern urban <br> lofts to cozy suburban <br> retreats, our gallery <br> showcases the finest in contemporary living spaces.',
          footer: {
            section1: { title1: 'Home', title2: 'About Us' },
            section2: { title1: 'Our Services', title2: 'Contact Us' },
            section3: {
              title: 'Subscribe to our facebook',
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
            secondRow: 'в Європейському',
            thirdRow: 'Стилі',
            projectTitle: 'Галерея_',
            location: 'Знаходимося в Києві, Україна',
            date: 'Засновано у 2005 році',
            locationProject: 'Київ, Україна',
            subtitleProjects: 'ремонт',
          },
          header: {
            text: 'Домашня_Наші послуги_Про нас_Галерея Робіт_Контакти',
          },
          // projects: {
          //   title_1: rooms[0].titleUk,
          //   title_2: rooms[1].titleUk,
          //   title_3: rooms[2].titleUk,
          //   title_4: rooms[3].titleUk,
          //   title_5: rooms[4].titleUk,
          //   title_6: rooms[5].titleUk,
          //   title_7: rooms[6].titleUk,
          //   title_8: rooms[7].titleUk,
          //   title_9: rooms[8].titleUk,
          //   subtitle_1: rooms[0].subtitleUk,
          //   subtitle_2: rooms[1].subtitleUk,
          //   subtitle_3: rooms[2].subtitleUk,
          //   subtitle_4: rooms[3].subtitleUk,
          //   subtitle_5: rooms[4].subtitleUk,
          //   subtitle_6: rooms[5].subtitleUk,
          //   subtitle_7: rooms[6].subtitleUk,
          //   subtitle_8: rooms[7].subtitleUk,
          //   subtitle_9: rooms[8].subtitleUk,
          // },
          sections: {
            services: {
              title: 'Наші послуги',
              service_1: {
                title: 'Реконструкція квартир',
                subtitle: 'Повний ремонт квартир під ваші потреби.',
              },
              service_2: {
                title: 'Ремонт офісу',
                subtitle: 'Професійний ремонт для оновлення вашого простору.',
              },
              service_3: {
                title: 'Малярні роботи',
                subtitle: 'Індивідуальні рішення в галузі малярних робіт.',
              },
              buttonTitle: 'дізнайтеся більше',
            },
            additionalInfo: {
              title: 'Сучасний ремонт та якісний сервіс',
              subtitle:
                'Наші фахівці запропонують найкращі види матеріалів, враховуючи  сучасну естетику та функціональність, створюючи для вас найкращі умови для життя.',
              titleTablet: 'Сучасний ремонт та <br /> якісний сервіс',
              subtitleTablet:
                'Наші фахівці запропонують найкращі види матеріалів, враховуючи сучасну естетику та функціональність, створюючи для вас найкращі умови для життя.',
              btnTitle: 'дізнайтеся більше',
            },
            comments: {
              title: 'Відгуки наших клієнтів',
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
                tender: 'Ремонт кухні (Київ)',
                review:
                  'Детально розрахована основна мета, добре виконання робіт в поставлені строки та бюджет.',
              },
              5: {
                name: 'Сергій',
                tender: 'Шпаклювання стін під шпалери та поклейка шпалер',
                review: `Я не розумію чому у цих хлопців досі немає відгуків. Дуже професійні майстри. Постійно самі себе перевіряють, не потрібно ходити за ними і «тикати носом». Я дуже задоволений якістю робіт.`,
              },
            },
            clientsWork: {
              process: {
                title: 'Наш робочий процес',
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
                    description: 'Задоволених клієнтів',
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
                title: `Напишіть нам`,
                subtitle:
                  'Зв’яжіться з нашою командою для отримання додаткової інформації або планування.',
                form: {
                  input1: `Ім'я`,
                  input2: 'Прізвище',
                  input3: 'Адреса електронної пошти',
                  input4: 'Телефон',
                  textarea: 'Поле для тексту',
                  btnTitle: 'Надіслати',
                  errors: {
                    emptyField: 'Це поле є обов′язковим для заповнення',
                    notLetter: 'Підтримуються тільки літери',
                    email: 'Електронна пошта повинна містити символ @',
                    spaces: 'Пробіли не підтримуються',
                  },
                },
              },
            },
          },
          motivateTitle:
            'Ознайомтеся з нашою колекцією відремонтованих квартир, кожна з яких створена для того, щоб запропонувати унікальне поєднання комфорту та стилю. Від сучасних міських лофтів до затишних заміських резиденцій наша галерея демонструє найкращі зразки сучасного житла.',
          motivateTitleTablet:
            'Ознайомтеся з нашою колекцією відремонтованих квартир, кожна з яких створена для того, щоб запропонувати унікальне поєднання комфорту та стилю. Від сучасних міських лофтів до затишних заміських резиденцій наша галерея демонструє найкращі зразки сучасного житла.',
          motivateTitlePhone:
            'Ознайомтеся з нашою колекцією відремонтованих квартир, <br /> кожна з яких створена для того, щоб запропонувати унікальне поєднання комфорту та стилю. <br /> Від сучасних міських лофтів до затишних заміських резиденцій <br /> наша галерея демонструє найкращі зразки сучасного житла.',
          footer: {
            section1: { title1: 'Домашня', title2: 'Про нас' },
            section2: { title1: 'Наші послуги', title2: 'Контакти' },
            section3: {
              title: 'Підпишіться на наш фейсбук',
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
