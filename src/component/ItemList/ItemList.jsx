import React, {useEffect, useState} from 'react';
import {Item} from "../Item/Item";

export const Productos =  [
    {id: 0, titulo:'Axe', descripcion:'Chocolate'},
    {id: 1, titulo:'Axe', descripcion:'Vainilla'},
    {id: 2, titulo:'Axe', descripcion:'Street'},
    {id: 3, titulo:'Axe', descripcion:'Black'},
    {id: 4, titulo:'Axe', descripcion:'Canela'},
    {id: 5, titulo:'Axe', descripcion:'Chicito'}
]

export const ItemList = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const [loading, setLoading] = useState(true);


    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Productos)
        }, 2000)
    })

    useEffect(()=>{
        getProducts
            .then((respuesta)=> setListaProductos(respuesta))
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false))
    },[])

    console.log(getProducts);
    console.log(listaProductos);
    return (
        <div>
            <h1>Lista de Cokemones</h1>
            {loading ? <p>Cargando...</p> : listaProductos.map((Productos) => {return (<Item {...Productos} key={Productos.id}/>)})}
        </div>
    )
}