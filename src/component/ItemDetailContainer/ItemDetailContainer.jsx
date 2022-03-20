import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Productos } from '../ItemList/ItemList';

export const ItemDetailContainer = () => {
    
    const { itemId } = useParams();
    const [detalleProducto, setDetalleProducto] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const getDetalleProducto = new Promise((resolve, rejects)=>{
            setTimeout(
                ()=>{
                    resolve(Productos)
                },2000)
        })
        getDetalleProducto.then((Productos) => {
            setDetalleProducto(Productos.find((e) =>  e.id === Number(itemId)))
        })
        .finally(()=> setLoading(false))

    },[])
    console.log(detalleProducto);
    return(
        <>
            <div>
                {loading 
                ? <h1>Cargando Su Producto</h1>
                : <ItemDetail {...detalleProducto}/>}
            </div>
        </>
    )
}