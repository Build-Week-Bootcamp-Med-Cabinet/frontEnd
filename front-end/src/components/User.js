import React, { useContext } from 'react';
import user from '../assets/user-brown.svg';
import { StyledUser } from './style';
import userContext from './../contexts/index';

const User = (props) => {
    const { userData } = useContext(userContext);
    return(
        <userContext.Provider value={{ userData }} >
        <StyledUser src={user} alt="user" />

        </userContext.Provider>
    )
}

export default User;