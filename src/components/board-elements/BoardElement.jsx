import React from 'react'

const BoardElement = ({ index, img, id, state, handleClick }) => {
  const activeClass =
    state === 'active' || state === 'correct' || state === 'wrong'
      ? 'scale-100'
      : ''
  const correctClass = state === 'correct' ? 'bg-teal-700' : ''
  const wrongClass = state === 'wrong' ? 'bg-red-700' : ''

  return (
    <div
      className={`p-4 bg-gray-700 w-full rounded-xl ${wrongClass} ${correctClass}`}
      onClick={() => handleClick(index)}>
      <img
        src={img}
        alt={id}
        className={`scale-0 animate-scale transition-all duration-1000 ${activeClass}`}
      />
    </div>
  )
}

export default BoardElement
