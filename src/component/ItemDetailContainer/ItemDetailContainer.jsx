import { useEffect, useState } from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState([true]);
    const [detalleProducto, setDetalleProducto] = useState([])

    const getDetalles = new Promise((resolve, rejects)=>{
        setTimeout(
            ()=>{
                resolve(detalleProducto)
            }
        )
    })
    useEffect(() => {
        getDetail
            .then((respuesta) => setDetalleProducto(respuesta))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    })
    return
        <>
            <h1>Cargando Detalle del producto</h1>
            {loading    ? <p>Cargando...</p>
                        : detalleProducto.find((id) => {return (<ItemDetail {...Producto}/>)})}
        </> 
}