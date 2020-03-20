import React from 'react';
import { asset } from "../util/util";

const Header = () => {
  const onClick = (e) => {
    e.preventDefault();
    document.body.classList.toggle('mobile-menu-is-shown');
  }
  return (
    <header className="header">
      <div className="container">
        <a href='/' className="header__logo">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" viewBox="0 0 32 22"><path d="M32,22H0V0H32ZM2,20H30V2H2Z" /><polygon points="11.95 10.82 7.9 6.77 6.12 6.77 6.11 6.78 10.15 10.82 6.11 14.85 7.91 14.85 11.95 10.82" /><line x1="13.16" y1="14.59" x2="18.89" y2="14.59" /><rect x="13.16" y="13.95" width="5.73" height="1.27"><animate attributeType="XML" attributeName="fill" values="transparent;#fff" dur=".9s" repeatCount="indefinite" /></rect></svg> */}
          <img src={asset("/images/logo-purple.svg")} alt="fancylabz.xyz" />
          <span className="header__logo-text"><span>Fancy</span>Lab</span>
        </a>
      </div>
      <button onClick={onClick} className="header__toggle toggle">
        <div className="toggle__inner"></div>
      </button>
    </header>
  )
}

export default Header;