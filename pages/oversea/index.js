import React from "react";
import OverSeaTavous from "./OverSeaTavous";
import axios from "axios";
import { PREFIX_API } from "../../config";

export const getStaticProps = async () => {
  const res = await axios.get(`${PREFIX_API}oversea/index`);

  const oversea = await res.data;

  return {
    props: {
      oversea,
    },
    revalidate: 10,
  };
};

const Index = ({ oversea }) => {
  // console.log(oversea);
  return (
    <div>
      {" "}
      <OverSeaTavous oversea={oversea} />
    </div>
  );
};

export default Index;
