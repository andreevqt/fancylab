import React from 'react';
import Menu from './Menu';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href='/' className="header__logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" viewBox="0 0 32 22"><path d="M32,22H0V0H32ZM2,20H30V2H2Z" /><polygon points="11.95 10.82 7.9 6.77 6.12 6.77 6.11 6.78 10.15 10.82 6.11 14.85 7.91 14.85 11.95 10.82" /><line x1="13.16" y1="14.59" x2="18.89" y2="14.59" /><rect x="13.16" y="13.95" width="5.73" height="1.27"><animate attributeType="XML" attributeName="fill" values="transparent;#fff" dur=".9s" repeatCount="indefinite" /></rect></svg>
          FancyLab
        </a>
        <div className="header__menu-wrapper">
          <Menu className="header__menu" />
        </div>
      </div>
    </header>
  )
}
export default Header;