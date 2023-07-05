import { useState } from 'react';
import  '../../css/Register.module.css';
import User from '../objects/User';
import { Link } from 'react-router-dom';

const Register = () => {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function mudarNome(e){
        setNome(e.target.value);
    }

    function mudarEmail(e){
        setEmail(e.target.value);
    }

    function mudarSenha(e){
        setSenha(e.target.value);
    }

    function cadastrar(){
        console.log('Nome: ', nome, "E-mail: ", email, "Senha: ", senha)
    }
    
    return (
        <>
        <form>
            <div>
                <label>Nome:</label>
                <input type="text" id="nome" name="nome" value={nome} onChange={mudarNome} required /> 
            </div>
            <div>
                <label>E-mail:</label>
                <input type="email" id="email" name="email" value={email} onChange={mudarEmail} required />

            </div>
            <div>
                <label>Senha:</label>
                <input type="password" id="senha" name="senha" value={senha} onChange={mudarSenha} required />
            </div>
            <button type="submit" onClick={cadastrar}> Cadastrar</button>
            <p>Já tem uma conta? <Link to="/login"> Entre </Link></p>
        </form>
        </>
    );
  };
  
  export default Register;