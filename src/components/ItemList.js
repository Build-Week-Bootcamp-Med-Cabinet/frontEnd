import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemList (props) {
    function routeToItem(e, item) {
        e.preventDefault();
        props.history.push(`/item-list/${item.id}`);
    }
    return (
        <div className='item-list-container'>
            {props.items.map(item => (
                <div
                onClick={e => routeToItem (e, item)}
                className='item-card'
                key={item.id}
                >
                <img
                className='item-list-img'
                src={item.imgurl}
                alt={item.name}
                />
                <p>{item.name}</p>
                <p>{item.price}</p>
                </div>
            ))}
        </div>
    )
}