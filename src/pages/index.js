import React, { useEffect, useRef } from "react"
import Layout from '../components/Layout'
import Hero from '../components/hero';
import data from "../../data/data";
import Works from "../components/Works";
import Content from "../components/Content"
import { latest, asset } from '../util/util';
import { Link } from 'gatsby';
import malarkey from "malarkey";

const Index = () => {
  const words = [
    "free",
    "open source",
    "easy to use",
    "easy to install",
    "modern",
    "responsive",
    "bootstrap 4 based"
  ];

  let el = useRef();

  useEffect(() => {
    if (typeof document !== "undefined" && el.current) {
      let malarkeyInstance = malarkey((text) => {
        if (el.current) {
          el.current.textContent = text;
        }
      }, {
        typeSpeed: 50,
        deleteSpeed: 50,
        pauseDelay: 2000,
        repeat: true
      });

      words.map((word) => {
        malarkeyInstance
          .type(word)
          .pause()
          .delete();
      });
    }

  }, []);
  return (
    <Layout pageTitle="Home">
      <Hero
        leftCol={() => {
          return (
            <div className="d-flex align-items-center h-100">
              <h1 className="hero__typing">Collection of  <span ref={el} className="hero__typing-hightlight">Free</span> html templates</h1>
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
        id="works"
        className="section section--after-hero"
        heading="Templates"
      >
        <Works wrapperClass="row works" data={latest(data.works, 3)} />
        <Link to="/templates" className="btn btn-special view-all mb-md-5 mb-3">View <span>All</span></Link>
      </Content>
    </Layout >
  );
}

export default Index;
