import React, { FC, MouseEvent } from "react";
import { ScreenControllerStyles } from "./ScreenController.style";
import { ScreenButton } from "./ScreenButton";
import { PowerIcon, ProjectsIcon } from "../../icons";
import { GITHUB_URL } from "../../constants/urls";
import { useAppState } from "../../hooks/useAppState";
import { PageType, ROOT_PAGE, PROJECTS_PAGE } from "../../constants/pages";

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
    menuButtonsContainer,
    menuButton,
  } = ScreenControllerStyles;

  const handlePowerButtonClick = (event: MouseEvent) => {
    event.preventDefault();

    const { screenOn } = appState;

    updateState({ screenOn: !screenOn });
  };

  const setActivePage = (pageName: PageType) => {
    const activePage = appState.activePage === pageName ? ROOT_PAGE : pageName;

    updateState({ activePage });
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
      <div style={menuButtonsContainer}>
        <div style={menuButton}>
          <ScreenButton onClick={() => setActivePage(PROJECTS_PAGE)} active={appState.activePage === PROJECTS_PAGE}>
            <ProjectsIcon />
          </ScreenButton>
        </div>
      </div>
      <div style={powerButtonContainer}>
        <ScreenButton onClick={handlePowerButtonClick} active={appState.screenOn}>
          <PowerIcon />
        </ScreenButton>
      </div>
    </div>
  );
};
