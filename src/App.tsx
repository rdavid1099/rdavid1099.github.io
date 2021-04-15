import React, { FC } from "react";
import { ScreenController } from "./components/ScreenController/ScreenController";
import { StateProvider } from "./components/AppStateProvider/AppStateProvider";
import { AppContainer } from "./components/AppContainer/AppContainer";
import { ScreenContainer } from "./components/ScreenContainer/ScreenContainer";
import { RootPage } from "./pages/RootPage/RootPage";
import { Helmet } from "react-helmet";

export const App: FC = () => {
  return (
    <AppContainer>
      <Helmet>
        <title>Hello World</title>
      </Helmet>
      <StateProvider>
        <ScreenContainer>
          <RootPage />
        </ScreenContainer>
        <ScreenController />
      </StateProvider>
    </AppContainer>
  );
};
