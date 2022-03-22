import React, {useEffect, useState} from 'react';
import { Item } from "../Item/Item";
import { motion } from 'framer-motion';


/* export const Productos =  [
    {id: 0, titulo:'Axe', descripcion:'Chocolate'},
    {id: 1, titulo:'Axe', descripcion:'Vainilla'},
    {id: 2, titulo:'Axe', descripcion:'Street'},
    {id: 3, titulo:'Axe', descripcion:'Black'},
    {id: 4, titulo:'Axe', descripcion:'Canela'},
    {id: 5, titulo:'Axe', descripcion:'Chicito'}
] */

export const ItemList = ({Productos}) => {

    return(
        <div>
            {Productos.map((Producto) =>{return (<Item {...Producto} key={Producto.id}/>)})}
        </div>
    )
}