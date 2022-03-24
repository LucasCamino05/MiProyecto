import './NavBar.css';
import {Cart} from './Cart.js';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <Link to={'/'} className='LogoEmprendimiento'> Como en Casa</Link>
      </div>
      {/* <a className="navbar-brand" href="#">Como en casa</a> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={`/`} className='nav-link'>Inicio</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <div>
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
            <button className="btn btn-dark my-2 my-sm-0 rounded-0" type="submit">Buscar</button>
            <a href="#" className='nav-link'><Cart/></a>
          </div>
        </form>
      </div>
    </nav>
  )
}
/* estructuring */
/* estados y ciclos de vida */