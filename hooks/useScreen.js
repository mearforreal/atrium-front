import { useViewportSize } from "@mantine/hooks";
import { useCallback, useMemo } from "react";

export const SCREEN_PHONE = "phone";
export const SCREEN_TABLET = "tablet";
export const SCREEN_TABLET_SM = "tablet_sm";
export const SCREEN_DESKTOP = "desktop";

export default function useScreen() {
  const { width } = useViewportSize();

  const media = {
    [SCREEN_PHONE]: 510,
    [SCREEN_TABLET_SM]: 730,
    [SCREEN_TABLET]: 850,
    [SCREEN_DESKTOP]: 850,
  };

  const getDeviceType = useCallback(() => {
    if (width <= media[SCREEN_PHONE]) {
      return SCREEN_PHONE;
    }
    if (width <= media[SCREEN_TABLET_SM]) {
      return SCREEN_TABLET_SM;
    }

    if (width < media[SCREEN_DESKTOP]) {
      return SCREEN_TABLET;
    }
    return SCREEN_DESKTOP;
  }, [media, width]);

  const isPhone = useMemo(
    () => getDeviceType() === SCREEN_PHONE,
    [getDeviceType]
  );
  const isTablet = useMemo(
    () => getDeviceType() === SCREEN_TABLET,
    [getDeviceType]
  );
  const isTabletSM = useMemo(
    () => getDeviceType() === SCREEN_TABLET_SM,
    [getDeviceType]
  );
  const isDesktop = useMemo(
    () => getDeviceType() === SCREEN_DESKTOP,
    [getDeviceType]
  );

  return {
    isPhone,
    isTablet,
    isTabletSM,
    isDesktop,
  };
}
