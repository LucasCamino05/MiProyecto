import {Count} from '../ItemCount/ItemCount.jsx'; 

export const ItemListContainer = ({initial, stock, onAdd})=>{
        return(
            <Count initial={0} stock={6}/>
        )
}