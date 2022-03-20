import { React, Component, useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({itemId,titulo,descripcion,precio}) => {

    return(
        <div className='card' /* style='width: 18rem;' */>
            {/* <img src={pass} className='card-img-top' alt='Image Not Found'/> */}
            <div className='card-body'>
                <h1>{titulo}</h1>
                <p className='card-text'>{descripcion}</p>
                <span></span>
                <ItemCount stock={20} initial={1}/>
            </div>
        </div>
    )
};