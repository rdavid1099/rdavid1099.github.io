import { CSSProperties } from "react";

type ScreenContainerClassNames = "root" | "viewport";

export const ScreenContainerStyles: Record<ScreenContainerClassNames, CSSProperties> = {
  root: {
    backgroundColor: "#2d2c2c",
    borderRadius: "14px",
    height: "720px",
    width: "1080px",
  },
  viewport: {
    margin: "16px",
    padding: "16px",
  },
};
