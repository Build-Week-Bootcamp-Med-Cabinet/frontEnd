import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './style';

const Header = () => {
    return(
        <StyledHeader>
            <h1>Header's Header</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/productlist">Products</Link></li>
            </ul>
        </StyledHeader>
    )
}

export default Header;