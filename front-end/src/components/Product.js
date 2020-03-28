import React from 'react';
import { StyledProductDiv, StyledProductImg, StyledProductInfoDiv, StyledProducth3, StyledRatingP } from './style';

const Product = (props) => {
    return(
        <StyledProductDiv>
            <StyledProductImg src={props.strain.image} />
            <StyledProductInfoDiv>
                <StyledProducth3>{props.strain.name}</StyledProducth3>
                <StyledRatingP>{props.strain.rating}</StyledRatingP>
            </StyledProductInfoDiv>
        </StyledProductDiv>
    )
}

export default Product;