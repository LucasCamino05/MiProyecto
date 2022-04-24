import { React, useContext, useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({id,nombre,descripcion,precio,imagen,stock}) => {
    const [finalizarCompra, setFinalizarCompra] = useState(false);
    const { AgregarAlCarritoCondicional } = useContext(CartContext);

    const onAdd = (cantidad, stock) => {
        if (cantidad <= stock) {
            setFinalizarCompra(true);

            const addItem = {
                id, nombre, descripcion, precio, imagen, stock, cantidad
            }
            AgregarAlCarritoCondicional(addItem,id,cantidad);
        }
        else{
            alert("No hay stock disponible para este producto");
        } 
    }
    return(
        <motion.div className='card DetailBody'>
            <div className='card-body itemDetail'>
                <div className="Prod-Div">
                    <img src={imagen} style={{width: '40vh', height: '40vh', objectFit: 'cover'}} alt="Not Found"/>
                </div>
                <div className='cardSet'>
                    <h1>{nombre}</h1>
                    <p className='card-text' style={{margin: '20px', width: '500px'}}>{descripcion}</p>
                    <p className="card-text">disponible: {stock}</p>
                    <p className="card-text">Precio: ${precio}</p>  
                    <div className='BotonesSeguirCarrito'>
                        { 
                            finalizarCompra > 0 && (
                                <div>
                                    <Link to={"/cart"}>
                                        <button type="button" className="btn Buttons" style={{margin: '5px'}}>
                                            Ir al Carrito
                                        </button>
                                    </Link>
                                </div>
                            )
                        }
                        {
                            finalizarCompra > 0 && (
                                <div>
                                    <Link to={"/store"}>
                                        <button type="button" className="btn Buttons" style={{margin: '5px'}}>
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