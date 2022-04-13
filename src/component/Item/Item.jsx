import { React } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Item.css'

export const Item = ({id, nombre, imagen, descripcion, stock}) => {
    return(
        <>
            <motion.div className='container-fluid' animate={{y: 50}} transition={{duration: 1}}>            
                <div className="itemCards">
                    <div className="Prod__Div">
                        <img src={imagen} className="card-img-top" alt="Not Found"/>
                    </div>
                    <div className="CardBody">
                        <h1 style={{textDecoration: 'underline'}}>{nombre}</h1>
                        <p className="card-text">{descripcion}</p>
                        <Link to={`/detail/${id}`}> <button type="button" className="btn btn-primary btn-large" style={{margin: '5px'}}> Detalles </button></Link>
                        {/* <ItemCount stock={stock} initial={1}/> */}
                    </div>
                </div>
            </motion.div>
        </>
    )
}