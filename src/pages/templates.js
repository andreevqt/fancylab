import React from 'react';
import Layout from '../components/Layout';
import data from '../../data/data';
import Hero from '../components/Hero';
import WorksRow from '../components/Works';
import { latest } from '../util/util'

const Templates = () => {
  return (
    <Layout seo={{ description: "FancyLabs - collection of free, opensource html themes, landing pages, templates - these themes easy to install, customize and deploy." }}>
      <Hero className="hero--small"
        leftCol={() => {
          return (
            <>
              <h2 className="hero__heading">Templates</h2>
            </>
          )
        }}
      />
      <div className="section section--after-hero">
        <div className="container">
          <WorksRow
            wrapperClass="row works"
            data={latest(data.works)}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Templates;