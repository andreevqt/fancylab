import React from 'react';
import { Link } from 'gatsby';

const MenuLink = (props) => {
  return (
    <Link activeClassName="menu__link--active" className="menu__link"  {...props} />
  )
}

const Menu = (props) => {
  return (
    <ul className="menu">
      <li className="menu__item">
        <MenuLink to="/">Home</MenuLink>
      </li>
      <li className="menu__item">
        <MenuLink to="/files">Files</MenuLink>
      </li>
      <li className="menu__item">
        <MenuLink to="/about">About</MenuLink>
      </li>
    </ul>
  )
};

export default Menu;