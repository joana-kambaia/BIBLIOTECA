import "./modal.css";
import Rating  from "../book-slider/Rating";
import { Link } from "react-router-dom";
const Modal = ({bookData, setOpenModal}) => {

    const {image, title, inStock, rating, reviews, author, id} = bookData; 

    return (
        <div onClick={() => setOpenModal(false)} className="modal-container">
            <div onClick={(event) => event.stopPropagation()} className="modal-content">
                <i onClick={() => setOpenModal(false)} className="bi bi-x-circle-fill modal-icon"></i>
                <div className="modal-content-img">
                    <img src={`/books/${image}`} alt={title} />
                </div>
                <div className="modal-content-info">
                    <h5 className="modal-content-info-title">{title}</h5>
                    <div className="modal-content-info-stock">
                        <b>Status: </b> {inStock ? "Disponivel para Download" : "Indisponivel para Download"} 
                    </div>

                    <div className="download">
                    <p><button>Baixar</button></p> 
                    
                    </div>

                    <Rating rating={rating} reviews={reviews} />
                    <div className="modal-content-info-author">
                        <b>Autor: </b> {author}
                    </div>
                    <Link to={`/livros/${id}`} className="modal-content-info-link"> Ver Mais Detalhes </Link>
                </div>
            </div>
        </div>
    )
}

export default Modal;