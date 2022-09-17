import { useState } from 'react';
import './Settings.scss'

const Settings = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='Settings'>
      <h2 className='title'>User settings</h2>
      <form className='form'>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button title='Change user data'>Change settings</button>
      </form>
    </div>
  )
}

export default Settings