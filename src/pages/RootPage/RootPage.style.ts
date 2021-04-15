import { CSSProperties } from "react";

type RootPageClassNames = "screenText";

export const RootPageStyles: Record<RootPageClassNames, CSSProperties> = {
  screenText: {
    color: "#3ef73e",
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: "bold",
    textShadow: "0px 0px 7px rgb(44, 185, 44)",
  },
};
