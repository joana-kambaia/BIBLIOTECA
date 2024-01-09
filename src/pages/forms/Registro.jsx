import { Link } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registro = () => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (nome.trim() === "") return toast.error("Digite o Nome");
        if (sobrenome.trim() === "") return toast.error("Digite o Sobrenome");
        if (email.trim() === "") return toast.error("Digite o Email");
        if (username.trim() === "") return toast.error("Digite o Nome de Usuário");
        if (password.trim() === "") return toast.error("Digite a Senha");

        console.log({email, password});
    };

    return (
        <div className="form-wrapper">
            <ToastContainer />
            <h1 className="form-title">Criar uma conta</h1>
            <form onSubmit={formSubmitHandler} className="form">
                <input 
                value={nome} 
                onChange={e => setNome(e.target.value)} 
                type="nome" 
                placeholder="Nome" 
                />
                <input 
                value={sobrenome} 
                onChange={e => setSobrenome(e.target.value)} 
                type="sobrenome" 
                placeholder="Sobrenome" 
                />
                <input 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                type="email" 
                placeholder="Email" 
                />
                <input 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                type="username" 
                placeholder="NomeUsuário" 
                />
                <input 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                type="password"
                placeholder="Senha" 
                />

                
                
                <button type="form-btn">Registrar</button>
            </form>
            <div className="form-footer">
                Já possui uma conta?{""}
                    <Link to="/forms/Login" className="form-links">
                        Entrar
                    </Link> 
                
            </div>
        
        </div>
        );
}

export default Registro;