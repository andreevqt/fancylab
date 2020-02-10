import React from 'react';
import { asset } from '../util/util'

const Works = ({ data, wrapperClass = "row works" }) => {

  return (
    <div className={wrapperClass}>
      {
        data.map((work) => {
          console.log(asset(work.preview));
          return (
            <div key={work.id} className="col-md-4 col-sm-6 mb-5">
              <div className="work">
                <a href={work.link}>
                  <img className="work__image" src={asset(work.preview)} alt={work.title} />
                </a>
                <div className="work__title">{work.title}</div>
                <div className="work__description">
                  {work.subtitle}
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Works;