import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/pikachu.gif';
import Styles from '../../css/Navbar.module.css';
import { FaCartPlus, FaHome, FaUserPlus, FaUserCheck } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";



const Navbar = () => {
  return (
    <>
    <nav className={Styles.navbar}>
      <img src={Logo} alt="Logotipo" className={Styles.logo} />
      <ul>
        <li> <Link to="/"> <FaHome/> </Link> </li>
        <li> <Link to="/login"> <FaUserCheck /> </Link> </li>
        <li> <Link to="/cadastro"> <FaUserPlus /> </Link> </li>
        <li> <Link to="/detalhes"> <FaMagnifyingGlass /> </Link> </li>
        <li> <Link to="/carrinho"> <FaCartPlus /> </Link> </li>
      </ul>
    </nav>
    <div className={Styles.search}>
        <input type="text" placeholder="Digite sua pesquisa" />
        <button type="submit">Pesquisar</button>
    </div>
      </>
  );
};

export default Navbar;