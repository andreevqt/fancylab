import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const Files = ({ data }) => {
  const { edges: files } = data.allFile;
  console.log(files)
  return (
    <Layout pageTitle="Files">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Created</th>
          </tr>

        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.node.name}</td>
              <td>{file.node.size}</td>
              <td>{file.node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}


export const query = graphql`query{
  allFile {
    edges {
      node {
        id,
        base,
        name,
        size,
        birthTime
      }
    }
  }
}
`;


export default Files;