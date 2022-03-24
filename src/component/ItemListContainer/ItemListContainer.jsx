import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import  URLJSON from '../database/DataBase.JSON';

export const ItemListContainer = ()=>{
    const [productos, setProductos] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const { type } = useParams();

    /* llamada al json */
    const getProductos = () => {
        fetch(URLJSON)
            .then(response => response.json())
            .then(data => {
                setProductos(data);
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
    }

    useEffect(() => {
        setTimeout(() => {
            getProductos();
        }, 500);
    },[])

    console.log(productos)

    return(
        <div>
            {loading
                ? <h1>Cargando sus productos</h1>
                : (<motion.div animate={{y: 20}}> <ItemList Productos={productos}/> </motion.div>)}
        </div>
    )
}