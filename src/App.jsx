import React, { useState } from 'react'
import { longList } from './data'
import { GrFormPrevious } from 'react-icons/gr'
import { GrFormNext } from 'react-icons/gr'
import Slide from './Slide'

const App = () => {
  const [index, setIndex] = useState(0)
  const handleClickNext = () => {
    setIndex(idx => (idx + 1) % longList.length)
  }

  const handleClickPrev = () => {
    setIndex(index => {
      let newIndex = index - 1
      if (newIndex < 0) return longList.length - 1
      return newIndex
    })
  }
  return (
    <main className='slider-container'>
      <Slide longList={longList} index={index} />

      <button className='prev' onClick={handleClickPrev}>
        <GrFormPrevious />
      </button>
      <button className='next' onClick={handleClickNext}>
        <GrFormNext />
      </button>
    </main>
  )
}
export default App
