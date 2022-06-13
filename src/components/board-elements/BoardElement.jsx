import React from 'react'

const BoardElement = ({ index, img, id, state, handleClick }) => {
  const activeClass =
    state === 'active' || state === 'correct' || state === 'wrong'
      ? 'scale-100'
      : 'scale-0'
  const bgColor =
    state === 'correct' ? '#0D9488' : state === 'wrong' ? '#DC2626' : '#374151'

  const style = {
    backgroundColor: bgColor
  }
  return (
    <div
      className={`p-4  w-full rounded-xl`}
      style={style}
      onClick={() => handleClick(index)}>
      <img
        src={img}
        alt={id}
        className={` animate-scale transition-all duration-1000 ${activeClass}`}
      />
    </div>
  )
}

export default BoardElement
