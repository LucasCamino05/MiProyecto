import './App.css';
import {NavBar} from './component/NavBar/NavBar';
import {ItemListContainer} from './component/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './component/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';

function App() {

  return (
    <div className="App">

      <CartContext>      
        
        <BrowserRouter>
        
          <NavBar />
        
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/categoria/:categoryId' element={<ItemListContainer />}></Route>
            <Route path='/detail/:itemId' element={<ItemDetailContainer />}></Route>
          </Routes>
        
        </BrowserRouter>
      
      </CartContext>

    </div>
  );
}

export default App;
