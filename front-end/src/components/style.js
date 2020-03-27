import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Header Styles

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    height: 50px;
    position: fixed;
    width: 100%;
    background-color: white;
    @media (min-width: 1280px) {
        height: 75px;
    }
`;

export const StyledImg = styled.img`
    width: 50px;
    padding: 3px 0;
    @media (min-width: 640px) {
        padding: 3px 25px;
    }
    @media (min-width: 1280px) {
        width: 75px;
        padding: 10px 25px;
    }
    @media (min-width: 1920px) {
        padding: 10px 60px;
    }
`;

export const StyledUser = styled(StyledImg)`
    
`;

export const StyledNavUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    border-bottom: 1px solid #a98c6a;
`;

export const StyledNavLink = styled(NavLink)`
    display: block;
    text-decoration: none;
    color: #7c6a53;
    height: 35px;
    min-width: 100px;
    text-align: center;
    padding-top: 15px;
    font-size: 16px;
    @media (min-width: 1280px) {
        height: 45px;
        padding-top: 30px;
        font-size: 24px;
    }
`;

export const StyledNavLinkActive = {
    backgroundColor: "#7c6a53",
    color: "#c3d4ad"

}

// Home Styles

export const StyledHomeSection = styled.section`
    color: red;
`;

// ProductList Styles

export const StyledProductListSection = styled.section`
    color: green;
    min-height: 100vh;
    padding: 75px 10px 25px 10px;
    @media (min-width: 1280px) {
        padding-top: 100px;
    }
`;

export const StyledProductListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

// Product Styles

export const StyledProductDiv = styled.div`
    width: 40%;
    margin: 25px 0;
    background-color: #7c6a53;
    color: #e1e9eb;
    border-bottom: 5px solid #a98c6a;
    border-right: 1px solid #a98c6a;
    border-left: 1px solid #a98c6a;
    @media (min-width: 1280px) {
        width: 30%;
    }
    @media (min-width: 1920px) {
        width: 20%;
    }
`;

export const StyledProductInfoDiv = styled.div`
    padding: 1pc;
`;

export const StyledProductImg = styled.img`
    width: 100%;
`;

export const StyledProducth3 = styled.h3`
    margin-top: 0;
`;

export const StyledRatingP = styled.p`
    margin: 0;
`;

// Search Styles

export const StyledSearchErrorP = styled.p`
    color: red;
    font-family: 'Times New Roman';
    font-size: 12px;
`;