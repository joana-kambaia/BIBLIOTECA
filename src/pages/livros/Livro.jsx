import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../components/book-slider/Rating";
import "./livro.css";


const Livro = () => {

    const {id} = useParams();
    
   const book = books.find(b => b.id === +id); // parseInt(id) == +id


    return (<div className="book">
        <div className="book-content">
            <img src={`/books/${book.image}`} 
            alt={book.title} 
            className="book-content-img"
            />
            <div className="book-content-info">
                <h1 className="book-title">{book.title}</h1>
                <div className="book-author">
                    por <span>{book.author}</span> (Autor)
                </div>
                <Rating rating={book.rating} reviews={book.reviews} />
            </div>
        </div>
                <p className="book-description">
                Traduzido de inglês-Narração é o uso de um comentário escrito ou falado para transmitir uma história ao público. 
                A narração é veiculada por um narrador: uma pessoa específica, ou voz literária não especificada,
                </p>
                <div className="book-icons">
                    <div className="book-icon">
                        <small>Tamanho</small>
                        <i className="bi bi-file-earmark-break"></i>
                        <b>{book.printLength} Páginas </b>
                    </div>
                    <div className="book-icon">
                        <small>Idioma</small>
                        <i className="bi bi-globe"></i>
                        <b>{book.language} </b>
                    </div>
                    <div className="book-icon">
                        <small>Data de Publicação</small>
                        <i className="bi bi-calendar3"></i>
                        <b>{book.PublicationDate} </b>
                    </div>

                </div>
        
        </div>)
}

export default Livro;