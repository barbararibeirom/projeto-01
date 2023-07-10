import { useState } from 'react';
import  '../../css/Register.module.css';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  function mudarNome(e){
    setNome(e.target.value);
  }

  function mudarEmail(e){
    setEmail(e.target.value);
  }

  function mudarSenha(e){
    setSenha(e.target.value);
  }

  async function cadastrar(e) {
    e.preventDefault(); // Evita a atualização da página
    
    console.log('Nome: ', nome, "E-mail: ", email, "Senha: ", senha);
    const userData = { nome, email, senha };
    localStorage.setItem('userData', JSON.stringify(userData));
    const response = await axios.post("https://infracode-api.onrender.com/usuarios", userData);
    console.log(response)
    navigate('/login');
  }
    
  return (
    <>
      <form onSubmit={cadastrar}>
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
        <button type="submit"> Cadastrar</button>
        <p>Já tem uma conta? <Link to="/login"> Entre </Link></p>
      </form>
    </>
  );
};

export default Register;
