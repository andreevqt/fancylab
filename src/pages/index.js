import React from "react"
import Layout from '../components/Layout'
import Hero from '../components/hero';
import data from "../../data/data";
import Works from "../components/Works";
import Content from "../components/Content"
import { latest, asset } from '../util/util';
import { Link } from 'gatsby';

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
      <Content
        id="#works"
        className="section section--after-hero"
        heading="Tempaltes"
      >
        <Works wrapperClass="row works" data={latest(data.works, 3)} />
        <Link to="/templates" className="btn btn-special view-all mb-md-5 mb-3">View <span>All</span></Link>
      </Content>
    </Layout >
  );
}

export default Index;
