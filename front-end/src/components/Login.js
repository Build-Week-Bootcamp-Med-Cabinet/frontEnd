import React from 'react';
import { useForm } from 'react-hook-form';
import axiosWithAuth from './../utils/axiosWithAuth';

export default function Login (props) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        axiosWithAuth()
            .post('api/auth/login', data)
            .then((res) => {
                console.log(data);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/')
            })
            .catch(err => {console.error(err)});
    }
    console.log(errors);

    return (
        <>
        <h1>Welcome to Med Cabinet!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
        type="text"
        placeholder="Username"
        name="Username"
        ref={register({
            required: true,
            maxLength: 80})}
        />
        <input
        type="password"
        placeholder="Password"
        name="Password"
        ref={register({
            required: true,
            max: 10,
            min: 5,
            maxLength: 100})}
        />
        <input type="submit" />
        </form>
        </>
    );
    }
