import { Item } from "../Item/Item";

export const ItemList = ({Productos}) => {

    return(
        <div>
            {Productos.map((Producto, number) =>{ return (<Item {...Producto} key={number}/>)})}
        </div>
    )
}