import React, { useState } from 'react'

import BoardElement from '../board-elements/BoardElement'

import { board } from '../../data/DataM'

const Board = () => {
  const [memory, setMemory] = useState(board.sort(() => Math.random() - 0.5))
  const [prev, setPrev] = useState(null)

  const [prevId, setPrevId] = useState(null)

  const handleClick = (index, id) => {
    if (id === prevId) return
    if (memory[index].state === 'correct') return
    if (prev !== null) return check(index)

    memory[index].state = 'active'
    setMemory([...memory])
    setPrev(index)
    setPrevId(id)
  }
  const check = (current) => {
    if (memory[current].imgId !== memory[prev].imgId) {
      memory[prev].state = 'wrong'
      memory[current].state = 'wrong'
      setMemory([...memory])
      setPrev(null)
      return setTimeout(() => {
        memory[prev].state = ''
        memory[current].state = ''
        setMemory([...memory])
        setPrev(null)
      }, 500)
    }
    memory[prev].state = 'correct'
    memory[current].state = 'correct'
    setMemory([...memory])
    setPrev(null)
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
            id={board.id}
            img={board.img}
            imgId={board.imgId}
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
