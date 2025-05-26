'use client'

import { useState } from 'react'
import FilledStandardButton from '../components/FilledStandardButton'

export default function ContactUsSection() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccess(false)
    setError(false)

    const formData = new FormData(e.target)
    formData.append('access_key', 'dbd256a5-73eb-4bce-9e3d-030758e39866')

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()

    if (data.success) {
      setSuccess(true)
      e.target.reset() // очистка формы
    } else {
      setError(true)
    }
  }

  return (
    <section
      className="flex py-[3.5rem] items-start gap-[6rem] self-stretch scroll-mt-[6rem]"
      id="contact"
    >
      <div className="self-stretch w-full">
        <h2 className="text-[#1E1B28] font-[Roboto_Serif_Bold] text-[2.5rem] font-[700] leading-[3.25rem]">
          Contact Us
        </h2>
        <p className="self-stretch text-[#000] font-[Inter_Var] text-[1.25rem] font-[400] leading-[2rem] tracking-[-0.00625rem]">
          Get in touch with our team for more information or to schedule a<br />
          tour.
        </p>
      </div>
      {/* <div className="w-full"> */}
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col items-start gap-[1.5rem] w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex items-start gap-[1.5rem] self-stretch">
          {/* <input
            type="hidden"
            name="access_key"
            value="dbd256a5-73eb-4bce-9e3d-030758e39866"
          /> */}
          <div className="flex items-end gap-[1.5rem] self-stretch">
            <div className="flex flex-col items-start gap-[0.25rem] flex-[1_0_0]">
              <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[#000] font-[400] leading-[-0.00375rem]">
                First name
              </p>
              <input
                className="flex p-[1rem] items-center gap-[0.5rem] flex-[1_0_0] border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#0000005c] text-[1rem] bg-[#fff]"
                placeholder="First name"
                type="text"
                name="name"
                id="name"
                required
              ></input>
            </div>
            <div className="flex flex-col items-start gap-[0.25rem] flex-[1_0_0]">
              <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[#000] font-[400] leading-[-0.00375rem]">
                Last name
              </p>
              <input
                className="flex p-[1rem] items-center gap-[0.5rem] flex-[1_0_0] border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#0000005c] text-[1rem] bg-[#fff]"
                placeholder="Last name"
                type="text"
                name="surname"
                id="surname"
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[0.25rem] self-stretch">
          <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[#000] font-[400] leading-[-0.00375rem]">
            Email
          </p>
          <input
            className="flex p-[1rem] items-center gap-[0.5rem] self-stretch border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#0000005c] w-full text-[1rem] bg-[#fff]"
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            required
          ></input>
        </div>
        <div className="flex flex-col items-start gap-[0.25rem] self-stretch">
          <p className="self-stretch overflow-hidden text-ellipsis font-[Inter_Var] text-[#000] font-[400] leading-[-0.00375rem]">
            Placeholder
          </p>
          <textarea
            className="flex p-[1rem] items-start gap-[0.5rem] self-stretch border-[2px] rounded-[0.75rem] border-solid border-[#00000029] text-[#0000005c] text-[1rem] bg-[#fff] min-h-[7.75rem]"
            placeholder="Placeholder"
            name="message"
            id="message"
            required
          ></textarea>
        </div>
        <FilledStandardButton title="Submit" type="submit" />
        {success && (
          <p className="text-green-600 mt-4">Message sent successfully!</p>
        )}
        {error && (
          <p className="text-red-600 mt-4">
            Something went wrong. Please try again later.
          </p>
        )}
      </form>

      {/* </div> */}
    </section>
  )
}
