import React from "react";
import $ from "jquery";
import { ChevronDown, WaveDown } from "./icons";

const Hero = ({
  className = '',
  hasWave = true,
  hasParticles = true,
  leftCol = () => null,
  rightCol = () => null,
  hasButton = false,
  buttonTarget = "#"
}) => {
  const classes = ['hero'];

  if (hasButton) {
    classes.push('hero--has-button');
  }
  
  if (className) {
    classes.push(className);
  }

  let button = null;

  const onButtonClick = (e) => {
    e.preventDefault();
    const btn = $(button);
    const target = $(btn.attr('href'));
    $('html, body').animate({ scrollTop: target.offset().top }, 'slow');
  }

  return (
    <div id="hero" className={classes.join(' ')}>
      {hasParticles && <div className="hero__particles"></div>}
      <div className="container">
        <div className="row">
          <div className="col-md-7" style={{ overflowX: "hidden" }}>
            {leftCol()}
          </div>
          <div className="col d-flex justify-content-center">
            {rightCol()}
          </div>
          {
            hasButton &&
            <div className="col-12 mt-5 d-flex justify-content-center">
              <a ref={(el) => button = el}
                onClick={onButtonClick}
                href={buttonTarget}
                className="btn-down"
              >
                <ChevronDown height="12" width="12" />
              </a>
            </div>
          }
        </div>
      </div>
      {hasWave && <WaveDown className="hero__wave-down" />}
    </div>
  );
}

export default Hero;