import React from 'react'

const BoardElement = ({ img, id }) => {
  return (
    <div className='p-4 bg-gray-700 w-full rounded-xl'>
      <img src={img} alt={id} className='' />
    </div>
  )
}

export default BoardElement
