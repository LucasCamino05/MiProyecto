import { React, useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ItemDetail = ({itemId,nombre,descripcion,precio,img,stock}) => {
    const [finalizarCompra, setFinalizarCompra] = useState(false);
    const [producto, setProducto] = useState({
        nombre: '',
        inicial: '',
        precio: '',
        id: '',
        img: '',
    })
    const onAdd = (inicial, stock) => {
        if (inicial <= stock) {
            /* console.log(`Agregaste ${inicial} producto(s) al carrito`); */
            setFinalizarCompra(true);
        }
        else{
            alert("No hay stock disponible para este producto");
        } 
    }
    return(
        <motion.div animate={{y: '5vh'}} transition={{duration: 2}} className='card' /* style='width: 18rem;' */>
            {/* <img src={pass} className='card-img-top' alt='Image Not Found'/> */}
            <div className='card-body itemDetail'>
                <div>
                    <img src={img} alt="Not Found"/>
                </div>
                <div className='cardSet'>
                    <h1 style={{textDecoration: 'underline'}}>{nombre}</h1>
                    <p className='card-text' style={{margin: '20px', width: '500px'}}>{descripcion}</p>
                    <div className='BotonesSeguirCarrito'>
                        { 
                            finalizarCompra > 0 && (
                                <div>
                                    <Link to={"/cart"}>
                                        <button type="button" className="btn btn-light btn-outline-dark" style={{margin: '5px'}}>
                                            Ir al Carrito
                                        </button>
                                    </Link>
                                </div>
                            )
                        }
                        {
                            finalizarCompra > 0 && (
                                <div>
                                    <Link to={"/"}>
                                        <button type="button" className="btn btn-light btn-outline-dark" style={{margin: '5px'}}>
                                            Seguir comprando
                                        </button>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                    {!finalizarCompra && <ItemCount stock={stock} initial={1} onAdd={onAdd}/>}
                </div>
            </div>
        </motion.div>
    )
};