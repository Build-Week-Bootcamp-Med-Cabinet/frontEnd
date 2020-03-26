import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Header Styles

export const StyledHeader = styled.header`
    color: blue;
    display: flex;
    justify-content: space-between;
    height: 10vh;
    border-bottom: 1px solid black;
`;

export const StyledImg = styled.img`
    width: 10vh;
`;

export const StyledUser = styled(StyledImg)`
    padding: 10px;
    color: #12a324;
`;

export const StyledNavUl = styled.ul`
    list-style: none;
    display: flex;
    width: 80vh;
    justify-content: space-around;
    align-items: center;
`;

export const StyledNavLink= styled(NavLink)`
    text-decoration: none;
`;

// Home Styles

export const StyledHomeSection = styled.section`
    color: red;
`;

// ProductList Styles

export const StyledProductListSection = styled.section`
    color: green;
`;

// Product Styles

export const StyledProductDiv = styled.div`
    color: orange;
`;