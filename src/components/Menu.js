import React from 'react';
import { Link } from 'gatsby';

const MenuLink = (props) => {
  return (
    <Link activeClassName="menu__link--active" className="menu__link"  {...props} />
  )
}

const Menu = ({ className = '' }) => {
  return (
    <ul className={"menu " + className}>
      <li className="menu__item">
        <MenuLink to="/">Home</MenuLink>
      </li>
      <li className="menu__item">
        <MenuLink to="/works" partiallyActive={true}>Works</MenuLink>
      </li>
      <li className="menu__item">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfh4QVCnt3ZwqoHIArfqnh5ncX3JWafOOUxRea4LTVoFvomzg/viewform">Contacts</a>
      </li>
    </ul>
  )
};

export default Menu;