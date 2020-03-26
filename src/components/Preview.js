import React, { useEffect } from "react";
import { Mobile, PC, Github, Cross, TriangleLeft } from "./icons";

const TopPanel = ({ backLink, work }) => {
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
            <TriangleLeft width="10" height="10" />
            Go Back
          </a>
        </div>
        <div className="col-auto mx-auto d-md-flex align-items-center d-none">
          <button className="top-panel__screen-btn top-panel__screen-btn--pc mr-1" onClick={handlePc}>
            <PC width="24" height="24" />
          </button>
          <button className="top-panel__screen-btn top-panel__screen-btn--mobile" onClick={handleMobile}>
            <Mobile width="24" height="24" />
          </button>
        </div>
        <div className="col-md col-auto d-flex justify-content-end">
          <a href={work.source} className="top-panel__btn d-none d-md-inline-block btn btn-special btn-with-icon">
            <Github width="24px" height="24px" />
            Source Code
          </a>
          <button onClick={onClose} className="top-panel__close" title="Remove iframe">
            <Cross width="12" height="12" />
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
      <TopPanel
        backLink={`/templates/${work.slug}`}
        work={work}
      />
      <iframe className="preview__iframe" src={work.pagesLink}></iframe>
    </div>
  );
}

export default Preview;