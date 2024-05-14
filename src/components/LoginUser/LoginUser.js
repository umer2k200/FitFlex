import React, { useState } from 'react'
import './LoginUser.css'
function LoginUser({ onBack, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        alert("User login nai hua")
      }

      const data = await response.json();
      console.log('User Login successfully:', data);
      onSubmit();
      return data; // Optionally return data if needed

    } catch (error) {
      console.error('Error registering user:', error.message);
      throw error;
    }
  };

  return (
    <div className='LoginForm-container' id='loginform-container'>
      <button className="btn btn-loginback" onClick={onBack}>Back</button>
      <span>Login</span>
      <form action="" className="loginuser-form" onSubmit={handleSubmit}>
        <label htmlFor='name'>UserName:</label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Enter your Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Enter your Password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type='submit' className="btn btn-loginform">Login</button>
      </form>
    </div>
  )
}

export default LoginUser
