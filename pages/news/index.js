import axios from "axios";
import News from "./News";
import { PREFIX_API } from "../../config";
export const getStaticProps = async () => {
  // Fetching data from jsonplaceholder.

  const resLateNews = await axios.get(`${PREFIX_API}news/latest`);
  const lateNews = await resLateNews.data;

  const resmore = await axios.get(`${PREFIX_API}news/more`);
  const moreNews = await resmore.data;

  return {
    props: {
      lateNews,
      moreNews,
    },
    revalidate: 10,
  };
};

const Index = ({ lateNews, moreNews }) => {
  return (
    <div>
      <News lateNews={lateNews} moreNews={moreNews} />
    </div>
  );
};

export default Index;
