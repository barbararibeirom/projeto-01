import React from 'react';
import Styles from '../../css/Footer.module.css';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <p>© {new Date().getFullYear()} Meu Commerce. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
