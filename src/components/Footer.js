import React from "react";
import { Github, LinkedIn, Facebook } from "./icons"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 mb-4 footer__socials">
            <a href="#" className="footer__social">
              <Facebook width="48" height="48px" />
            </a>
            <a href="https://github.com/qprquo/fancylab" className="footer__social">
              <Github width="48" height="48" />
            </a>
            <a href="#" className="footer__social">
              <LinkedIn width="48" height="48" />
            </a>
          </div>
          <div className="col col-md-4 footer__copyright">
            Inspired by <a href="//draculatheme.com/">Dracula theme</a>
            <br />
            © 2020
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;