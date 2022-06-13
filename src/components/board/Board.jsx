import React, { useState } from 'react'

import BoardElement from '../board-elements/BoardElement'

import { board } from '../../data/DataM'

const Board = () => {
  const [memory, setMemory] = useState(board.sort(() => Math.random() - 0.5))
  const [prev, setPrev] = useState(null)

  const handleClick = (id) => {
    if (prev === null) {
      memory[id].state = 'active'
      setMemory([...memory])
      setPrev(id)
    } else {
      check(id)
    }
  }
  const check = (current) => {
    if (memory[current].id === memory[prev].id) {
      memory[prev].state = 'correct'
      memory[current].state = 'correct'
      setMemory([...memory])
      setPrev(null)
    } else {
      memory[prev].state = 'wrong'
      memory[current].state = 'wrong'
      setMemory([...memory])
      setPrev(null)

      setTimeout(() => {
        memory[prev].state = ''
        memory[current].state = ''
        setMemory([...memory])
        setPrev(null)
      }, 1000)
    }
  }

  const playAgain = () => {
    window.location.reload(false)
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
      <div className='w-full  flex justify-center items-center'>
        <button
          className='text-white font-bold  py-1 px-4 bg-teal-700 mt-6 rounded-full'
          onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default Board
