import React, { useState } from 'react';
import Layout from './Layout';
import Hero from './Hero';
import { asset, styleHidden, useWindowSize, breakpoints } from '../util/util';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Skeleton from "react-loading-skeleton";
import LazyImage from "./LazyImage";

const Work = ({
  pageContext,
  data: {
    site: {
      siteMetadata
    }
  }
}) => {
  const { work } = pageContext;
  const { title, slug, link, source, preview, description, subtitle } = work
  const [loading, setLoading] = useState(true);
  const { sm, md, lg, xl } = breakpoints;
  const { width } = useWindowSize();
  let height = 150;

  if (width > sm) {
    height = 250;
  }

  if (width > md) {
    height = 300;
  }

  if (width > lg) {
    height = 400;
  }


  return (
    <Layout seo={{ title, description }}>
      <Hero
        className="hero--small"
        leftCol={() => {
          return (
            <>
              <h2 className="hero__heading">
                {title}
              </h2>
              <p className="hero__subheading">
                {subtitle}
              </p>
            </>
          )
        }}
      />
      <div className="section section--after-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {loading &&
                <Skeleton height={height} />
              }
              <div className="work-preview">
                <LazyImage
                  src={asset(preview)}
                  alt={title}
                  className="work-preview__image"
                  onLoad={() => setLoading(false)}
                  style={loading ? styleHidden : {}}
                />
                <div className="work-preview__overlay">
                  <svg xmlns="http://www.w3.org/2000/svg" className="work-preview__zoom" width="81" height="81" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>
                </div>
                <Link to={`/templates/${slug}/preview`} className="work-preview__link"></Link>
              </div>
            </div>
            <div className="col pl-md-5">
              <h2 className="mb-3">{loading ? <Skeleton /> : title}</h2>
              <p className="mb-5">
                {loading ? <Skeleton count={3} /> : description}
              </p>
              {
                loading
                  ? <Skeleton height={54} width={150} />
                  : <a href={source} className="btn btn-special mb-3 btn-with-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="btn__icon" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                      Source
                    </a>
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`;

export default Work;
