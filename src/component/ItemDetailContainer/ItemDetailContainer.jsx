import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Productos } from '../ItemList/ItemList';

export const ItemDetailContainer = () => {
    
    const {id} = useParams()
    const [loading, setLoading] = useState([true]);
    const [detalleProducto, setDetalleProducto] = useState({})

    const getDetail = new Promise((resolve, rejects)=>{
        setTimeout(
            ()=>{
                resolve(Productos)
            },2000)
    })

    useEffect(() => {
        getDetail
            .then((respuesta) => setDetalleProducto(respuesta))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));

        getDetail.then((detalles) => {
            const getId = detalles.find((e) => {
                return e.id === Number(id)
            })
            setDetalleProducto({getId})
        })
        
    },[id])

    return(
        <div>
            <h1>Cargando Detalle del producto</h1>
            <ItemDetail {...getDetail}/>
        </div>
    )
}