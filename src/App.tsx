import React, { FC } from "react";
import { ScreenController } from "./components/ScreenController/ScreenController";
import { StateProvider } from "./components/AppStateProvider/AppStateProvider";
import { AppContainer } from "./components/AppContainer/AppContainer";
import { ScreenContainer } from "./components/ScreenContainer/ScreenContainer";
import { Pages } from "./constants/pages";
import { useAppState } from "./hooks/useAppState";
import { Helmet } from "react-helmet";

const ActivePage: FC = () => {
  const { state: appState } = useAppState();
  const Page = Pages[appState.activePage];

  return <Page />;
};

export const App: FC = () => {
  return (
    <AppContainer>
      <Helmet>
        <title>Hello World</title>
      </Helmet>
      <StateProvider>
        <ScreenContainer>
          <ActivePage />
        </ScreenContainer>
        <ScreenController />
      </StateProvider>
    </AppContainer>
  );
};
