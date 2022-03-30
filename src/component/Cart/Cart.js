import { React, useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { motion } from 'framer-motion';

export const Cart = () => {

    const { cart } = useContext(CartContext);
    
    if(cart.length === 0){
        return(
            <motion.div animate={{y: '50%'}} transition={{duration: 1}} className='card text-center'>
                <div className='card-header'>
                    ¡Finalizar Compra!
                </div>
                <div className='card-body'>
                    <h1 className='card-title'>¡Tu Carrito esta Vacio!</h1>
                    <hr/>
                    <Link to={'/'}><button type='button' className='btn btn-outline-primary'>Visita Nuestro Menú</button></Link>
                </div>
            </motion.div>
        )
    }
    else{
        return (
            <>
                {
                    cart.map((prod) => (
                        <div>
                            <div className='card' style={{width: '18rem'}} key={prod.id}>
                                <img src={prod.img} className='card-img-top' alt='Not Found'/>
                                <div className='card-body'>
                                    <h3>{prod.nombre}</h3>
                                    <p className='card-text'>{prod.descripcion}</p>
                                    <p className='card-text'>${prod.precio * prod.cantidad}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}