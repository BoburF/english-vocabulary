import { useState } from 'react';
import './SignUp.scss'
import { Link } from 'react-router-dom';
import { baseUrl, fetchRegister, path } from '../../scripts/fetchApi';

const SignUp = () => {
  const [name, setName] = useState('')
  const [errorName, setErrorName] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, seterrorPassword] = useState('')

  const validName = () => {
    if(name.length < 5 && name.length > 1){
      setErrorName('Character must be greater than 6')
    }else{
      setErrorName('')
    }
  }

  const validPassword = () => {
    if(password.length < 5 && password.length > 1){
      seterrorPassword('Character must be greater than 6')
    }else{
      seterrorPassword('')
    }
  }

  async function submitHandle(e) {
    e.preventDefault();
    const data = {
      name,
      password
    }
    await fetchRegister(data)
  }

  return (
    <div className='sign_up'>
      <form className='form' onSubmit={(e) => submitHandle(e)}>
        <h2 className='title'>Sign Up</h2>
        <label className='label'>
          Name
          <input type="text" name='name' placeholder='Name...' required={true} onChange={(e) => {
            setName(e.target.value)
            validName()
          }}/>
          <p>{errorName}</p>
        </label>
        <label className='label'>
          Password
          <input type="password" name='password' placeholder='Password...' required={true} onChange={(e) => {
            setPassword(e.target.value)
            validPassword()
          }}/>
          <p>{errorPassword}</p>
        </label>
        <button>Continue</button>
        <Link className='to_sign_in' to='/sign/in'>
          Sign In
        </Link>
      </form>
    </div>
  )
}

export default SignUp