import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getBaseDatos } from '../../utils/firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import  URLJSON from '../database/DataBase.JSON';

export const ItemDetailContainer = () => {
    
    const { itemId } = useParams();
    const [detalleProducto, setDetalleProducto] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async() => {
            const query = collection(getBaseDatos, 'Items');
            const response = await getDocs(query);
            const dataItems = response.docs.map(doc => {return {id: doc.id, ...doc.data()}});
            if (dataItems) {
                setDetalleProducto(dataItems.find((e) => e.id === itemId));
                console.log('esto es del console.log de detalles',detalleProducto);
                setLoading(false);
            }else{

                /* setProductos(data); */
            }
        }
        getData();
    },[])
    
/*     const getDetalleProducto = () => {
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
    },[]) */

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