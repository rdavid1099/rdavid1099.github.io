import React, { FC, MouseEvent } from "react";
import { ScreenControllerStyles } from "./ScreenController.style";
import { PowerIcon } from "../../icons";
import { GITHUB_URL } from "../../constants/urls";
import { useAppState } from "../../hooks/useAppState";

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
  const { state: appState, updateState } = useAppState();
  const {
    root,
    nameContainer,
    rainbowLine,
    rdavid,
    powerButtonContainer,
    powerButtonOn,
    powerButtonOff,
    powerIcon,
    powerLightOn,
    powerLightOff,
  } = ScreenControllerStyles;

  const handlePowerButtonClick = (event: MouseEvent) => {
    event.preventDefault();

    const { screenOn } = appState;

    updateState({ screenOn: !screenOn });
  };

  return (
    <div style={root}>
      <div style={nameContainer}>
        <RyanLogo />
        <div style={rainbowLine} />
        <div style={rdavid}>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
            @rdavid1099
          </a>
        </div>
      </div>
      <div style={powerButtonContainer}>
        <a href="#" style={appState.screenOn ? powerButtonOn : powerButtonOff} onClick={handlePowerButtonClick}>
          <div style={powerIcon}>
            <PowerIcon />
          </div>
          <div style={appState.screenOn ? powerLightOn : powerLightOff} />
        </a>
      </div>
    </div>
  );
};
