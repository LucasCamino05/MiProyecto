import {useState, useEffect} from "react";
import {Count} from '../ItemCount/ItemCount.jsx';
import {ItemList} from '../ItemList/ItemList';
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer.jsx";

export const ItemListContainer = ({initial, stock, onAdd})=>{
    return(
        <ItemList/>
    )
}