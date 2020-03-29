import React, { useState } from 'react';
import { Link } from 'gatsby';
import LazyImage from './LazyImage';
import Skeleton from "./Skeleton";
import SkeletonWorkCard from "./SkeletonWorkCard";
import { styleHidden } from "../util/util"

const WorkSingle = ({ work, }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <SkeletonWorkCard />}
      <div className="work" style={loading ? styleHidden : {}}>
        <Link to={work.link} className="work__link">
          <LazyImage
            className="work__image"
            src={work.preview}
            alt={work.title}
            onLoad={() => setLoading(false)}
          />
        </Link>
        <div className="work__title">
          {work.tags.map((tag, index) => (
            <span key={index} className="work__title-tag tag tag--primary">{tag}</span>
          ))}
          {work.title}
        </div>
        <div className="work__description">
          {work.description}
        </div>
      </div>
    </>
  )
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