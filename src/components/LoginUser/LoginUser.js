import React from 'react'
import './LoginUser.css'
function LoginUser({onBack, onSubmit}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
  }
  return (
    <div className='LoginForm-container' id='loginform-container'>
            <button className="btn btn-loginback" onClick={onBack}>Back</button>
            <span>Login</span>
            <form action="" className="loginuser-form" onSubmit={handleSubmit}>
                <label htmlFor='user_name'>UserName:</label>
                <input type='text' id='user_name' name='user_name' placeholder='Enter your Name' required />

                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' placeholder='Enter your Password' required />

                <button type='submit' className="btn btn-loginform">Login</button>
            </form>
        </div>
  )
}

export default LoginUser
