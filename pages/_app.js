import "../styles/globals.scss";
import "swiper/css";
import { YMaps } from "react-yandex-maps";
import { DataContext, DataProvider } from "../context/DataContext";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import axios from "axios";
export default function App({ Component, pageProps }) {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <NotificationsProvider>
        <DataProvider>
          <YMaps>
            <Component {...pageProps} />
          </YMaps>
        </DataProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}
