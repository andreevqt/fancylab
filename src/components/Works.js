import React, { useState } from 'react';
import { Link } from 'gatsby';
import LazyImage from './LazyImage';
import Skeleton from "react-loading-skeleton";
import { styleHidden, useWindowSize, breakpoints } from "../util/util"

const WorkSingle = ({ work, }) => {
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();
  const { sm, md, lg, xl } = breakpoints;
  let height = 130;

  if (width > sm) {
    height = 150;
  }

  if (width > lg) {
    height = 190;
  }

  return (
    <div className="work">
      <Link to={work.link} className="work__link">
        {loading && <Skeleton height={height} />}
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
            <div key={work.id} className="col-md-4 col-sm-6 mb-5">
              <WorkSingle work={work} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Works;