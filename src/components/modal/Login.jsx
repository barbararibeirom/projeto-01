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
      navigate("/success");
    } else {
      console.log("Erro ao fazer login");
        }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Usuário: </label>
      <input type="text" value={username} placeholder="Digite seu usuário" onChange={({ target }) => setUsername(target.value)} required/>
      <div>
        <label>Senha: </label>
        <input type="password" value={password} placeholder="insira uma senha" onChange={({ target }) => setPassword(target.value)} required/>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
