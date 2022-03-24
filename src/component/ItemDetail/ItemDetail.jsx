import { React, Component, useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { motion } from 'framer-motion';

export const ItemDetail = ({itemId,nombre,descripcion,precio,img}) => {

    return(
        <motion.div animate={{y: 200}} transition={{duration: 2}} className='card' /* style='width: 18rem;' */>
            {/* <img src={pass} className='card-img-top' alt='Image Not Found'/> */}
            <div className='card-body itemDetail'>
                <div>
                    <img src={img} alt="Image not found"/>
                </div>
                <div>
                    <h1>{nombre}</h1>
                    <p className='card-text' style={{margin: '20px', width: '500px'}}>{descripcion}</p>
                    <ItemCount stock={20} initial={1}/>
                </div>
            </div>
        </motion.div>
    )
};