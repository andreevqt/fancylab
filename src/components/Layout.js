import React from 'react';
import Header from './Header';
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({
  pageTitle,
  children
}) => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const { title } = data.site.siteMetadata;
  
  return (
    <div className="container">
      <Header title={title} />
      <h3 className="page-title">{pageTitle}</h3>
      {children}
    </div>
  );
}

export default Layout;