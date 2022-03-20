import './App.css';
import {NavBar} from './component/NavBar/NavBar';
import {ItemListContainer} from './component/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './component/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      {/* <ItemListContainer greetings={"Hola, Este es mi desafio :D"}/> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/detail/:itemId' element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
