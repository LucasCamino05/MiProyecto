import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getBaseDatos } from '../../utils/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

export const ItemListContainer = ()=>{
    const [productos, setProductos] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const getData = async() => {
            const query = collection(getBaseDatos, 'Items');
            const response = await getDocs(query);
            const dataItems = response.docs.map(doc => {return {id: doc.id, ...doc.data()}});
            if (categoryId !== undefined) {
                const productosFiltrados = dataItems.filter(e => categoryId === e.categoria);
                setProductos(productosFiltrados);
                setLoading(false);
            }else{
                setLoading(false)
                setProductos(dataItems);
            }
        }
        
        getData();
    },[categoryId])

    return(
        <div>
            {loading
                ? <h1>Cargando sus productos</h1>
                : (<motion.div animate={{y: 20}}> <ItemList Productos={productos}/> </motion.div>)}
        </div>
    )
}