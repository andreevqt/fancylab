import React, { useEffect } from 'react';

const TopPanel = ({ backLink }) => {
  let self = null;

  useEffect(() => {
    document.body.classList.add("top-panel-is-shown", "pc");
  }, []);

  const onClose = (e) => {
    document.body.classList.remove("top-panel-is-shown");
  }


  const handlePc = (e) => {
    document.body.classList.remove("mobile");
    document.body.classList.add("pc");
  }

  const handleMobile = (e) => {
    document.body.classList.remove("pc");
    document.body.classList.add("mobile");
  }

  return (
    <div className="top-panel" ref={(el) => self = el}>
      <div className="row">
        <div className="col">
          <a href={backLink} className="top-panel__btn  btn btn-link btn-special--link mr-3 btn-with-icon">
            <svg className="btn__icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M3 12l18-12v24z" /></svg>
            Go Back
          </a>
        </div>
        <div className="col-auto mx-auto d-md-flex align-items-center d-none">
          <button className="top-panel__screen-btn top-panel__screen-btn--pc mr-1" onClick={handlePc}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0v19h24v-19h-24zm22 17h-20v-15h20v15zm-6.599 4l2.599 3h-12l2.599-3h6.802z"/></svg>
          </button>
          <button className="top-panel__screen-btn top-panel__screen-btn--mobile" onClick={handleMobile}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24"><path d="M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z"/></svg>
          </button>
        </div>
        <div className="col-md col-auto d-flex justify-content-end">
          <a href="#" className="top-panel__btn d-none d-md-inline-block btn btn-special mr-3 btn-with-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="btn__icon" width="20" height="20" viewBox="0 0 24 24"><path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z" /></svg>
            Download
          </a>
          <a href="#" className="top-panel__btn d-none d-md-inline-block btn btn-special btn-with-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="btn__icon" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            Source Code
          </a>
          <button onClick={onClose} className="top-panel__close" title="Remove iframe">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

const Preview = ({ pageContext }) => {
  const { work } = pageContext;
  return (
    <div className="preview">
      <TopPanel backLink={`/templates/${work.slug}`} />
      <iframe className="preview__iframe" src={work.pagesLink}></iframe>
    </div>
  );
}

export default Preview;