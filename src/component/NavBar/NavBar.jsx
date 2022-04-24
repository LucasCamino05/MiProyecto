import './NavBar.css';
import { useContext } from 'react';
import { ImgCart } from './ImgCart.js';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const NavBar = () => {
  const { contadorCarrito } = useContext(CartContext);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div>
        <Link to={'/'} className='LogoEmprendimiento'>Como en Casa</Link>
      </div>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'></button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to={`/home`} className='nav-link'>Inicio</Link>
          </li>
          <li className='nav-item active'>
            <Link to={`/store`} className='nav-link'>Tienda</Link>
          </li>
          <li className='nav-item active'>
            <Link to={`/store/categoria/Entrada`} className='nav-link'>Entradas</Link>
          </li>
          <li className='nav-item active'>
            <Link to={`/store/categoria/Principal`} className='nav-link'>Principales</Link>
          </li>
          <li className='nav-item active'>
            <Link to={`/store/categoria/Postre`} className='nav-link'>Postres</Link>
          </li>
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          <div>
            <input className='form-control mr-sm-2' type='search' placeholder='Buscar' aria-label='Buscar'/>
            <button className='btn btn-dark my-2 my-sm-0 rounded-0' type='submit'>Buscar</button>
            {<Link to={'/cart'} className='contadorCarritoStyle'><ImgCart/>{ contadorCarrito }</Link>}
          </div>
        </form>
      </div>
    </nav>
  )
}