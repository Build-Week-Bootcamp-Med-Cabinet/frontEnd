import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ImageUrls = {
    HomeBg: 'https://raw.githubusercontent.com/Build-Week-Bootcamp-Med-Cabinet/marketingPage/master/img/weed-bg.jpg',
    WeedRedGreen: 'https://raw.githubusercontent.com/Build-Week-Bootcamp-Med-Cabinet/marketingPage/master/img/weedRedGreen.jpg',
    WeedHeartEyes: 'https://raw.githubusercontent.com/Build-Week-Bootcamp-Med-Cabinet/marketingPage/master/img/weedHeartEyes.jpg',
    WeedHeart: 'https://raw.githubusercontent.com/Build-Week-Bootcamp-Med-Cabinet/marketingPage/master/img/weedHeart.jpg',
    WeedCookies: 'https://raw.githubusercontent.com/Build-Week-Bootcamp-Med-Cabinet/marketingPage/master/img/weedCookies.jpg'
}

// Header Styles

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    height: 50px;
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

export const HomePageStyling = styled.div`
    margin: auto;
    background-image: url(${ImageUrls.HomeBg});
    font-family: "Roboto", sans-serif;
    color: white;
    min-height: 100vh;
`;

export const StyledHomeSection = styled.section`
    margin: auto;
    width: 80%;
`;

export const StyledBoxDiv = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const StyledImgDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledMidImage = styled.img`
    height: 300px;
    width: 300px;
    vertical-align: middle;
`;

export const StyledHomeTextCont = styled.div`
    margin: auto;
    height: 600px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

export const StyledHomeP = styled.p`
    font-size: 2rem;
    margin: 10px;
    padding: 10px;
`;

export const StyledHomeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 75px;
    border-radius: 15px;
    background-color: #a98c6a;
    color: white;
    font-size: 30px;
    margin: 10px;
`;

export const StyledBottomContDiv = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
`;



// ProductList Styles

export const StyledProductListSection = styled.section`
    color: green;
    min-height: 100vh;
    padding: 25px 10px;
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

export const StyledSearchForm = styled.form`
    display: flex;
    justify-content: center;
`;

export const StyledSearchInput = styled.input`
    border: none;
    padding: 3px 5px;
    border-bottom: 2px solid #a98c6a;
    background-color: #7c6a53;
    height: 24px;
    font-size: 16px;
    color: #e1e9eb;
    font-family: 'Lobster', cursive;
    font-weight: bold;
    &::placeholder {
        color: #e1e9eb;
    }
`;