import React from 'react';
import { Product, Search } from './index';
import { StyledProductListSection, StyledProductListDiv } from './style';
import { Data } from './Data';

const ProductList = () => {
    return(
        <StyledProductListSection>
            <Search />
            <StyledProductListDiv>
            {Data().map(strain => {
                return <Product strain={strain} key={strain.key} />
            })}
            </StyledProductListDiv>
        </StyledProductListSection>
    )
}

export default ProductList;