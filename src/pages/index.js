import React from "react"
import Layout from '../components/Layout'
import Hero from '../components/hero';
import data from '../../data/data';
import Works from '../components/Works';
import { latest, asset } from '../util/util';

const Index = () => {
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
            <img className="hero__rocket" src={asset("/images/rocket.svg")} alt="Rocket" />
          )
        }}
        hasButton={true}
        buttonTarget="#works"
      />
      <div id="works" className="section section--after-hero">
        <div className="container">
          <h2 className="section-heading">Templates</h2>
          <Works wrapperClass="row works" data={latest(data.works, 3)} />
          <a href="/templates" className="btn btn-special view-all">View <span>All</span></a>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
