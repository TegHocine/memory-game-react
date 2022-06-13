import React from 'react'

const BoardElement = ({ index, img, id, state, handleClick }) => {
  return (
    <div
      className='p-4 bg-gray-700 w-full rounded-xl'
      onClick={() => handleClick(index)}>
      <img
        src={img}
        alt={id}
        className={`scale-0 animate-scale transition-all duration-1000 ${
          state === 'active' ? 'scale-100' : ''
        }`}
      />
    </div>
  )
}

export default BoardElement
