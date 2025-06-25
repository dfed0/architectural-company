import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function MyPhoneInput() {
  const [formattedValue, setFormattedValue] = useState('')

  const formatPhone = (phone) => {
    if (!phone) return ''
    const parts = phone.split(' ')
    if (parts.length >= 3) {
      return `${parts[0]} (${parts[1]}) ${parts.slice(2).join(' ')}`
    }
    return phone
  }

  const handleChange = (value) => {
    if (value?.startsWith('+380')) {
      const digits = value.replace(/\D/g, '').slice(0, 12)
      let result = '+'

      if (digits.length > 0) result += digits.slice(0, 3)
      if (digits.length >= 4) result += ' ' + digits.slice(3, 5)
      if (digits.length >= 6) result += ' ' + digits.slice(5, 8)
      if (digits.length >= 9) result += ' ' + digits.slice(8, 10)
      if (digits.length >= 11) result += ' ' + digits.slice(10, 12)

      setFormattedValue(result)
    } else {
      setFormattedValue(formatPhone(value))
    }
  }
  return (
    <PhoneInput
      international
      defaultCountry="US" // дефолтная страна (можешь изменить)
      value={formattedValue}
      onChange={handleChange}
      placeholder="Enter phone number"
      //  countrySelectComponent={() => null}
      className="phoneDiv flex p-[1rem] items-center gap-[0.5rem] self-stretch border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#000] w-full text-[1rem] bg-[#fff] focus:outline-none focus:border-[#00000029]"
    />
  )
}
