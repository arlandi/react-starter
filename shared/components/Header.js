import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="shadow">
    <Link to="/"><h2>Movie App</h2></Link>
  </header>
);

export default Header;
