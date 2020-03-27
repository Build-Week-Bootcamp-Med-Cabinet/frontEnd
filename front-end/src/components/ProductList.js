import React, { useState } from 'react';
import { Product, Search } from './index';
import { StyledProductListSection, StyledProductListDiv } from './style';
import { Data } from './Data';

const ProductList = () => {
    const [strains, setStrains] = useState(Data());

    const searchHandler = query => {
        setStrains(Data().filter(strain => {
            return strain.name.includes(query.search);
        }))
    }
    
    return(
        <StyledProductListSection>
            <Search search={searchHandler} />
            <StyledProductListDiv>
            {strains.map(strain => {
                return <Product strain={strain} key={strain.key} />
            })}
            </StyledProductListDiv>
        </StyledProductListSection>
    )
}

export default ProductList;