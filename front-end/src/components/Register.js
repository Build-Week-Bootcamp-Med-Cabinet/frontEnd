import React from 'react'
import { useForm } from 'react-hook-form'
import axiosWithAuth from '../utils/axiosWithAuth';

export default function Register (props) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        axiosWithAuth()
            .post('/auth/register/', data)
            .then((res) => {
                console.log(res);
                props.history.push('/profile-page')
            })
            .catch(err => {console.error(err)});
    }
    console.log(errors);

    return (
        <>
        <h1>New User?</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="First Name"
                name="firstname"
                ref={register({
                    required: true,
                    maxLength: 80})}
            />
            <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                ref={register({
                    required: true,
                    maxLength: 80})}
            />
            <input
                type="text"
                placeholder="Email"
                name="email"
                ref={register({
                    required: true,
                    maxLength: 80})}
            />
            <input
                type="text"
                placeholder="Username"
                name="username"
                ref={register({
                    required: true,
                    maxLength: 80})}
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
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
