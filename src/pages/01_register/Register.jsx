import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ErrorMsg from '../../components/ErrorMsg';
import axios from 'axios';

import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    sex: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/register', data);
      navigate('/login');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        // Fallback error message
        setError('An error occurred. Please try again.');
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
    <div className='register-form-container'>
      <form className='register-form' onSubmit={registerUser}>
        <div className='register-header'>
          <h1>Create a new account</h1>
          <p>Add your credentials to create a new account.</p>
        </div>

        <div className='register-field-container'>
          {error && <ErrorMsg message={error} />}
          <div className='name'>
            <div className='firstname'>
              <label>First Name</label>
              <input
                type='text'
                placeholder='Enter your first name'
                value={data.firstName}
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />
            </div>

            <div className='lastname'>
              <label>Last Name</label>
              <input
                type='text'
                placeholder='Enter your last name'
                value={data.lastName}
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
              />
            </div>
          </div>

          <div className='info'>
            <div className='birthday'>
              <label>Date of Birth</label>
              <input
                type='date'
                value={data.birthday}
                onChange={(e) => setData({ ...data, birthday: e.target.value })}
              />
            </div>
            <div className='sex'>
              <label>Sex</label>
              <select
                value={data.sex}
                onChange={(e) => setData({ ...data, sex: e.target.value })}
              >
                <option value=''>Select</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
            </div>
            <div className='age'>
              <label>Age</label>
              <input
                type='number'
                value={data.age}
                onChange={(e) => setData({ ...data, age: e.target.value })}
              />
            </div>
          </div>

          <label>Email</label>
          <input
            className='reg-input'
            type='text'
            placeholder='Please enter your email'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>Password</label>
          <input
            className='reg-input'
            type='password'
            placeholder='Please enter your password'
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <label>Confirm Password</label>
          <input
            className='reg-input'
            type='password'
            placeholder='Confirm Password'
            value={data.confirmPassword}
            onChange={(e) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
          />
        </div>

        <div className='register-button-container'>
          <button type='submit' className='register-btn'>
            Submit
          </button>

          <p>
            Already registered? <Link to='/login'>Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
