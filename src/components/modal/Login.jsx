import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, senha };

    try {
      const response = await axios.post("https://infracode-api.onrender.com/auth/login", user);

      if (response.status === 200) {
        localStorage.setItem("isLoggedIn", true);
        console.log(response);
        navigate("/");
      } else {
        console.log("Erro ao fazer login");
      }
    } catch (error) {
      console.log("Erro ao conectar na API:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email: </label>
      <input
        type="email"
        className="Input-field"
        value={email}
        placeholder="Digite seu e-mail"
        onChange={({ target }) => setEmail(target.value)}
        required
      />
      <div>
        <label>Senha: </label>
        <input
          type="password"
          className="Input-field"
          value={senha}
          placeholder="Insira uma senha"
          onChange={({ target }) => setSenha(target.value)}
          required
          style={{ marginLeft: "-10px", width: "110%" }}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
