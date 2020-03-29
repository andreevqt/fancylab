import React, { useState } from "react";
import Layout from "./Layout";
import Hero from "./Hero";
import Content from "./Content"
import { asset, styleHidden } from '../util/util';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Skeleton from "./Skeleton";
import LazyImage from "./LazyImage";
import { ZoomIn, Github } from "./icons";

const Work = ({
  pageContext,
  data: {
    site: {
      siteMetadata
    }
  }
}) => {
  const { work } = pageContext;
  const { title, slug, link, source, preview, description, subtitle, tags } = work;
  const [loading, setLoading] = useState(true);

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
      <Content className="section section--after-hero">
        <div className="row">
          <div className="col-md-8">
            {
              loading && <Skeleton className="skeleton-card-preview" />
            }
            <div
              className="work-preview"
              style={loading ? styleHidden : {}}
            >
              <LazyImage
                src={asset(preview)}
                alt={title}
                className="work-preview__image"
                onLoad={() => setLoading(false)}
              />
              <div className="work-preview__overlay">
                <ZoomIn width="81" height="81" className="work-preview__zoom" />
              </div>
              <Link to={`/templates/${slug}/preview`} className="work-preview__link" />
            </div>
          </div>
          <div className="col pl-md-5">
            {
              tags && (
                <div className="work-preview__tags">
                  {loading
                    ? <Skeleton width={40} height={20} style={{ marginBottom: "15px" }} />
                    : tags.map((tag, index) => (
                      <span key={index} className="work-preview__tag tag tag--primary">{tag}</span>
                    ))
                  }
                </div>
              )
            }
            <h2 className="mb-3">{loading ? <Skeleton /> : title}</h2>
            <p className="mb-3">{loading ? <Skeleton count={2} width="70%" /> : description}</p>
            {
              loading
                ? <Skeleton height="54px" width="120px" />
                : (
                  <a href={source} className="btn btn-special mb-3 btn-with-icon">
                    <Github className="btn__icon" width="20" height="20" /> Source Code
                  </a>
                )
            }
          </div>
        </div>
      </Content>
    </Layout >
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
