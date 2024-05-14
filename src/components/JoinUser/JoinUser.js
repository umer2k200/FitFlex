import React, { useState } from 'react';
import './JoinUser.css';

function JoinUser({ onBack, onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        bodyWeight: '',
        goal: 'Gain'
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
            const response = await fetch('http://localhost:4000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('User registered successfully:', data);
            onSubmit();
            return data; // Optionally return data if needed

        } catch (error) {
            console.error('Error registering user:', error.message);
            throw error;
        }
    };

    return (
        <div className='Form-container' id='form-container'>
            <button className="btn btn-back" onClick={onBack}>Back</button>
            <span>Register</span>
            <form className="joinuser-form" onSubmit={handleSubmit}>
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

                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter your Email address'
                    value={formData.email}
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

                <label htmlFor='age'>Age:</label>
                <input
                    type='number'
                    id='age'
                    name='age'
                    placeholder='Enter your Age'
                    value={formData.age}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='bodyweight'>Body Weight:</label>
                <input
                    type='number'
                    id='bodyWeight'
                    name='bodyWeight'
                    placeholder='Enter your Body Weight'
                    value={formData.bodyWeight}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='goal'>Goal:</label>
                <select
                    name='goal'
                    id='goal'
                    value={formData.goal}
                    onChange={handleChange}
                    required
                >
                    <option value='gain'>Gain</option>
                    <option value='maintain'>Maintain</option>
                    <option value='lose'>Lose</option>
                </select>

                <button type='submit' className="btn btn-f">Join</button>
            </form>
        </div>
    );
}

export default JoinUser;
