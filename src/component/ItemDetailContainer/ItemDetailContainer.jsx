import { useContext, useEffect, useState } from "react";
import { resolvePath, useParams } from "react-router-dom";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import  URLJSON from '../database/DataBase.JSON';
import { CartContext } from "../context/CartContext";

export const ItemDetailContainer = () => {
    
    const { itemId } = useParams();
    const [detalleProducto, setDetalleProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const CartingContext = useContext(CartContext)
    
    console.log(CartingContext);

    const getDetalleProducto = () => {
        fetch(URLJSON)
            .then(response => response.json())
            .then(data => {
                setDetalleProducto(data.find((e) => e.id === Number(itemId)))

            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
    }
    useEffect(() => {
        setTimeout(
            () => {
                getDetalleProducto();
            },500)
    },[])

    /* console.log(detalleProducto); */
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