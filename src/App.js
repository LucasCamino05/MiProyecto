import './App.css';
import {NavBar} from './component/NavBar/NavBar';
import {ItemListContainer} from './component/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './component/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { Cart } from './component/Cart/Cart';
import { Form } from './component/Form/Form';
import { Title } from './component/Title/Title';
import { Footer } from './component/Footer/Footer';
import { Error404 } from './component/Error404/Error404';

function App() {

  return (
    <div className="App">
      <CartProvider>    
        <BrowserRouter>

          <NavBar/>
        
          <Routes>
            <Route path='/' element={<Title/>}></Route>
            <Route path='/home' element={<Title/>}></Route>
            <Route path='/store' element={<ItemListContainer />}></Route>
            <Route path='/store/categoria/:categoryId' element={<ItemListContainer />}></Route>
            <Route path='/store/detail/:itemId' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path="/cart/form" element={<Form/>}/>
            <Route path='*' element={<Error404 />}></Route>   
          </Routes>
          
          <Footer/>
          
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
