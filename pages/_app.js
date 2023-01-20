import "../styles/globals.scss";
import "swiper/css";
import { YMaps } from "react-yandex-maps";
import { DataContext, DataProvider } from "../context/DataContext";

import axios from "axios";
export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <YMaps>
        <Component {...pageProps} />
      </YMaps>
    </DataProvider>
  );
}
