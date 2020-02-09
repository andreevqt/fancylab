import React from "react"
import Layout from '../components/Layout'
import Hero from '../components/hero';
import data from '../../data/data';
import { latest } from '../util/util';

const Index = () => {
  const works = latest(data.works, 3);
  return (
    <Layout pageTitle="Home">
      <Hero
        leftCol={() => {
          return (
            <div className="hero__typing-wrap">
              <span className="hero__dollar">
                sp@root: ~/$
                </span>
              <span className="hero__typing">Per aspera ad astra</span>
            </div>
          )
        }}
        rightCol={() => {
          return (
            <img className="hero__rocket" src="/images/rocket.svg" alt="Rocket" />
          )
        }}
        hasButton={true}
        buttonTarget="#works"
      />
      <div id="works" className="section section--after-hero">
        <div className="container">
          <h2 className="section-heading">Works</h2>
          <div className="row works">
            {works.map((work) => (
              <div key={work.id} className="col-md-4 col-sm-6 mb-5">
                <div className="work">
                  <a href={work.link}>
                    <img className="work__image" src={work.preview} alt={work.title} />
                  </a>
                  <div className="work-title">{work.title}</div>
                  <div className="work__description">
                    {work.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a href="/works" className="btn btn-special view-all">View <span>All</span></a>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
