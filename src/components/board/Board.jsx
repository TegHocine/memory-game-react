import React, { useState } from 'react'

import BoardElement from '../board-elements/BoardElement'

import { board } from '../../data/DataM'

const Board = () => {
  const [memory, setMemory] = useState(board.sort(() => Math.random() - 0.5))
  const [prev, setPrev] = useState(-1)

  const check = (current) => {
    if (memory[current].id === memory[prev].id) {
      memory[prev].state = 'correct'
      memory[current].state = 'correct'
      setMemory([...memory])
      setPrev(-1)
    } else {
      memory[prev].state = 'wrong'
      memory[current].state = 'wrong'
      setMemory([...memory])
      setPrev(-1)

      setTimeout(() => {
        memory[prev].state = ''
        memory[current].state = ''
        setMemory([...memory])
        setPrev(-1)
      }, 1000)
    }
  }
  const handleClick = (id) => {
    if (prev === -1) {
      memory[id].state = 'active'
      setMemory([...memory])
      setPrev(id)
    } else {
      check(id)
    }
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
