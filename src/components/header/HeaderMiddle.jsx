const HeaderMiddle = () => {
    return (
        <div className="header-middle">
            <div className="header-middle-logo">
                <b>Biblioteca</b>
                <i className="bi bi-book"></i>
                <b>Digital</b>
            </div>
            <div className="header-middle-search-box">
                <input className="header-middle-search-input" type="search" placeholder="Pesquisar ..." />
                <i className="bi bi-search"></i>
            </div>
                <div className="header-middle-cart-wrapper">
                    <i className="bi bi-pen"></i>
                </div>
        </div>
    );
}

export default HeaderMiddle;