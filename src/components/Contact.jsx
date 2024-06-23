import React from 'react'
import { SectionWrapper } from '../hoc/SectionWrapper'

const Contact = () => {
  return (
    <div className='w-full h-auto flex justify-center items-center'>
      <a className="bg-tertiary border-red-600 bg-red-600 h-150 w-150 p-5 rounded-lg m-auto" href="mailto:benkoshy02@gmail.com">
        Contact me
      </a>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');
