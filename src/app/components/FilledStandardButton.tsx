import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

type ButtonProps = {
  title: string
  type: 'submit' | 'reset' | 'button'
  link?: string
  project?: string
}

const FilledStandardButton = ({ title, type, link, project }: ButtonProps) => {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  console.log('OGO', link)
  return (
    <>
      {link && project ? (
        <Link
          className="flex flex-col items-start self-stretch"
          href={`project/${t(link, { lng: 'en' })
            .toString()
            .normalize('NFKD')
            .replace(/[\u0300-\u036F]/g, '')
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')}?project=${
            project.replace(/\D/g, '')
          }&lang=${searchParams.get('lang')}`}
        >
          <button
            className="flex py-[0.75rem] px-[1.5rem] justify-center items-center rounded-[0.75rem]  text-[#fff] font-[Inter_Var] font-[600] bg-[#AD7C00] hover:bg-[#8F5E00] cursor-pointer"
            type={type}
          >
            {title}
          </button>
        </Link>
      ) : (
        <button
          className="flex py-[0.75rem] px-[1.5rem] justify-center items-center rounded-[0.75rem]  text-[#fff] font-[Inter_Var] font-[600] bg-[#AD7C00] hover:bg-[#8F5E00] cursor-pointer"
          type={type}
        >
          {title}
        </button>
      )}
    </>
  )
}

export default FilledStandardButton
