import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Como en casa</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#" >Inicio <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Menú</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Carrito</a>
          </li>
        </ul>
        <form classNameName="form-inline my-2 my-lg-0">
          <div>
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
            <button className="btn btn-dark my-2 my-sm-0 rounded-0" type="submit">Buscar</button>
            <a href="#" className='nav-link'><i className='bx bx-border-circle bx-cart-alt bx-sm bx-tada-hover boton_carrito'></i></a>
          </div>
        </form>
      </div>
    </nav>
  )
}
/* estructuring */
/* estados y ciclos de vida */