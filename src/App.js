import './App.css';
import {NavBar} from './component/NavBar/NavBar';
import {ItemListContainer} from './component/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings={"Hola, Este es mi desafio :D"}/>
    </div>
  );
}

export default App;
