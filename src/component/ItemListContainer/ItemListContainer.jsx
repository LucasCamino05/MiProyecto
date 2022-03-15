import {useState, useEffect} from "react";
import {Count} from '../ItemCount/ItemCount.jsx';
import {ItemList} from '../ItemList/ItemList';
import {useFetch} from '../DataCall/DataCall';

export const ItemListContainer = ({initial, stock, onAdd})=>{
    const URLJSON = '../DataBase/Json/Datos';
    const data = useFetch(URLJSON);

    return(
        <>
            <div>
                <h1>
                    {nombre}
                </h1>
            </div>
        </>
    )
}