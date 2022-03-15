import React, {useEffect, useState} from 'react';
import {Item} from "../Item/Item";

export const ItemList = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const Productos = [
        {id: 0, title:'Axe', descripcion:'Chocolate'},
        {id: 1, title:'Axe', descripcion:'Vainilla'},
        {id: 2, title:'Axe', descripcion:'Street'},
        {id: 3, title:'Axe', descripcion:'Black'},
        {id: 4, title:'Axe', descripcion:'Canela'},
        {id: 5, title:'Axe', descripcion:'Chicito'}
    ]

    const getProducts = new Promise((resolve, reject) => {
        let condition = true;

        if (condition){
            setTimeout(() => {
                resolve(Productos)
            }, 5000)
        }
        else{
            reject('No funciono! - Error')
        }
    })
    useEffect(()=>{
        getProducts
        .then((respuesta)=> setListaProductos(respuesta))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    },[])
    console.log(getProducts);

    return (
        <div>
            <h1>Lista de Cokemones</h1>
            {loading ? <p>Cargando...</p> : listaProductos.map((Productos) => <Item card={card} producto={Productos} key={Productos.id}/>)}
        </div>
    )
}