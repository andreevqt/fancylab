import React from 'react';
import { Link } from 'gatsby';

const MenuLink = (props) => {
  return (
    <Link activeClassName="menu__link--active" className="menu__link"  {...props} />
  )
}

const MobileMenu = () => {
  const onClick = (e) => {
    e.preventDefault();
    document.body.classList.remove('mobile-menu-is-shown');
  }
  return (
    <div className="mobile-menu">
      <ul className="mobile-menu__menu menu">
      <button onClick={onClick} className="mobile-menu__close toggle toggle--cross"></button>
        <li className="menu__item">
          <MenuLink to="/">Home</MenuLink>
        </li>
        <li className="menu__item">
          <MenuLink to="/templates" partiallyActive={true}>Templates</MenuLink>
        </li>
        {/* <li className="menu__item">
          <a className="menu__link" href="https://docs.google.com/forms/d/e/1FAIpQLSfh4QVCnt3ZwqoHIArfqnh5ncX3JWafOOUxRea4LTVoFvomzg/viewform">Contacts</a>
        </li> */}
      </ul>
    </div>
  )
}


export default MobileMenu;