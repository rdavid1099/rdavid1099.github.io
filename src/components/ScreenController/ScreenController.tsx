import React, { FC } from "react";
import { ScreenControllerStyles } from "./ScreenController.style";
import { PowerIcon } from "../../icons";

const RyanLogo: FC = () => {
  const { name, r, y, a, n } = ScreenControllerStyles;
  return (
    <div style={name}>
      <span style={r}>R</span>
      <span style={y}>Y</span>
      <div style={a}>A</div>
      <span style={n}>N</span>
    </div>
  );
};

export const ScreenController: FC = () => {
  return (
    <div style={ScreenControllerStyles.root}>
      <div style={ScreenControllerStyles.nameContainer}>
        <RyanLogo />
        <div style={ScreenControllerStyles.rainbowLine} />
        <div style={ScreenControllerStyles.rdavid}>@rdavid1099</div>
      </div>
      <div style={ScreenControllerStyles.powerButtonContainer}>
        <div style={ScreenControllerStyles.powerButton}>
          <div style={ScreenControllerStyles.powerIcon}>
            <PowerIcon />
          </div>
          <div style={ScreenControllerStyles.powerLight} />
        </div>
      </div>
    </div>
  );
};
