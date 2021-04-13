import React, { FC } from "react";
import { StateProvider } from "./components/AppStateProvider/AppStateProvider";
import { AppContainer } from "./components/AppContainer/AppContainer";
import { RootPage } from "./pages/RootPage/RootPage";

export const App: FC = () => {
  return (
    <AppContainer>
      <StateProvider>
        <RootPage />
      </StateProvider>
    </AppContainer>
  );
};
