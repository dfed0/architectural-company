'use client'

import * as cheerio from 'cheerio'
export async function getReviews() {
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
  const key = name.map((item) => {
    return item + Math.floor(Math.random() * 1000000000)
  })
  console.log({ name, tender, comment, key })
  // const length = Math.min(name.length, tender.length, comment.length)

  const length = Math.min(name.length, tender.length, comment.length)

  return Array.from({ length }, (_, i) => ({
    name: name[i],
    tender: tender[i],
    comment: comment[i],
    key: key[i],
  }))
}
