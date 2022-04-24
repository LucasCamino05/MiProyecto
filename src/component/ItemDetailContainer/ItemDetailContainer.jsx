import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getBaseDatos } from '../../utils/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

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
                setLoading(false);
            }else{
                return(
                    <p> Error 404 Product Not Found</p>
                )
            }
        }
        getData();
    },)

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