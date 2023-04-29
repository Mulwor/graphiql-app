import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">Sign in</Link>
      <Link to="/">Sign up</Link>
    </header>
  )
}