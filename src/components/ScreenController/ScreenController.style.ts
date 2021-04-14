import { CSSProperties } from "react";

type ScreenControllerClassNames =
  | "root"
  | "name"
  | "nameContainer"
  | "r"
  | "y"
  | "a"
  | "n"
  | "rainbowLine"
  | "rdavid"
  | "powerButtonContainer";

export const ScreenControllerStyles: Record<ScreenControllerClassNames, CSSProperties> = {
  root: {
    height: "100px",
    width: "1300px",
    display: "flex",
    justifyContent: "end",
    flexDirection: "row",
    alignItems: "center",
  },
  nameContainer: {
    marginRight: "auto",
    padding: "16px",
  },
  name: {
    fontFamily: "'Zen Dots', cursive",
    fontSize: "36px",
  },
  r: {
    color: "red",
  },
  y: {
    color: "green",
  },
  a: {
    transform: "rotateZ(20deg) rotateY(15deg)",
    display: "inline-block",
    color: "blue",
  },
  n: {
    color: "black",
  },
  rainbowLine: {
    backgroundImage: "linear-gradient(45deg, red,orange,yellow,green,blue,indigo,violet)",
    height: "6px",
  },
  rdavid: {
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "4px",
    fontFamily: "'Roboto Mono', monospace",
  },
  powerButtonContainer: {},
};
