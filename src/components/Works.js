import React from 'react';
import { asset } from '../util/util'
import { Link } from 'gatsby';
import LazyImage from './LazyImage';

const Works = ({ data, wrapperClass = "row works" }) => {

  return (
    <div className={wrapperClass}>
      {
        data.map((work) => {
          return (
              <div key={work.id} className="col-md-4 col-sm-6 mb-md-5 mb-3">
                <div className="work">
                  <Link to={work.link} className="work__link">
                    <LazyImage className="work__image" src={work.preview} alt={work.title}/>
                  </Link>
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