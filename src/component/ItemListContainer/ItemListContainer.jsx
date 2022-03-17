import {useState, useEffect} from "react";
import {Count} from '../ItemCount/ItemCount.jsx';
import {ItemList} from '../ItemList/ItemList';
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export const ItemListContainer = ({initial, stock, onAdd})=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ItemList/>}></Route>
                <Route path="../ItemDetailContainer/ItemDetailContainer" element={<ItemDetailContainer/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}