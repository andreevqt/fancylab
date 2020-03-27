import React from "react";
import Layout from "../components/Layout";
import data from "../../data/data";
import Hero from "../components/Hero";
import WorksRow from "../components/Works";
import { latest } from "../util/util";
import Content from "../components/Content";

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
      <Content className="section section--after-hero">
        <WorksRow
          wrapperClass="row works"
          data={latest(data.works)}
        />
      </Content>
    </Layout >
  )
}

export default Templates;