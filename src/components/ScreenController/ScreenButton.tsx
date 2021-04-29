import React, { FC, CSSProperties, MouseEvent } from "react";

interface ScreenButtonProps {
  onClick: (event: MouseEvent) => void;
  active: boolean;
}

const basePowerLight: CSSProperties = {
  height: "8px",
  width: "8px",
  borderRadius: "100%",
  marginTop: "4%",
};

const basePowerButton: CSSProperties = {
  borderRadius: "100%",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const styles: Record<
  "powerButtonOn" | "powerButtonOff" | "powerIcon" | "powerLightOn" | "powerLightOff",
  CSSProperties
> = {
  powerButtonOn: {
    ...basePowerButton,
    boxShadow: "inset rgb(115, 115, 115) 2px 2px 7px -1px",
  },
  powerButtonOff: {
    ...basePowerButton,
    boxShadow: "rgb(115, 115, 115) 2px 2px 7px -1px",
  },
  powerIcon: {
    width: "45%",
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

export const ScreenButton: FC<ScreenButtonProps> = ({ children, onClick, active }) => {
  const { powerButtonOn, powerButtonOff, powerIcon, powerLightOn, powerLightOff } = styles;

  return (
    <a href="#" style={active ? powerButtonOn : powerButtonOff} onClick={onClick}>
      <div style={powerIcon}>{children}</div>
      <div style={active ? powerLightOn : powerLightOff} />
    </a>
  );
};
