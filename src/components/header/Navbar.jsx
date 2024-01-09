import { Link } from "react-router-dom";

const Navbar = ({toggle, setToggle}) => {
    return (
        <nav style={{left: toggle && "0"}} className="navbar">
            <ul className="navbar-links">
                <Link to="/" onClick={() => setToggle(false)} className="navbar-link">Ínicio</Link>
                <Link to="/catalogo" onClick={() => setToggle(false)} className="navbar-link">Catálogo</Link>
                <Link to="/actividades" onClick={() => setToggle(false)} className="navbar-link">Actividades</Link>
                <Link to="/sobrenos" onClick={() => setToggle(false)} className="navbar-link">Sobre Nós</Link>
                <Link to="/contacto" onClick={() => setToggle(false)} className="navbar-link">Contacto</Link>
                <Link to="/forms/Registro" onClick={() => setToggle(false)} className="navbar-link">Registro</Link>
            </ul>
        </nav>        
    );
}

export default Navbar;