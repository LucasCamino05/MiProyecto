import React, {Component, useState} from 'react';

export const Details = (id) => {
    return(
        <div className='card' style='width: 18rem;'>
            <img src={pass} className='card-img-top' alt='Image Not Found'/>
            <div className='card-body'>
                <p className='card-text'> descripción del producto.</p>
            </div>
        </div>
    )
};