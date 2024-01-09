import "./footer.css";
const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-social-media">
                <div className="footer-social-media-text">Siga-nos nas Redes Sociais</div>
                <div className="footer-social-media-icons">
                    <div className="footer-social-media-icon">
                        <i style={{color: 'red'}} className="bi bi-instagram"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{color: '#2980b9'}} className="bi bi-facebook"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{color: 'red'}} className="bi bi-youtube"></i>
                    </div>
                </div>
            </div>

                <div className="footer-links-wrapper">
                   
                    <div className="footer-links-item">
                        <h3 className="footer-links-item-title">Links Utilizáveis</h3>
                        <ul className="footer-links">
                            <li className="footer-link">Ínicio</li>
                            <li className="footer-link">Catálogo</li>
                            <li className="footer-link">Novidades</li>
                            <li className="footer-link">Sobre Nós</li>
                            <li className="footer-link">Contacto</li>
                            <li className="footer-link">Registro</li>
                            </ul>
                    </div>

                    <div className="mapBox"><
                        iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1434.7455380643883!2d13.240355538275955!3d-8.828484872528469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sao!4v1700181611637!5m2!1spt-PT!2sao" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    <div className="footer-links-item">
                        <h3 className="footer-links-item-title">Contactos para informações</h3>
                            <div className="footer-address-wrapper">
                                <div className="footer-address-item">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    Angola - Luanda - Largo dos Ministérios
                                </div>
                                <div className="footer-address-item">
                                    <i className="bi bi-telephone-fill"></i>
                                    222-222-222
                                </div>
                                <div className="footer-address-item">
                                    <i className="bi bi-envelope-fill"></i>
                                    Biblioteca@gmail.com
                                </div>
                            </div>
                    </div>
                  
                </div>
                      <p className="baixo">Todos os direitos reservados</p>
        </footer>
    );
}

export default Footer;