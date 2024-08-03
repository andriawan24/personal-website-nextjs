import React from 'react'

interface Param {
  text: string
}

export default function Pill(param: Param) {
  return (
    <span className='py-2 px-4 bg-color-background-pill-dark rounded-full text-color-background-dark font-semibold leading-140'>
      {param.text}
    </span>
  )
}
