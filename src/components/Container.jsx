import React from 'react'

function Container({children}) {
  return (
    <div className='max-w-[1440px] mx-auto px-6'>{children}</div>
  )
}

export default Container;