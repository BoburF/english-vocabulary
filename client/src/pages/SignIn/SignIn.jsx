import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchLogin } from '../../scripts/fetchApi';
import useToken from '../../scripts/useToken';
import './SignIn.scss';

const SignIn = () => {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, seterrorPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { token, setToken } = useToken();
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

  async function submitHandler(e) {
    e.preventDefault();
    const data = {
      name,
      password,
    };
    console.log(data);
    await fetchLogin(data).then((res) => {
      if (res !== 'Username or password is incorrect!') {
        setToken(res);
        navigate('/user');
      } else {
        setErrorMessage(res);
      }
    });
  }

  return (
    <div className="sign_in">
      <form className="form" onSubmit={(e) => submitHandler(e)}>
        <h2 className="title">Login</h2>
        <p className="error-message">{errorMessage ? errorMessage : ''}</p>
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
        <Link className="to_sign_in" to="/sign/up">
          Register
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
