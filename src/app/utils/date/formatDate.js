export function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
   if (isNaN(date)) return ''
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // месяцы с 0
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}
