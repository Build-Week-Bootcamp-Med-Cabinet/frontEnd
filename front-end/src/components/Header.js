import React from 'react';
import { User } from './index';
import logo from '../assets/isolated-monochrome-brown.svg';
import { StyledHeader, StyledNavUl, StyledImg, StyledNavLink, StyledNavLinkActive } from './style';
import axios from 'axios';

const Header = () => {
    axios.get('https://med-cabinet-development.herokuapp.com/api/user')
        .then(response => console.log(response))
        .catch(err => console.log(err))

    return(
        <StyledHeader>
            <StyledImg src={logo} alt="logo" />
            <StyledNavUl>
                <li><StyledNavLink exact to="/" activeStyle={StyledNavLinkActive}>Home</StyledNavLink></li>
                <li><StyledNavLink to="/productlist" activeStyle={StyledNavLinkActive}>Products</StyledNavLink></li>
            </StyledNavUl>
            <User />
        </StyledHeader>
    )
}

export default Header;