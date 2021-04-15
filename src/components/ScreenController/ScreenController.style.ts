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
  | "menuButtonsContainer"
  | "menuButton"
  | "powerButtonContainer";

export const ScreenControllerStyles: Record<ScreenControllerClassNames, CSSProperties> = {
  root: {
    height: "100px",
    width: "1300px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  nameContainer: {
    padding: "16px",
  },
  name: {
    fontFamily: "'Zen Dots', cursive",
    fontSize: "36px",
    textShadow: "1px 1px 0px #828282",
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
  powerButtonContainer: {
    paddingRight: "16px",
    height: "72px",
    width: "72px",
  },
  menuButtonsContainer: {
    borderRadius: "20px",
    width: "170px",
    height: "65px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "rgb(115, 115, 115) 1px 1px 6px -2px inset",
  },
  menuButton: {
    height: "50px",
    width: "50px",
  },
};
