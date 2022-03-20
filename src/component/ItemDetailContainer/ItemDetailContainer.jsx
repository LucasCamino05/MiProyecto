import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Productos } from '../ItemList/ItemList';

export const ItemDetailContainer = () => {
    
    const { itemId } = useParams();
    const [detalleProducto, setDetalleProducto] = useState({});

    useEffect(() => {
        const getDetalleProducto = new Promise((resolve, rejects)=>{
            setTimeout(
                ()=>{
                    resolve(Productos)
                },2000)
        })
        getDetalleProducto.then((res) => {
            setDetalleProducto(res.find((producto) =>  producto.id === itemId))
        })
    },[])

    return(
        <>
            <div>
                <h1>Cargando Detalle del producto</h1>
                <ItemDetail {...detalleProducto}/>
            </div>
        </>
    )
}