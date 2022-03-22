import { React, Component, useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { motion } from 'framer-motion';

export const ItemDetail = ({itemId,titulo,descripcion,precio}) => {

    return(
        <motion.div animate={{y: 200}} transition={{duration: 2}} className='card' /* style='width: 18rem;' */>
            {/* <img src={pass} className='card-img-top' alt='Image Not Found'/> */}
            <div className='card-body'>
                <h1>{titulo}</h1>
                <p className='card-text'>{descripcion}</p>
                <span></span>
                <ItemCount stock={20} initial={1}/>
            </div>
        </motion.div>
    )
};