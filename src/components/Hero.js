import React from 'react';
import $ from 'jquery';

const WaveDown = ({
  className
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 72.15">
      <path d="M0 0v53.94c58.19-5.63 138-16.49 251.75-19.11 126-2.91 139.35 7.85 411 21.53 54 2.72 209.59 10.43 361.79 12.32 352.57 4.37 376.84-34.95 639-25.11 110.91 4.16 193.64 14 256.45 20.68V0z" fill="#3c3f52" opacity=".4" /><path d="M0 0v35.4c76.38 9.77 173 19 284.75 22.39 254.79 7.73 314.72-23.18 564.06-27.27 317.24-5.2 370.25 42.37 693.07 41.62A3288.86 3288.86 0 0 0 1920 49.45V0z" fill="#3c3f52" />
    </svg>
  );
}

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
      {hasParticles && <div id="particles" className="hero__particles"></div>}
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
              <a ref={(el) => button = el} onClick={onButtonClick} href={buttonTarget} className="btn-down">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="12" height="12" viewBox="0 0 24 24">
                  <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"></path></svg>
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