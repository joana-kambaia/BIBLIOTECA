import { Link } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState("false");

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (email.trim() === "") return toast.error("Digite o Email");
        if (password.trim() === "") return toast.error("Digite a Senha");

        console.log({email, password});
    };


        const showPasswordHandler = () => {
            setShowPassword(prev => !prev);
        }

    return (
        <div className="form-wrapper">
            <ToastContainer />
            <h1 className="form-title">Entrar na tua conta</h1>
            <form onSubmit={formSubmitHandler} className="form">
                <input 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                type="email" 
                placeholder="Email" 
                />
                <input 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                type={showPassword ? "text" : "password"} 
                placeholder="Senha" 
                />

                {showPassword ? (
                    <i onClick={showPasswordHandler} className="bi bi-eye-slash-fill show-password-icon"></i>
                ):(
                    <i onClick={showPasswordHandler} className="bi bi-eye-fill show-password-icon"></i>
                )}
                
                
                <button type="form-btn">Entrar</button>
            </form>
            <div className="form-footer">
                Não possuis uma conta?
                    <Link to="/forms/Registro" className="form-links">
                        Registrar
                    </Link> 
                
            </div>
        
        </div>
        );
}
 
export default Login;