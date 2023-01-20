import axios from "axios";
import Portfolio from "./Portfolio";
import { PREFIX_API } from "../../config";

export const getStaticProps = async () => {
  const res = await axios.get(`${PREFIX_API}project/home-page`);

  const projectData = await res.data;

  const resOversea = await axios.get(`${PREFIX_API}oversea/index`);

  const oversea = await resOversea.data;

  return {
    props: {
      projectData,
      oversea,
    },
  };
};

const PortfolioIndex = ({ projectData, oversea }) => {
  return  <Portfolio projectData={projectData} oversea={oversea} />;
};

export default PortfolioIndex;
