import Purchase from "./Purchase";
import { PREFIX_API } from "../../config";
import axios from "axios";

export const getStaticProps = async () => {
  // Fetching data from jsonplaceholder.
  const res = await axios.get(`${PREFIX_API}project/purachse/index`);

  const projectData = await res.data;

  // Sending fetched data to the page component via props.
  return {
    props: {
      projectData,
    },
  };
};

const Index = ({ projectData }) => {
  return <Purchase projectData={projectData} />;
};

export default Index;
