import React from 'react';
import Search from './Search';

function Header() {
  return (
    <section className="header">
      <div className="logo">Logo</div>
      <Search />
      <nav className="user-nav">
          <div className="user-nav__user">
              <img src="/logo192.png" alt="User photo" className="user-nav__user-photo" />
              <span className="user-nav__user-name">Jonas</span>
          </div>
      </nav>
    </section>
  );
}

export default Header;
