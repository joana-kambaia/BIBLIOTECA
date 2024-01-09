import "./slider.css";
import first from "../../images/telefone.png";
import second from "../../images/computador.png";
import third from "../../images/estante1.png";
import { useState } from "react";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === -"left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
    <div className="slider-container">
        <i 
       onClick={() => handleClick("left")} 
       className="bi bi-chevron-left arrow-left"
       ></i>
        <div style={{transform:`translateX(${slideIndex * -100}vw)`}} className="slider-wrapper">
            <div className="slide first-slide">
                <div className="slide-img-wrapper">
                    <img src={first} alt="" />
                </div>
                <div className="slide-info-wrapper">
                    <h1 className="slide-info-title">Biblioteca Digital de Angola </h1>
                        <p className="slide-info-desc">
                        Bem-vindo à nossa biblioteca digital, onde as portas do conhecimento se abrem com um clique.
                        </p>
                </div>
            </div>

       

        
            <div className="slide second-slide">
                <div className="slide-img-wrapper">
                    <img src={second} alt="" />
                </div>
                <div className="slide-info-wrapper">
                    <h1 className="slide-info-title">Disseminando o conhecimento</h1>
                        <p className="slide-info-desc">
                        Aqui, na nossa biblioteca digital, você encontrará um tesouro de conhecimento à distância de um clique.
                        </p>
                </div>
            </div>

    
            <div className="slide third-slide">
                <div className="slide-img-wrapper">
                    <img src={third} alt="" />
                </div>
                <div className="slide-info-wrapper">
                    <h1 className="slide-info-title">Venha explorar o nosso patrimonio cultural.</h1>
                        <p className="slide-info-desc">
                        Descubra o prazer da leitura em um novo formato na nossa biblioteca digital.
                        </p>
                </div>
            </div>

        
           
           </div>
           <i 
           onClick={() => handleClick("right")} 
           className="bi bi-chevron-right arrow-right"></i>

    </div>
    
    );
}


export default Slider;