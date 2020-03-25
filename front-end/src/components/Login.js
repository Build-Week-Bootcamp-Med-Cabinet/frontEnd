import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import axiosWithAuth from './../utils/axiosWithAuth';

export default function Login (props) {
    const [ data, setdata ] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        const value = e.target.value;
        setdata({
            ...data,
            [e.target.name]: value
        });
    };
    const login = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('http://localhost:placeholderdata', data)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/placeholderdata')
            })
    }

    return (
        <>
      <h1>Welcome to Med Cabinet!</h1>
      <form onSubmit={login}>
            <input
                type="text"
                placeholder="username"
                name="username"
                value={data.username}
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder="password"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
            <button type='submit'>Log in</button>
        </form>
    </>
    )
}