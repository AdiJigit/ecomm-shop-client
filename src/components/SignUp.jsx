import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { URL } from '../App';

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rPassword, setRPassword] = useState('');

  const registerHandler = async (e) => {
    e.preventDefault();

    //check password --- retype password
    if (password !== rPassword) {
      toast.error("Password doesn't match!");
      return;
    }

    try {
      const { data } = await axios.post(`${URL}/api/users/register`, {
        username,
        email,
        password,
      });

      toast.success('You have successfully registered!');
      navigate('/login');
    } catch (error) {
      toast.error('Registration failed, please try again!');
    }
  };

  useEffect(() => {
    //check for if exists user then redirect from login to home page
    if (localStorage.getItem('userInfo')) {
      localStorage.getItem('userInfo');
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <div className="hidden sm:block">
        <div className="f-container">
          <div className="f-row">
            <div className="f-formGroups">
              <form onSubmit={registerHandler}>
                <h2 className="f-title">REGISTER</h2>
                <div className="f-formGroup">
                  <label htmlFor="username" className="f-label">
                    USERNAME
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    className="f-input"
                    required
                  />
                </div>
                <div className="f-formGroup">
                  <label htmlFor="email" className="f-label">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="f-input"
                    required
                  />
                </div>
                <div className="f-formGroup">
                  <label htmlFor="password" className="f-label">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    className="f-input"
                    required
                  />
                </div>
                <div className="f-formGroup">
                  <label htmlFor="r_password" className="f-label">
                    CONFIRM PASSWORD
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setRPassword(e.target.value)}
                    id="r_password"
                    className="f-input"
                    required
                  />
                </div>
                <div className="f-formBtn">
                  <button className="f-btn">REGISTER</button>
                </div>
                <div className="f-formOther">
                  <Link to="/login">LOGIN</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE STYLE */}
      <div className="sm:hidden">
        <div>
          <div className="px-2">
            <form onSubmit={registerHandler}>
              <h2 className="f-title">REGISTER</h2>
              <div className="f-formGroup">
                <label htmlFor="username" className="f-label">
                  USERNAME
                </label>
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  className="f-input"
                  required
                />
              </div>
              <div className="f-formGroup">
                <label htmlFor="email" className="f-label">
                  EMAIL
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="f-input"
                  required
                />
              </div>
              <div className="f-formGroup">
                <label htmlFor="password" className="f-label">
                  PASSWORD
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="f-input"
                  required
                />
              </div>
              <div className="f-formGroup">
                <label htmlFor="r_password" className="f-label">
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  onChange={(e) => setRPassword(e.target.value)}
                  id="r_password"
                  className="f-input"
                  required
                />
              </div>
              <div className="f-formBtn">
                <button className="f-btn">REGISTER</button>
              </div>
              <div className="f-formOther">
                <Link to="/login" className="text-lg tracking-widest">
                  LOGIN
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
