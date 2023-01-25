import "../styles/globals.scss";
import "swiper/css";
import { YMaps } from "react-yandex-maps";
import { DataContext, DataProvider } from "../context/DataContext";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import axios from "axios";
import { ModalsProvider } from "@mantine/modals";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logoWhite from "../assets/logo_white.svg";

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(router.isReady);
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 5000);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoading(false);
    }
  }, []);

  return (
    loading && (
      <div className="spinner-wrapper">
        <div className="spinner">
          <img src={logoWhite.src} alt="logoWhites" />
        </div>
      </div>
    )
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Loading />
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <ModalsProvider>
          <NotificationsProvider>
            <DataProvider>
              <YMaps>
                <Component {...pageProps} />
              </YMaps>
            </DataProvider>
          </NotificationsProvider>
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}
