import { React } from "react";
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import { motion } from 'framer-motion';
import './Item.css'

export const Item = ({id, nombre, imagen, descripcion, stock}) => {
    return(
        <>
            <motion.div className='container-fluid' animate={{y: 50}} transition={{duration: 1}}>            
                <div className="itemCards">
                    <div className="Prod-Div">
                        <img src={imagen} className="card-img-top" alt="Not Found"/>
                    </div>
                    <div className="card-body CardBody">
                        <h1 style={{textDecoration: 'underline'}}>{nombre}</h1>
                        <p className="card-text">{descripcion}</p>
                        <Link to={`/detail/${id}`}>Detalle</Link>
                        <ItemCount stock={stock} initial={1}/>
                    </div>
                </div>
            </motion.div>
        </>
    )
}