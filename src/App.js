import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import Catalogo from './pages/catalogo/Catalogo';
import Actividades from './pages/actividades/Actividades';
import SobreNos from './pages/sobrenos/SobreNos';
import Contacto from './pages/contacto/Contacto';
import Registro from './pages/forms/Registro';
import Login from './pages/forms/Login';
import Livro from './pages/livros/Livro';


function App() {
  return (
    <BrowserRouter>
          <Header />
         
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
          <Route path="/actividades" element={<Actividades/>}/>
          <Route path="/sobrenos" element={<SobreNos/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/forms/Registro" element={<Registro/>}/>
          <Route path="/forms/Login" element={<Login/>}/>
          <Route path="/livros/:id" element={<Livro/>}/>
        </Routes>

          <Footer />
    </BrowserRouter>
  );
}

export default App;
