import React from 'react';
import { Link } from 'gatsby';

const MenuLink = (props) => {
  const onClick = (e) => {
    document.body.classList.remove('mobile-menu-is-shown');
  }

  return (
    <Link onClick={onClick} activeClassName="menu__link--active" className="menu__link"  {...props} />
  )
}

const MobileMenu = () => {
  const onClick = (e) => {
    e.preventDefault();
    document.body.classList.remove('mobile-menu-is-shown');
  }
  return (
    <div className="mobile-menu">
      <button onClick={onClick} className="mobile-menu__close toggle toggle--cross"></button>
      <nav className="mobile-menu__menu menu">
        <div className="menu__item">
          <MenuLink to="/">Home</MenuLink>
        </div>
        <div className="menu__item">
          <MenuLink to="/templates" partiallyActive={true}>Templates</MenuLink>
        </div>
      </nav>
    </div>
  )
}


export default MobileMenu;