import { CSSProperties } from "react";

type TerminalTextClassNames = "rootContainer" | "carrot" | "cursor";

export const TerminalTextStyles: Record<TerminalTextClassNames, CSSProperties> = {
  carrot: {
    paddingRight: "8px",
  },
  rootContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    color: "#3ef73e",
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: "bold",
    textShadow: "0px 0px 7px rgb(44, 185, 44)",
    margin: "16px 0",
  },
  cursor: {
    height: "20px",
    width: "9px",
    backgroundColor: "rgb(62, 247, 62)",
    marginBottom: "-4px",
    marginLeft: "1px",
    boxShadow: "0px 0px 7px rgb(44, 185, 44)",
    display: "inline-block",
  },
};
