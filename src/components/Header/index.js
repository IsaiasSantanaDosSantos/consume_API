import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      <div className="navContainer">
        <Link to="/">
          <FaHome size={24} />
          Home
        </Link>
        <Link to="/login">
          <FaUserAlt size={20} />
          Login
        </Link>
        <Link to="/sign">
          <FaSignInAlt size={24} />
          Sign
        </Link>
        {botaoClicado ? 'Clicado' : 'Não cricado'}
      </div>
    </Nav>
  );
}
