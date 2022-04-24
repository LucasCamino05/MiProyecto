import { React, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { motion } from 'framer-motion';

export const Cart = () => {

    const { cart, totalCart, emptyCart, eliminarDeCarrito } = useContext(CartContext);

    if(cart.length === 0){
        return(
            <motion.div animate={{y: '33.5%'}} transition={{duration: 1}} style={{height: '84.3vh'}}>
                <div className='card-header'>
                    ¡Finalizar Compra!
                </div>
                <div className='card-body'>
                    <h1 className='card-title'>¡Tu Carrito esta Vacio!</h1>
                    <hr/>
                    <Link to={'/store'}><button type='button' className='btn CartButtons' style={{backgroundColor: 'rgb(250,87,51)'}}>Visita Nuestro Menú</button></Link>
                </div>
            </motion.div>
        )
    }
    else{
        return (
            <>
                <div className='PadreCarrito'>
                    <div style={{marginRight: '100vh'}}>
                    {
                        cart.map((prod) => (
                            <div className='cardProductoCarrito' key={prod.id}>
                                <div className='CardProductoStyle' style={{width: '18rem'}} key={prod.id}>
                                    <div>
                                        <img src={prod.imagen} className='ImagenCart' alt='Not Found'/>
                                    </div>
                                    <div className='CardBodyDescription'>
                                        <div className='CardDescriptionText'>
                                            <h3>{prod.nombre}</h3>
                                            <p>{prod.descripcion}</p>
                                            <p>Cantidad: {prod.cantidad}</p>
                                            <p>Precio:${prod.precio * prod.cantidad}</p>
                                        </div>
                                        <div>
                                            <button type='button' className='btn btn-danger' onClick={() => eliminarDeCarrito(prod)} style={{marginLeft: '7.5vh'}}>Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div style={{marginLeft: '10vh'}}>
                        <button type='button' className='btn btn-danger CartButtons' onClick={emptyCart}>Vaciar carrito</button>
                        <p className='TotalAPagar'> TOTAL A PAGAR: ${totalCart()} </p>
                        <Link to={'/cart/form'}><button type='button' className='btn CartButtons' style={{backgroundColor: 'rgb(250,87,51)'}}>Finalizar compra</button></Link>
                    </div>
                </div>
            </>
        )
    }
}

