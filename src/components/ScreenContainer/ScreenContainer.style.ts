import { CSSProperties } from "react";

type ScreenContainerClassNames = "screenOn" | "screenOff" | "viewport";

const baseScreen: CSSProperties = {
  borderRadius: "14px",
  height: "720px",
  width: "1080px",
};

export const ScreenContainerStyles: Record<ScreenContainerClassNames, CSSProperties> = {
  screenOn: {
    ...baseScreen,
    backgroundColor: "#2d2c2c",
  },
  screenOff: {
    ...baseScreen,
    backgroundColor: "#171717",
  },
  viewport: {
    margin: "16px",
    padding: "16px",
  },
};
