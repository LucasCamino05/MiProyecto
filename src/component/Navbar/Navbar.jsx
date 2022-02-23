import './NavBar.css';

export const NavBar = () =>{
    return(
        <nav className='NavBar'>
            <div className='NavBar__container'>
                <a href="">ESTE ES EL LOGO</a>
                <ul className='NavBar__ul'>
                    <li>
                        Inicio
                    </li>
                    <li></li>
                    <li>
                        <a href=""> Carrito </a>
                    </li>
                    <li>
                        <a href="">Ingrese</a>
                        <a href="">Registrarse</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

/* estructuring */
/* estados y ciclos de vida */