import  '../../css/Register.module.css';
import User from '../objects/User';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
        <form>
            <div>
                <label>Nome:</label>
                <input type="text" id="nome" name="nome" required /> 
            </div>
            <div>
                <label>E-mail:</label>
                <input type="email" id="email" name="email" required />

            </div>
            <div>
                <label>Senha:</label>
                <input type="password" id="senha" name="senha" required />
            </div>
            <button type="submit" onClick={User}> Cadastrar</button>
            <p>Já tem uma conta? <Link to="/login"> Entre </Link></p>
        </form>
        </>
    );
  };
  
  export default Register;