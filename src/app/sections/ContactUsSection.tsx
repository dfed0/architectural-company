'use client'
import 'react-phone-input-2/lib/style.css'
import { useRef, useState } from 'react'
// import { useState } from 'react'
import FilledStandardButton from '../components/FilledStandardButton'
import { useTranslation } from 'react-i18next'
import PhoneInput from 'react-phone-input-2'

export default function ContactUsSection() {
  const { t } = useTranslation()
  const [formSubmit, setFormSubmit] = useState(false)
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notTouched: true,
  })
  const [focus, setFocus] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    placeholder: false,
  })
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const placeholderRef = useRef(null)
  function inputValidation(target) {
    if (formSubmit === true) setFormSubmit(false)
    const type = target.name
    console.log(type)
    if (target.value === '') {
      setErrors((prev) => ({
        ...prev,
        [type]: 'This field must be filled in',
      }))
      target.classList.remove('border-[#00000029]')
      target.classList.add('border-[#D62D30]')
      target.classList.remove('text-[#000]')
      target.classList.add('text-[#D62D30]')
      target.classList.remove('focus:border-[#00000029]')
      target.classList.add('focus:border-[#D62D30]')
    } else if (type === 'phone') {
    } else if (
      type !== 'email' &&
      /[^a-zA-Zа-яА-ЯёЁіІїЇєЄ ]/g.test(target.value)
    ) {
      setErrors((prev) => ({
        ...prev,
        [type]: 'Only letters are supported',
      }))
      target.classList.remove('border-[#00000029]')
      target.classList.add('border-[#D62D30]')
      target.classList.remove('text-[#000]')
      target.classList.add('text-[#D62D30]')
      target.classList.remove('focus:border-[#00000029]')
      target.classList.add('focus:border-[#D62D30]')
    } else if (type === 'email' && !target.value.includes('@') && formSubmit) {
      setErrors((prev) => ({
        ...prev,
        [type]: 'Email must have the @ symbol ',
      }))
      target.classList.remove('border-[#00000029]')
      target.classList.add('border-[#D62D30]')
      target.classList.remove('text-[#000]')
      target.classList.add('text-[#D62D30]')
      target.classList.remove('focus:border-[#00000029]')
      target.classList.add('focus:border-[#D62D30]')
    } else if (target.value.trimEnd().includes(' ')) {
      setErrors((prev) => ({
        ...prev,
        [type]: 'Spaces are not supported',
      }))
      target.classList.remove('border-[#00000029]')
      target.classList.add('border-[#D62D30]')
      target.classList.remove('text-[#000]')
      target.classList.add('text-[#D62D30]')
      target.classList.remove('focus:border-[#00000029]')
      target.classList.add('focus:border-[#D62D30]')
    } else if (target.classList.value.includes('border-[#D62D30]')) {
      setErrors((prev) => ({ ...prev, [type]: '' }))
      target.classList.remove('border-[#D62D30]')
      target.classList.add('border-[#00000029]')
      target.classList.remove('text-[#D62D30]')
      target.classList.add('text-[#000]')
      target.classList.remove('focus:border-[#D62D30]')
      target.classList.add('focus:border-[#00000029]')
    }
  }
  function handleChange(e) {
    setErrors((prev) => ({ ...prev, notTouched: false }))
    const target = e.target
    inputValidation(target)
  }
  
  const handleSubmit = async (e) => {
    setFormSubmit(true)
    e.preventDefault()
    const hasErrors = Object.values(errors).some((error) => error != false)
    console.log(
      hasErrors ||
      (!firstNameRef.current?.value ||
        !lastNameRef.current?.value ||
        !emailRef.current?.value ||
        !placeholderRef.current?.value)
    )
    if (
      hasErrors ||
      (!firstNameRef.current?.value ||
        !lastNameRef.current?.value ||
        !emailRef.current?.value ||
        !placeholderRef.current?.value)
    ) {
      return
    }
    const formData = new FormData(e.target)
    formData.append('access_key', 'dbd256a5-73eb-4bce-9e3d-030758e39866')

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
    await res.json()
    e.target.reset()
  }

  return (
    <section
      className="flex sm:flex-col xl:flex-row sm:pt-[1.25rem] sm:pb-[2.5rem]  xl:py-[3.5rem] items-start sm:gap-[1.25rem] xl:gap-[3.5rem] self-stretch scroll-mt-[6rem]"
      id="contact"
    >
      <div className="flex flex-col self-stretch w-full sm:gap-[1.5rem] md:gap-[1.5rem]">
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
        noValidate
      >
        <div className="flex sm:flex-col md:flex-row items-start gap-[1.5rem] self-stretch">
          <div className="flex flex-col items-start gap-[0.25rem] flex-[1_0_0] self-stretch">
            {!focus.firstName && <div className="h-[1.125rem] w-full"></div>}
            {focus.firstName && (
              <div className="flex">
                <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[0.75rem] text-[#000] font-[400] leading-[-0.00375rem]">
                  {t('sections.clientsWork.contactUs.form.input1')}
                </p>
                <p className="text-red-700 text-[0.75rem]">*</p>
              </div>
            )}
            <input
              className="flex p-[1rem] self-stretch items-center gap-[0.5rem] border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] text-[1rem] bg-[#fff] focus:outline-none focus:border-[#00000029]"
              placeholder={
                !focus.firstName
                  ? t('sections.clientsWork.contactUs.form.input1')
                  : ''
              }
              type="text"
              name="firstName"
              id="firstName"
              inputMode="text"
              ref={firstNameRef}
              onChange={handleChange}
              onFocus={() => setFocus((prev) => ({ ...prev, firstName: true }))}
              onBlur={() => setFocus((prev) => ({ ...prev, firstName: false }))}
              required
            ></input>
            {errors.firstName && (
              <p className="text-[#D62D30] text-ellipsis font-[Inter_Var] text-[0.75rem] font-[400] tracking-[-0.00375rem]">
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start gap-[0.25rem] flex-[1_0_0] self-stretch">
            {!focus.lastName && <div className="h-[1.125rem] w-full"></div>}
            {focus.lastName && (
              <div className="flex">
                <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[0.75rem] text-[#000] font-[400] leading-[-0.00375rem]">
                  {t('sections.clientsWork.contactUs.form.input2')}
                </p>
                <p className="text-red-700 text-[0.75rem]">*</p>
              </div>
            )}
            <input
              className="flex p-[1rem] self-stretch items-center gap-[0.5rem] border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] text-[1rem] bg-[#fff] focus:outline-none focus:border-[#00000029]"
              placeholder={
                !focus.lastName
                  ? t('sections.clientsWork.contactUs.form.input2')
                  : ''
              }
              type="text"
              name="lastName"
              id="lastName"
              inputMode="text"
              ref={lastNameRef}
              onChange={handleChange}
              onFocus={() => setFocus((prev) => ({ ...prev, lastName: true }))}
              onBlur={() => setFocus((prev) => ({ ...prev, lastName: false }))}
              required
            ></input>
            {errors.lastName && (
              <p className="text-[#D62D30] text-ellipsis font-[Inter_Var] text-[0.75rem] font-[400] tracking-[-0.00375rem]">
                {errors.lastName}
              </p>
            )}
          </div>
          {/* </div> */}
        </div>
        <div className="flex flex-col items-start gap-[0.25rem] self-stretch">
          {!focus.email && <div className="h-[1.125rem] w-full"></div>}
          {focus.email && (
            <div className="flex">
              <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[0.75rem] text-[#000] font-[400] leading-[-0.00375rem]">
                {t('sections.clientsWork.contactUs.form.input3')}
              </p>
              <p className="text-red-700 text-[0.75rem]">*</p>
            </div>
          )}
          <input
            className="flex p-[1rem] items-center gap-[0.5rem] self-stretch border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] w-full text-[1rem] bg-[#fff] focus:outline-none focus:border-[#00000029]"
            placeholder={
              !focus.email
                ? t('sections.clientsWork.contactUs.form.input3')
                : ''
            }
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            onChange={handleChange}
            onFocus={() => setFocus((prev) => ({ ...prev, email: true }))}
            onBlur={() => setFocus((prev) => ({ ...prev, email: false }))}
            required
          ></input>
          {errors.email && (
            <p className="text-[#D62D30] text-ellipsis font-[Inter_Var] text-[0.75rem] font-[400] tracking-[-0.00375rem]">
              {errors.email}
            </p>
          )}
        </div>
        <div className="flex flex-col items-start gap-[0.25rem] self-stretch">
          {!focus.phone && <div className="h-[1.125rem] w-full"></div>}
          {focus.phone && (
            <div className="flex">
              <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[0.75rem] text-[#000] font-[400] leading-[-0.00375rem]">
                {t('sections.clientsWork.contactUs.form.input4')}
              </p>
            </div>
          )}
          <PhoneInput
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: true,
              onFocus: () => setFocus((prev) => ({ ...prev, phone: true })),
              onBlur: () => setFocus((prev) => ({ ...prev, phone: false })),
              placeholder: `${
                !focus.phone
                  ? t('sections.clientsWork.contactUs.form.input4')
                  : ''
              }`,
            }}
          />
          {errors.email && (
            <p className="text-[#D62D30] text-ellipsis font-[Inter_Var] text-[0.75rem] font-[400] tracking-[-0.00375rem]">
              {errors.email}
            </p>
          )}
        </div>
        <div className="flex flex-col items-start gap-[0.25rem] self-stretch">
          {!focus.placeholder && <div className="h-[1.125rem] w-full"></div>}
          {focus.placeholder && (
            <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[0.75rem] text-[#000] font-[400] leading-[-0.00375rem]">
              {t('sections.clientsWork.contactUs.form.textarea')}
            </p>
          )}
          <textarea
            className="flex p-[1rem] items-start gap-[0.5rem] self-stretch border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] text-[1rem] bg-[#fff] min-h-[7.75rem] focus:outline-none focus:border-[#00000029]"
            placeholder={
              !focus.placeholder
                ? t('sections.clientsWork.contactUs.form.textarea')
                : ''
            }
            name="placeholder"
            id="placeholder"
            onFocus={() => setFocus((prev) => ({ ...prev, placeholder: true }))}
            onBlur={() => setFocus((prev) => ({ ...prev, placeholder: false }))}
            ref={placeholderRef}
            onChange={handleChange}
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
