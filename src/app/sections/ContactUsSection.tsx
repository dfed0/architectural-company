'use client'

import { useRef, useState } from 'react'
// import { useState } from 'react'
import FilledStandardButton from '../components/FilledStandardButton'
import { useTranslation } from 'react-i18next'

export default function ContactUsSection() {
  const { t } = useTranslation()
  const [formSubmit, setFormSubmit] = useState(false)
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
  })
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  // const [success, setSuccess] = useState(false)
  // const [error, setError] = useState(false)
  function handleChange(e) {
    // e.target === firstNameRef.current &&
    // e.target === lastNameRef.current &&
    // e.target === emailRef.current &&
    const target = e.target
    console.log(firstNameRef.current, 'DDDDDDDDDDDD')
    if (formSubmit === true) setFormSubmit(false)
    if (target === firstNameRef.current) {
      if (
        target.value === '' ||
        /[^a-zA-Zа-яА-ЯёЁіІїЇєЄ ]/g.test(target.value)
      ) {
        setErrors((prev) => ({ ...prev, firstName: true }))
        target.classList.remove('border-[#00000029]')
        target.classList.add('border-[#D62D30]')
        target.classList.remove('text-[#000]')
        target.classList.add('text-[#D62D30]')
        target.classList.remove('focus:border-[#00000029]')
        target.classList.add('focus:border-[#D62D30]')
      } else if (target.classList.value.includes('border-[#D62D30]')) {
        setErrors((prev) => ({ ...prev, firstName: false }))
        target.classList.remove('border-[#D62D30]')
        target.classList.add('border-[#00000029]')
        target.classList.remove('text-[#D62D30]')
        target.classList.add('text-[#000]')
        target.classList.remove('focus:border-[#D62D30]')
        target.classList.add('focus:border-[#00000029]')
      }
    }

    if (target === lastNameRef.current) {
      if (
        target.value === '' ||
        /[^a-zA-Zа-яА-ЯёЁіІїЇєЄ ]/g.test(target.value)
      ) {
        setErrors((prev) => ({ ...prev, lastName: true }))
        target.classList.remove('border-[#00000029]')
        target.classList.add('border-[#D62D30]')
        target.classList.remove('text-[#000]')
        target.classList.add('text-[#D62D30]')
        target.classList.remove('focus:border-[#00000029]')
        target.classList.add('focus:border-[#D62D30]')
      } else if (target.classList.value.includes('border-[#D62D30]')) {
        setErrors((prev) => ({ ...prev, lastName: false }))
        target.classList.remove('border-[#D62D30]')
        target.classList.add('border-[#00000029]')
        target.classList.remove('text-[#D62D30]')
        target.classList.add('text-[#000]')
        target.classList.remove('focus:border-[#D62D30]')
        target.classList.add('focus:border-[#00000029]')
      }
    }

    if (target === emailRef.current) {
      if (
        (!target.value.includes('@') && formSubmit) ||
        target.value.includes(' ')
      ) {
        setErrors((prev) => ({ ...prev, email: true }))
        target.classList.remove('border-[#00000029]')
        target.classList.add('border-[#D62D30]')
        target.classList.remove('text-[#000]')
        target.classList.add('text-[#D62D30]')
        target.classList.remove('focus:border-[#00000029]')
        target.classList.add('focus:border-[#D62D30]')
      } else if (target.classList.value.includes('border-[#D62D30]')) {
        setErrors((prev) => ({ ...prev, email: false }))
        target.classList.remove('border-[#D62D30]')
        target.classList.add('border-[#00000029]')
        target.classList.remove('text-[#D62D30]')
        target.classList.add('text-[#000]')
        target.classList.remove('focus:border-[#D62D30]')
        target.classList.add('focus:border-[#00000029]')
      }
    }
  }
  const handleSubmit = async (e) => {
    setFormSubmit(true)
    e.preventDefault()
    const hasErrors = Object.values(errors).some((error) => error === true)

    if (hasErrors) {
      return // не отправлять форму
    }
    const formData = new FormData(e.target)
    formData.append('access_key', 'dbd256a5-73eb-4bce-9e3d-030758e39866')

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
    await res.json()
    // const data = await res.json()
    e.target.reset() // очистка формы

    // if (data.success) {
    //   setSuccess(true)
    // } else {
    //   setError(true)
    // }
  }

  return (
    <section
      className="flex md:flex-col xl:flex-row md:py-[1.25rem] xl:py-[3.5rem] items-start md:gap-[1.25rem] xl:gap-[3.5rem] self-stretch scroll-mt-[6rem]"
      id="contact"
    >
      <div className="self-stretch w-full">
        <h2 className="text-[#1E1B28] font-[Roboto_Serif_Bold] text-[2.5rem] font-[700] leading-[3.25rem]">
          {t('sections.clientsWork.contactUs.title')}
        </h2>
        <p className="self-stretch text-[#000] font-[Inter_Var] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem]">
          {t('sections.clientsWork.contactUs.subtitle')}
        </p>
      </div>
      {/* <div className="w-full"> */}
      <form
        method="POST"
        className="flex flex-col items-start gap-[1.5rem] w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex items-start gap-[1.5rem] self-stretch">
          {/* <div className="flex items-end gap-[1.5rem] self-stretch"> */}
          <div className="flex flex-col items-start gap-[0.25rem] flex-[1_0_0]">
            <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[#000] font-[400] leading-[-0.00375rem]">
              {t('sections.clientsWork.contactUs.form.input1')}
            </p>
            <input
              className="flex p-[1rem] self-stretch items-center gap-[0.5rem] border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] text-[1rem] bg-[#fff] focus:outline-none focus:border-[#00000029]"
              placeholder={t('sections.clientsWork.contactUs.form.input1')}
              type="text"
              name="name"
              id="name"
              inputMode="text"
              ref={firstNameRef}
              onChange={handleChange}
              required
            ></input>
            {errors.firstName && (
              <p className="text-[#D62D30] text-ellipsis font-[Inter_Var] text-[0.75rem] font-[400] tracking-[-0.00375rem]">
                {t('sections.clientsWork.contactUs.form.errors.firstName')}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start gap-[0.25rem] flex-[1_0_0]">
            <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[#000] font-[400] leading-[-0.00375rem]">
              {t('sections.clientsWork.contactUs.form.input2')}
            </p>
            <input
              className="flex p-[1rem] self-stretch items-center gap-[0.5rem] border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] text-[1rem] bg-[#fff] focus:outline-none focus:border-[#00000029]"
              placeholder={t('sections.clientsWork.contactUs.form.input2')}
              type="text"
              name="surname"
              id="surname"
              inputMode="text"
              ref={lastNameRef}
              onChange={handleChange}
              required
            ></input>
            {errors.lastName && (
              <p className="text-[#D62D30] text-ellipsis font-[Inter_Var] text-[0.75rem] font-[400] tracking-[-0.00375rem]">
                {t('sections.clientsWork.contactUs.form.errors.lastName')}
              </p>
            )}
          </div>
          {/* </div> */}
        </div>
        <div className="flex flex-col items-start gap-[0.25rem] self-stretch">
          <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[#000] font-[400] leading-[-0.00375rem]">
            {t('sections.clientsWork.contactUs.form.input3')}
          </p>
          <input
            className="flex p-[1rem] items-center gap-[0.5rem] self-stretch border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] w-full text-[1rem] bg-[#fff] focus:outline-none focus:border-[#00000029]"
            placeholder={t('sections.clientsWork.contactUs.form.input3')}
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            onChange={handleChange}
            required
          ></input>
          {(formSubmit && errors.email) ||
            (emailRef.current?.value.includes(' ') && (
              <p className="text-[#D62D30] text-ellipsis font-[Inter_Var] text-[0.75rem] font-[400] tracking-[-0.00375rem]">
                {t('sections.clientsWork.contactUs.form.errors.email')}
              </p>
            ))}
        </div>
        <div className="flex flex-col items-start gap-[0.25rem] self-stretch">
          <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[#000] font-[400] leading-[-0.00375rem]">
            {t('sections.clientsWork.contactUs.form.textarea')}
          </p>
          <textarea
            className="flex p-[1rem] items-start gap-[0.5rem] self-stretch border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] text-[1rem] bg-[#fff] min-h-[7.75rem] focus:outline-none focus:border-[#00000029]"
            placeholder={t('sections.clientsWork.contactUs.form.textarea')}
            name="message"
            id="message"
            required
          ></textarea>
        </div>
        <FilledStandardButton
          title={t('sections.clientsWork.contactUs.form.btnTitle')}
          type="submit"
        />
      </form>
    </section>
  )
}
