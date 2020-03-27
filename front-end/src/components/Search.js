import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledSearchForm, StyledSearchInput } from './style';

const Search = (props) => {
    const onSubmit = data => {
        console.log(data)
        props.search(data);
    }

    const { register, handleSubmit } = useForm();
    return(
        <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
            <StyledSearchInput name="search" id="search" placeholder="Search" ref={register} />
        </StyledSearchForm>
    )
}

export default Search;