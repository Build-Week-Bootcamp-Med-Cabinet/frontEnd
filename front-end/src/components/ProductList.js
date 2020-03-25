import React from 'react';
import { Product } from './index';
import { StyledProductListSection } from './style';

const ProductList = () => {
    return(
        <StyledProductListSection>
            <h2>ProductList's Header</h2>
            <Product />
        </StyledProductListSection>
    )
}

export default ProductList;