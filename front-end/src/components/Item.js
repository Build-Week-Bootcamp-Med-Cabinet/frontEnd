import React from 'react';
import axios from 'axios';

export default function Item (props) {
    const item = props.items.find(
        thing => `${thing.id}` === props.match.params.id
    );

    const deleteItem = e => {
        e.preventDefault();
        axios
            .delete(`http://localhost:placeholderdata/items/${item.id}`)
            .then(res => {
                console.log(res);
                props.UpdateItem(res.data);
                props.history.push('item-list');
            })
            .catch(err => {
                console.error("Error in deleting data", err)
            });
    }

    if (!props.items.length || !item) {
        return <h2>Loading greenery...</h2>;
    }


}