import React from 'react';
import { useForm } from 'react-hook-form';

const Search = (props) => {
    const onSubmit = (data, e) => {
        props.search(data);
        e.target.reset();
    }

    const { register, handleSubmit } = useForm();
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="search" id="search" placeholder="Search" ref={register({ required: true })} />
        </form>
    )
}

export default Search;