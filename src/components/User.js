import React, { useContext, useEffect } from 'react';
import { match } from 'react-router-dom';
import user from '../assets/user-brown.svg';
import { StyledUser } from './style';
import userContext from './../contexts/index';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios'

const User = (props) => {

    useEffect(() => {
        axios
        .get('https://med-cabinet-development.herokuapp.com/api/user/')
        .then((res) => {
            console.log(res.data);
        })
        .catch(err => {console.error(err)})
    })

    return(
        <userContext.Provider value={{ }} >
        <StyledUser src={user} alt="user" />

        <div>

        </div>
        </userContext.Provider>
    )
}

export default User;