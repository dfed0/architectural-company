import { t } from 'i18next'
import Link from 'next/link'

export default function FooterLinks({
  langParam,
  linkClass,
  links,
}: {
  langParam: string | null
  linkClass: string
links: { href: string; label: string }[]
}) {

  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={label}
          href={`/home?lang=${langParam}${href}`}
          aria-label={label}
          className={linkClass}
        >
          {t(label)}
        </Link>
      ))}
    </>
  )
}
