import React, { useState } from 'react';
import { Link } from 'gatsby';
import LazyImage from './LazyImage';
import Skeleton from "react-loading-skeleton";
import { styleHidden, useWindowSize } from "../util/util"


const Template = ({ work,  }) => {
  const [loading, setLoading] = useState(true);
  const size = useWindowSize();
  console.log(size);

  return (
    <div className="work">
      <Link to={work.link} className="work__link">
        {loading && <Skeleton height="190px" />}
        <LazyImage
          className="work__image"
          src={work.preview}
          alt={work.title}
          onLoad={() => setLoading(false)}
          style={loading ? styleHidden : {}}
        />
      </Link>
      <div className="work__title">
        {
          loading
            ?
            <Skeleton />
            : work.title
        }
      </div>
      <div className="work__description">{loading ? <Skeleton count={2} /> : work.description}</div>
    </div>
  );
};

const Works = ({ data, wrapperClass = "row works" }) => {

  return (
    <div className={wrapperClass}>
      {
        data.map((work) => {
          return (
            <div key={work.id} className="col-md-4 col-sm-6 mb-md-5 mb-3">
              <div className="work">
                <Template work={work} />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Works;