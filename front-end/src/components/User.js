import React from 'react';
import user from '../assets/user.svg';
import { StyledUser } from './style';

const User = (props) => {
    return(
        <StyledUser src={user} alt="user" />
    )
}

export default User;