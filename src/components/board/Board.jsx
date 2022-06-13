import React, { useState } from 'react'

import BoardElement from '../board-elements/BoardElement'

import { board } from '../../data/DataM'

const Board = () => {
  const [memory, setMemory] = useState(board.sort(() => Math.random() - 0.5))
  const [prev, setPrev] = useState(null)

  const handleClick = (id) => {
    memory[id].state = 'active'
    setMemory([...memory])
  }
  return (
    <div className='w-full max-w-xl p-4'>
      <div className='grid grid-cols-auto gap-2 grid place-content-center'>
        {memory.map((board, i) => (
          <BoardElement
            key={i}
            index={i}
            img={board.img}
            id={board.id}
            state={board.state}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  )
}

export default Board
