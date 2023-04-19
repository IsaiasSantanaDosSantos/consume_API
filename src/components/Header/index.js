import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt, FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Nav } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  let sizeWindow = window.outerWidth;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const nameUser = useSelector((state) => state.auth.user.nome);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <div className="navContainer">
        {sizeWindow > 576 ? (
          <>
            <Link to="/">
              <FaHome size={24} />
              Home
            </Link>
            <Link to="/register">
              <FaUserAlt size={20} />
              Login
            </Link>
            <Link to="/login">
              <FaSignInAlt size={24} />
              Sign
            </Link>
          </>
        ) : (
          <>
            <Link to="/">
              <FaHome size={24} />
            </Link>
            <Link to="/register">
              <FaUserAlt size={20} />
            </Link>
            {isLoggedIn ? (
              <>
                <Link onClick={handleLogout} to="/logout">
                  <FaPowerOff size={24} />
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <FaSignInAlt size={24} />
                </Link>
              </>
            )}
          </>
        )}
        {isLoggedIn && <span>Olá, {nameUser}!</span>}
      </div>
    </Nav>
  );
}
