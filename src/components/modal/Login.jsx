import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    const response = await axios.post("https://infracode-api.onrender.com/auth/login", user);

    if (response.status === 200) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      console.log("Erro ao fazer login");
        }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Usuário: </label>
      <input type="text" className="Input-field" value={username} placeholder="Digite seu usuário" onChange={({ target }) => setUsername(target.value)} required/>
      <div>
        <label>Senha: </label>
        <input type="password" className="Input-field" value={password} placeholder="Insira uma senha" onChange={({ target }) => setPassword(target.value)} required style={{marginLeft:'-10px', width:'110%'}}/>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
