import React from 'react';
import { HomePageStyling, StyledHomeSection, StyledBoxDiv, StyledImgDiv, StyledHomeTextCont, StyledHomeP, StyledMidImage, StyledHomeButton, StyledBottomContDiv, ImageUrls } from './style';

const Home = () => {
    return(
        <HomePageStyling>
        <StyledHomeSection>
            <StyledBoxDiv>
                <StyledImgDiv>
                <StyledMidImage
                    src={ImageUrls.WeedRedGreen}
                    alt="Weed"
                />
                </StyledImgDiv>
                <StyledHomeTextCont>
                <h1>Med Cabinet</h1>
                <StyledHomeP>
                    At Med Cabinet we aim to provide all of our patients with only the
                    finest quality medication.
                </StyledHomeP>
                <StyledHomeButton>Open&nbsp;Cabinet</StyledHomeButton>
                <h3>Matching your ideal strain, just for you!</h3>
                </StyledHomeTextCont>
            </StyledBoxDiv>
            </StyledHomeSection>
            <StyledBottomContDiv>
            <StyledBoxDiv>
                <img
                src={ImageUrls.WeedHeartEyes}
                width="250px"
                alt="Weed Heart Eyes"
                />
            </StyledBoxDiv>
            <StyledBoxDiv>
                <img
                src={ImageUrls.WeedHeart}
                width="250px"
                alt="Weed Heart"
                />
            </StyledBoxDiv>
            <StyledBoxDiv>
                <img
                src={ImageUrls.WeedCookies}
                width="250px"
                alt="Weed Cookies"
                />
            </StyledBoxDiv>
            </StyledBottomContDiv>
            </HomePageStyling>
    )
}

export default Home;