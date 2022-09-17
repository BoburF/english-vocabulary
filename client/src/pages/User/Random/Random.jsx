import { useState } from 'react';
import './Random.scss'

const Random = () => {
  const [random, setRandom] = useState('')

  const Random = () => {
    console.log('mana')
    setRandom('mana')
  }

  return (
    <div className='Random'>
      <h2 className='title'>Random word your vocabulary</h2>
      <div className="random_word">
        <button title='Random word' onClick={()=>Random()}>Random</button>
        <p>{random}</p>
      </div>
    </div>
  )
}

export default Random