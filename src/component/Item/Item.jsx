import { React } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Item.css'

export const Item = ({id, precio, nombre, imagen, descripcion, stock}) => {
    return(
        <>
            <motion.div className='container-fluid' animate={{y: 16}} transition={{duration: 1.5}}>            
                <div className="itemCards">
                    <div className="Prod__Div">
                        <img src={imagen} className="card-img-top" alt="Not Found"/>
                    </div>
                    <div className="CardBody">
                        <h1 style={{textDecoration: 'underline'}}>{nombre}</h1>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text">disponible: {stock}</p>
                        <p className="card-text">Precio: ${precio}</p>   
                        <Link to={`/detail/${id}`}> <button type="button" className="btn btn-primary btn-large" style={{margin: '5px'}}> Detalles </button></Link>
                    </div>
                </div>
            </motion.div>
        </>
    )
}