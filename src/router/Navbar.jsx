import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Link to="/todoform" style={{ textDecoration: 'none', color: 'white' }}>
        Войти
      </Link>
    </>
  );
};

export default Navbar;
