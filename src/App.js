import '../src/css/App.module.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/modal/Home';
import Login from './components/modal/Login';
import Cadastro from './components/modal/Register';
import Detalhes from './components/modal/Datails';
import Carrinho from './components/modal/Purchase';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes> 
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
        <Route exact path="/detalhes/:identificador" element={<Detalhes />} />
        <Route exact path="/carrinho" element={<Carrinho />} />
      </Routes>
    </Router>

    <Footer />
    </>
  );
}

export default App;
