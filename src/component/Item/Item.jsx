import React, {useState} from "react"
import ItemCount from '../ItemCount/ItemCount';

export const Item = ({Productos}) => {
    const [show, setShow] = useState(false)

    return(
        <>
            <div className="card" style="width: 18rem;">
                <img src={Productos.img} className="card-img-top" alt="Image Not Found"/>
                <div className="card-body">
                    <p className="card-text">{Productos.descripcion}</p>
                    <ItemCount stock = {20} initial={1}/>
                </div>
            </div>
        </>
    )
}