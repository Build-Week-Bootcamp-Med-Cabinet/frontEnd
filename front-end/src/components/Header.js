import React from 'react';
import { User } from './index';
import logo from '../assets/isolated-layout.svg';
import { StyledHeader, StyledNavUl, StyledImg, StyledNavLink } from './style';

const Header = () => {
    return(
        <StyledHeader>
            <StyledImg src={logo} alt="logo" />
            <StyledNavUl>
                <li><StyledNavLink to="/">Home</StyledNavLink></li>
                <li><StyledNavLink to="/productlist">Products</StyledNavLink></li>
            </StyledNavUl>
            <User />
        </StyledHeader>
    )
}

export default Header;