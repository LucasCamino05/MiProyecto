import './App.css';
import {NavBar} from './component/NavBar/NavBar';
import {ItemListContainer} from './component/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './component/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { Cart } from './component/Cart/Cart.js';
import { Form } from './component/Form/Form.js';

function App() {

  return (
    <div className="App">

      <CartProvider>    
        <BrowserRouter>
        
          <NavBar />
        
          <Routes>

            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/categoria/:categoryId' element={<ItemListContainer />}></Route>
            <Route path='/detail/:itemId' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path="/cart/form" element={<Form/>}/>
            
          </Routes>
          
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
