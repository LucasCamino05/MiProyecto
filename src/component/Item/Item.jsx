import { React } from "react";
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';

export const Item = ({titulo, descripcion,id}) => {
    return(
        <>
            <div>            
                <div className="card">
                    {/* <img src={producto.img} className="card-img-top" alt="Image Not Found"/> */}
                    <div className="card-body">
                        <h1>{titulo}</h1>
                        <p className="card-text">{descripcion}</p>
                        <Link to={`/detail/${id}`}>Detalle</Link>
                        <ItemCount stock={20} initial={1}/>
                    </div>
                </div>
            </div>
        </>
    )
}