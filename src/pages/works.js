import React from 'react';
import Layout from '../components/Layout';
import data from '../../data/data';
import Hero from '../components/Hero';
import { latest } from '../util/util'

const Works = () => {
  const works = latest(data.works);
  return (
    <Layout>
      <Hero className="hero--small"
        leftCol={() => {
          return (
            <>
              <h2 className="hero__heading">Works</h2>
            </>
          )
        }}

      />
      <div className="section section--after-hero">
        <div className="container">
          <div className="row works">
            {works.map(work => {
              return (
                <div className="col-md-4 col-sm-6 mb-5" key={work.id}>
                  <div className="work">
                    <a href={work.link}>
                      <img
                        src={work.preview}
                        alt={work.title}
                        className="work__image"
                      />
                    </a>
                    <div className="work-title">{work.title}</div>
                    <div className="work__description">
                      {work.subtitle}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Works;