import { React } from "react";
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import { motion } from 'framer-motion';

export const Item = ({id, nombre, img, descripcion, stock}) => {
    return(
        <>
            <motion.div className='container-fluid' animate={{y: 50}} transition={{duration: 1}}>            
                <div className="card">
                    <div className="Prod-Div">
                        <img src={img} className="card-img-top" alt="Image Not Found"/>
                    </div>
                    <div className="card-body">
                        <h1>{nombre}</h1>
                        <p className="card-text">{descripcion}</p>
                        <Link to={`/detail/${id}`}>Detalle</Link>
                        <ItemCount stock={stock} initial={1}/>
                    </div>
                </div>
            </motion.div>
        </>
    )
}