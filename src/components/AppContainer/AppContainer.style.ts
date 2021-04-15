import { CSSProperties } from "react";

type AppContainerClassNames = "mainContainer";

export const AppContainerStyles: Record<AppContainerClassNames, CSSProperties> = {
  mainContainer: {
    display: "flex",
    position: "relative",
    flexFlow: "column nowrap",
    maxWidth: "calc(100% - 32px)",
    minHeight: "100%",
    alignItems: "center",
    marginLeft: "auto",
    paddingTop: "60px",
    marginRight: "auto",
  },
};
