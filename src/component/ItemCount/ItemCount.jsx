import { React, useState } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [inicial, setInitial] = useState(initial);

    const sumarCarrito = () => {
        if (inicial < stock){
            setInitial(inicial + 1);
        }        
    }
    const restarCarrito = () => {
        if (inicial > 0){
            setInitial(inicial - 1);
        }
    }
    const finalizarCompra = 'hidden';

    const handleFinalizaCompra = () => {
        if (initial == 1 && inicial != 0){
            finalizarCompra.css('visibility', 'visible');
            console.log('entre aca')
        }else{
            console.log('no hice nada')
        }
    }

    return(
        <div className='container'>
            <div>
                <button type='button' className='btn btn-light btn-outline-dark' onClick={restarCarrito}>  -  </button>
                <span> {inicial} </span>
                <button type='button' className='btn btn-light btn-outline-dark' onClick={sumarCarrito}>  +  </button>
            </div>
            <div className='ButtonsDivs'>
                <button type='button' className='btn btn-success btn-block' style={{margin: '20px'}} onClick={handleFinalizaCompra}>Agregar al Carrito</button>
                <div className='finalizarCompra' style={{visibility: finalizarCompra}}>
                    <button type='button' className='btn btn-success'>Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
};