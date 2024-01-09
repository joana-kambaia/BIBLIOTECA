import { Link } from "react-router-dom";


const HeaderTop = ({setToggle, toggle}) => {
    return (
        <div className="header-top">
        <div onClick={() => setToggle(prev => !prev)}className="header-top-menu">
        {toggle ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i> }
        </div>

        <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i>
            925-693-954
        </div>

            <div className="header-top-text">
                Bem-vindo a Biblioteca Nacional de Angola
            </div>

            <Link to="/forms/Login" className="header-top-link">
                <i className="bi bi-person-fill"></i>
                Entrar
            </Link>
    </div>
    );
}

export default HeaderTop;