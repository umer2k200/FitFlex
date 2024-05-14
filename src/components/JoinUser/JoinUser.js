import React, { useState } from 'react'
import './JoinUser.css'
function JoinUser({onBack, onSubmit}) {

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        password: '',
        age: '',
        bodyweight: '',
        goal: 'Gain'
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit();
    }

    return (
        <div className='Form-container' id='form-container'>
            <button className="btn btn-back" onClick={onBack}>Back</button>
            <span>Register</span>
            <form action="" className="joinuser-form" onSubmit={handleSubmit}> 
                <label htmlFor='user_name'>UserName:</label>
                <input type='text' id='user_name' name='user_name' placeholder='Enter your Name' required />

                <label htmlFor='user_email'>Email:</label>
                <input type='email' id='user_email' name='user_email' placeholder='Enter your Email address' required />

                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' placeholder='Enter your Password' required />

                <label htmlFor='age'>Age</label>
                <input type='number' id='age' name='age' placeholder='Enter your Age' required />

                <label htmlFor='bodyweight'>Body Weight</label>
                <input type='number' id='bodyweight' name='bodyweight' placeholder='Enter your Body Weight' required />

                <label htmlFor='goal'>Goal</label> 
                {/* it must contain these values : 'gain, maintain, lose' */}
                <select name='goal' id='goal' required>
                    <option value='gain'>Gain</option>
                    <option value='maintain'>Maintain</option>
                    <option value='lose'>Lose</option>
                </select>

                <button type='submit' className="btn btn-f">Join</button>
            </form>
        </div>
    )
}

export default JoinUser
