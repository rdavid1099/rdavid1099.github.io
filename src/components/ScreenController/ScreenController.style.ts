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
  | "powerButtonContainer"
  | "powerButtonOn"
  | "powerButtonOff"
  | "powerIcon"
  | "powerLightOn"
  | "powerLightOff";

const basePowerLight: CSSProperties = {
  height: "8px",
  width: "8px",
  borderRadius: "100%",
  marginTop: "4px",
};

const basePowerButton: CSSProperties = {
  borderRadius: "100%",
  height: "72px",
  width: "72px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

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
  },
  powerButtonOn: {
    ...basePowerButton,
    boxShadow: "inset rgb(115, 115, 115) 2px 2px 7px -1px",
  },
  powerButtonOff: {
    ...basePowerButton,
    boxShadow: "rgb(115, 115, 115) 2px 2px 7px -1px",
  },
  powerIcon: {
    width: "32px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  powerLightOn: {
    ...basePowerLight,
    backgroundColor: "#2a662a",
    boxShadow: "0px 0px 10px green",
  },
  powerLightOff: {
    ...basePowerLight,
    backgroundColor: "#000000",
  },
};
