'use client'
import 'react-phone-input-2/lib/style.css'
import { useEffect, useRef, useState } from 'react'
// import { useState } from 'react'
import FilledStandardButton from '../components/FilledStandardButton'
import { useTranslation } from 'react-i18next'
import {
  formatPhoneNumber,
  getFormattedCursorPosition,
  getRawCursorPosition,
} from '../components/phoneMask'
// import PhoneInput from 'react-phone-input-2'

export default function ContactUsSection() {
  const [borderStyles, setBorderStyles] = useState({
    firstName: {
      border: 'border-[#00000029]',
      focusBorder: '',
      text: '',
      placeholder: '',
    },
    lastName: {
      border: 'border-[#00000029]',
      focusBorder: '',
      text: '',
      placeholder: '',
    },
    email: {
      border: 'border-[#00000029]',
      focusBorder: '',
      text: '',
      placeholder: '',
    },
    phone: {
      border: 'border-[#00000029]',
      focusBorder: '',
      text: '',
      placeholder: '',
    },
    placeholder: {
      border: 'border-[#00000029]',
      focusBorder: '',
      text: '',
      placeholder: '',
    },
  })
  const { t } = useTranslation()
  const [formSubmit, setFormSubmit] = useState(false)
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    placeholder: '',
    notTouched: true,
  })
  const [focus, setFocus] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    placeholder: false,
  })

  function addValidationClasses(target, type, message) {
    setErrors((prev) => ({
      ...prev,
      [type]: message,
    }))
    setBorderStyles((prev) => ({
      ...prev,
      [type]: {
        border: 'border-[#D62D30]',
        focusBorder: 'focus:border-[#D62D30]',
        text: 'text-[#D62D30]',
        placeholder: 'placeholder-[#D62D30]',
      },
    }))
  }
  function removeValidationClasses(target, type) {
    setErrors((prev) => ({ ...prev, [type]: '' }))
    setBorderStyles((prev) => ({
      ...prev,
      [type]: {
        border: 'border-[#00000029]',
        focusBorder: 'focus:border-[#00000029]',
        text: 'text-[#000]',
        placeholder: 'placeholder-[#00000029]',
      },
    }))
  }
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const placeholderRef = useRef(null)
  function inputValidation(target) {
    if (formSubmit === true) setFormSubmit(false)
    const type = target.name
    if (target.value === '' && target !== phoneRef.current) {
      addValidationClasses(
        target,
        type,
        t('sections.clientsWork.contactUs.form.errors.emptyField')
      )
    } else if (type === 'phone') {
    } else if (
      type !== 'email' &&
      type !== 'placeholder' &&
      /[^a-zA-Zа-яА-ЯёЁіІїЇєЄ ]/g.test(target.value)
    ) {
      addValidationClasses(
        target,
        type,
        t(t('sections.clientsWork.contactUs.form.errors.notLetter'))
      )
    } else if (type !== 'placeholder' && target.value.trimEnd().includes(' ')) {
      addValidationClasses(
        target,
        type,
        t('sections.clientsWork.contactUs.form.errors.spaces')
      )
    } else if (target.classList.value.includes('border-[#D62D30]')) {
      removeValidationClasses(target, type)
    }
  }
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target
    const oldValue = input.value
    const selectionStart = input.selectionStart ?? oldValue.length

    const rawPos = getRawCursorPosition(oldValue, selectionStart)

    const digits = oldValue.replace(/\D/g, '')
    const formatted = formatPhoneNumber(digits)

    input.value = formatted

    const newCursorPos = getFormattedCursorPosition(digits, rawPos)

    requestAnimationFrame(() => {
      input.setSelectionRange(newCursorPos, newCursorPos)
    })
  }
  function handleChange(e) {
    setErrors((prev) => ({ ...prev, notTouched: false }))
    const target = e.target
    inputValidation(target)
  }

  useEffect(() => {}, [errors])
  const handleSubmit = async (e) => {
    setFormSubmit(true)

    e.preventDefault()
    const hasErrors = Object.values(errors).some((error) => error != '')

    if (
      hasErrors ||
      !firstNameRef.current?.value ||
      !lastNameRef.current?.value ||
      !emailRef.current?.value ||
      !placeholderRef.current?.value
    ) {
      const requiredRefs = [firstNameRef, lastNameRef, emailRef, placeholderRef]
      requiredRefs.map((ref) => {
        if (!ref.current?.value) {
          addValidationClasses(
            ref.current,
            ref.current?.name,
            t('sections.clientsWork.contactUs.form.errors.emptyField')
          )
        }
      })
      if (
        !emailRef.current?.value.includes('@') &&
        emailRef.current?.value !== ''
      ) {
        addValidationClasses(
          emailRef.current,
          'email',
          t('sections.clientsWork.contactUs.form.errors.email')
        )
      }
      return
    }
    const formData = new FormData(e.target)
    formData.append('access_key', '80fcc3ed-2307-45b6-a5bc-fb024688d954')

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
    await res.json()
    e.target.reset()
  }

  return (
    <section
      className="flex sm:flex-col xl:flex-row sm:pt-[1.25rem] sm:pb-[1.25rem]  xl:py-[3.5rem] xl:pt-[7rem] items-start sm:gap-[1.25rem] xl:gap-[6rem] self-stretch scroll-mt-[6rem]"
      id="contact"
    >
      <div className="flex flex-col self-stretch w-full sm:gap-[1.5rem]">
        <h2 className="text-[#1E1B28] font-[Roboto_Serif_Bold] text-[2.5rem] font-[700] leading-[3.25rem] sm:h-[2.5rem]">
          {t('sections.clientsWork.contactUs.title')}
        </h2>
        <p className="self-stretch text-[#000] font-[Inter_Var] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem]">
          {t('sections.clientsWork.contactUs.subtitle')}
        </p>
      </div>
      <form
        method="POST"
        className="flex flex-col items-start gap-[1.5rem] w-full"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* absolute top-[-1.375rem] left-0    relative */}
        <div
          className={`flex sm:flex-col md:flex-row items-start ${
            focus.firstName ? 'sm:gap-[1.5rem]' : 'sm:gap-[1.5rem]'
          } self-stretch`}
        >
          <div className="flex flex-col items-start gap-[0.25rem] flex-[1_0_0] self-stretch">
            {focus.firstName && (
              <div className="flex">
                <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[0.75rem] text-[#000] font-[400] leading-[-0.00375rem]">
                  {t('sections.clientsWork.contactUs.form.input1')}
                </p>
                <p className="text-red-700 text-[0.75rem]">*</p>
              </div>
            )}
            <input
              className={`h-[4rem] flex p-[1rem] self-stretch items-center gap-[0.5rem] border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] text-[1rem] bg-[#fff] focus:outline-none ${
                focus.lastName ? 'md:mt-[1.375rem]' : ''
              } ${borderStyles.firstName.border} ${
                borderStyles.firstName.focusBorder
              } ${borderStyles.firstName.text}`}
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
              onFocus={() => {
                setFocus((prev) => ({ ...prev, firstName: true }))
              }}
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
            {focus.lastName && (
              <div className="flex">
                <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[0.75rem] text-[#000] font-[400] leading-[-0.00375rem]">
                  {t('sections.clientsWork.contactUs.form.input2')}
                </p>
                <p className="text-red-700 text-[0.75rem]">*</p>
              </div>
            )}
            <input
              className={`h-[4rem] flex p-[1rem] self-stretch items-center gap-[0.5rem] border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] text-[1rem] bg-[#fff] focus:outline-none focus:border-[#00000029] ${
                focus.firstName ? 'md:mt-[1.375rem]' : ''
              } ${borderStyles.lastName.border} ${
                borderStyles.lastName.focusBorder
              } ${borderStyles.lastName.text}`}
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
        </div>
        <div className="flex flex-col items-start gap-[0.25rem] self-stretch">
          {focus.email && (
            <div className="flex">
              <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[0.75rem] text-[#000] font-[400] leading-[-0.00375rem]">
                {t('sections.clientsWork.contactUs.form.input3')}
              </p>
              <p className="text-red-700 text-[0.75rem]">*</p>
            </div>
          )}
          <input
            className={`h-[4rem] flex p-[1rem] items-center gap-[0.5rem] self-stretch border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] w-full text-[1rem] bg-[#fff] focus:outline-none focus:border-[#00000029] ${borderStyles.email.border} ${borderStyles.email.focusBorder} ${borderStyles.email.text}`}
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
          {focus.phone && (
            <div className="flex">
              <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[0.75rem] text-[#000] font-[400] leading-[-0.00375rem]">
                {t('sections.clientsWork.contactUs.form.input4')}
              </p>
            </div>
          )}
          <input
            className={`flex p-[1rem] items-center gap-[0.5rem] self-stretch border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] w-full text-[1rem] bg-[#fff] focus:outline-none focus:border-[#00000029] ${borderStyles.phone}`}
            placeholder={`${
              !focus.phone
                ? t('sections.clientsWork.contactUs.form.input4')
                : ''
            } +380 `}
            type="tel"
            name="phone"
            id="phone"
            onChange={handlePhoneChange}
            ref={phoneRef}
            onFocus={() => {
              const phone = phoneRef.current
              if (phone && phone.value < 5) {
                phone.value = '+380'
              }
              setFocus((prev) => ({ ...prev, phone: true }))
            }}
            onBlur={() => {
              const phone = phoneRef.current
              if (phone && phone.value.length < 5) {
                phone.value = ''
              }
              setFocus((prev) => ({ ...prev, phone: false }))
            }}
            inputMode="numeric"
            onInput={(e) => {
              const input = e.target as HTMLInputElement
              input.value = input.value.replace(/[^0-9+\s()]/g, '')
            }}
            required
          />
          {errors.phone && (
            <p className="text-[#D62D30] text-ellipsis font-[Inter_Var] text-[0.75rem] font-[400] tracking-[-0.00375rem]">
              {errors.phone}
            </p>
          )}
        </div>
        <div className="flex flex-col items-start gap-[0.25rem] self-stretch">
          {focus.placeholder && (
            <div className="flex">
              <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[0.75rem] text-[#000] font-[400] leading-[-0.00375rem]">
                {t('sections.clientsWork.contactUs.form.textarea')}
              </p>
              <p className="text-red-700 text-[0.75rem]">*</p>
            </div>
          )}
          <textarea
            className={`flex p-[1rem] items-start gap-[0.5rem] self-stretch border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] text-[1rem] bg-[#fff] min-h-[7.75rem] focus:outline-none focus:border-[#00000029] ${borderStyles.placeholder.border} ${borderStyles.placeholder.focusBorder} ${borderStyles.placeholder.text} ${borderStyles.placeholder.placeholder}`}
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
          />
          {errors.placeholder && (
            <p className="text-[#D62D30] text-ellipsis font-[Inter_Var] text-[0.75rem] font-[400] tracking-[-0.00375rem]">
              {errors.placeholder}
            </p>
          )}
        </div>

        <FilledStandardButton
          title={t('sections.clientsWork.contactUs.form.btnTitle')}
          type="submit"
        />
      </form>
    </section>
  )
}
