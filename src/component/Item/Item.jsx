import React, {useState} from "react"
import {ItemCount} from '../ItemCount/ItemCount';

export const Item = ({titulo, descripcion}) => {
    const [show, setShow] = useState(false)

    return(
        <>
            <div className="card">
                {/* <img src={producto.img} className="card-img-top" alt="Image Not Found"/> */}
                <div className="card-body">
                    <h1>{titulo}</h1>
                    <p className="card-text">{descripcion}</p>
                    <ItemCount stock={20} initial={1}/>
                </div>
            </div>
        </>
    )
}