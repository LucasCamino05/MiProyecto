import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getBaseDatos } from '../../utils/firebase.js';
import { collection, getDocs } from 'firebase/firestore';
// import  URLJSON from '../database/DataBase.JSON';
// import { async } from "@firebase/util";

export const ItemListContainer = ()=>{
    const [productos, setProductos] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();


    useEffect(() => {
        const getData = async() => {
            const query = collection(getBaseDatos, 'Items');
            const response = await getDocs(query);
            //  console.log('respuesta', response);

/*             const newDoc ={
                id = doc.id,
                nombre = doc.nombre,
                precio = doc.precio,
                ...
            }
*/
            const dataItems = response.docs.map(doc => {return {id: doc.id, ...doc.data()}});
            //  console.log(dataItems);
            //  console.log(dataItems);
            if (categoryId !== undefined) {
                const productosFiltrados = dataItems.filter(e => categoryId === e.categoria);
                //console.log('esto es del console.log', productosFiltrados, ' Pd: no deberia estar acá');
                setProductos(productosFiltrados);
                setLoading(false);
            }else{
                setLoading(false)
                setProductos(dataItems);
            }
        }
        
        getData();
    },[categoryId])
/* 
    llamada al json
    const getProductos = () => {
        fetch(URLJSON)
            .then(response => response.json())
            .then(data => {
                if(categoryId){
                    const productosFiltrados = data.filter(e => categoryId === e.categoriaId);
                    setProductos(productosFiltrados);
                    console.log(productosFiltrados);
                }else{
                    setProductos(data);
                }
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
    }

    useEffect(() => {
        setTimeout(() => {
            getProductos();
        }, 500);
    },[categoryId])

    console.log(productos)
 */
    return(
        <div>
            {loading
                ? <h1>Cargando sus productos</h1>
                : (<motion.div animate={{y: 20}}> <ItemList Productos={productos}/> </motion.div>)}
        </div>
    )
}