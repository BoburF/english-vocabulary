import { useState } from 'react';
import './SignUp.scss';
import { Link, useNavigate } from 'react-router-dom';
import { fetchRegister } from '../../scripts/fetchApi';
import useToken from '../../scripts/useToken';

const SignUp = () => {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, seterrorPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {token, setToken} = useToken();
  const navigate = useNavigate();

  const validName = () => {
    if (name.length < 5 && name.length > 1) {
      setErrorName('Character must be greater than 6');
    } else {
      setErrorName('');
    }
  };

  const validPassword = () => {
    if (password.length < 5 && password.length > 1) {
      seterrorPassword('Character must be greater than 6');
    } else {
      seterrorPassword('');
    }
  };

  async function submitHandle(e) {
    e.preventDefault();
    const data = {
      name,
      password,
    };
    localStorage.setItem('username', name);
    await fetchRegister(data)
      .then((res) => {
        if (res !== 'this user already have got') {
          setToken(res);
          navigate('/user')
        } else {
          setErrorMessage(res)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="sign_up">
      <form className="form" onSubmit={(e) => submitHandle(e)}>
        <h2 className="title">Register</h2>
        <p className="error-message">{errorMessage.toLocaleUpperCase()}</p>
        <label className="label">
          Name
          <input
            type="text"
            name="name"
            placeholder="Name..."
            required={true}
            onChange={(e) => {
              setName(e.target.value);
              validName();
            }}
          />
          <p>{errorName}</p>
        </label>
        <label className="label">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password..."
            required={true}
            onChange={(e) => {
              setPassword(e.target.value);
              validPassword();
            }}
          />
          <p>{errorPassword}</p>
        </label>
        <button>Continue</button>
        <Link className="to_sign_in" to="/sign/in">
          Login
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
