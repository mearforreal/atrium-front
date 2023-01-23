import axios from "axios";
import About from "./About";
import React from "react";
import { PREFIX_API } from "../../config";

export const getStaticProps = async () => {
  // Fetching data from jsonplaceholder.
  const res = await axios.get(`${PREFIX_API}project/home-page`);
  const projectData = await res.data;

  return {
    props: {
      projectData,
    },
  };
};

const Index = ({ projectData }) => {
  return <About projectData={projectData} />;
};

export default Index;
