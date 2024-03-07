import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ErrorMsg from '../../components/ErrorMsg';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, []);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', data, {
        headers: { 'Content-Type': 'application/json' },
      });

      const token = response.data.token;
      console.log(response);
      console.log(token);

      if (token) {
        localStorage.setItem('token', token);
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError('Waiting for server response. Please try again.');
      }
    }
  };

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        setError('');
      }, 2000); // 2000 milliseconds = 2 seconds
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  return (
    <div className='login-form-container'>
      <form className='login-form' onSubmit={loginUser}>
        <h1>Login to your account</h1>

        <div className='login-field-container'>
          {error && <ErrorMsg message={error} />}
          <label>Email</label>
          <input
            type='text'
            placeholder='Please enter your email'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>Password</label>
          <input
            type='password'
            placeholder='Please enter your password'
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Link to='/forgot-password' id='forgot-pass'>
            <small>Forgot Password</small>
          </Link>
        </div>

        <div className='login-button-container'>
          <button type='submit'>Login</button>
          <p>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
