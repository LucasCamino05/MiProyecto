import { React, useState } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [cantidad, setInitial] = useState(initial);
    const sumarCarrito = () => {
        if (cantidad < stock){
            setInitial(cantidad + 1);
        }        
    }
    const restarCarrito = () => {
        if (cantidad > 0){
            setInitial(cantidad - 1);
        }
    }

    return(
        <div className='container'>
            <div>
                <button type='button' className='btn btn-outline-dark' onClick={restarCarrito}>  -  </button>
                <span> {cantidad} </span>
                <button type='button' className='btn btn-outline-dark' onClick={sumarCarrito}>  +  </button>
            </div>
            <div className='ButtonsDivs'>
                <button type='button' className='btn CartButtons' style={{margin: '20px', backgroundColor: 'rgb(250,87,51)'}} onClick={() => onAdd(cantidad,stock)}>Agregar al Carrito</button>
            </div>
        </div>
    )
};