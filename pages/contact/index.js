import axios from "axios";
import { PREFIX_API } from "../../config";
import Contact from "./Contact";

import React from "react";
export const getStaticProps = async () => {
  // Fetching data from jsonplaceholder.
  const res = await axios.get(`${PREFIX_API}contacts/index`);

  const contactData = await res.data;

  // Sending fetched data to the page component via props.
  return {
    props: {
      contactData,
    },
    revalidate: 10,
  };
};
const Index = ({ contactData }) => {
  return <Contact contactData={contactData} />;
};

export default Index;
