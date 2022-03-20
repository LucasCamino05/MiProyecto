import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import {ItemCount} from '../ItemCount/ItemCount';

export const Item = ({titulo, descripcion,id}) => {
    const [show, setShow] = useState(false)

    return(
        <>
            <div className="card">
                {/* <img src={producto.img} className="card-img-top" alt="Image Not Found"/> */}
                <div className="card-body">
                    <h1>{titulo}</h1>
                    <p className="card-text">{descripcion}</p>
                    <Link to={`../ItemDetailContainer/ItemDetailContainer/${id}`}><button>Detalle</button></Link>
                    <ItemCount stock={20} initial={1}/>
                </div>
            </div>
        </>
    )
}