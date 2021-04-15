import { RootPage } from "../pages/RootPage/RootPage";

export const ROOT_PAGE = "RootPage";

export const Pages = {
  [ROOT_PAGE]: RootPage,
};

export type PageType = keyof typeof Pages;
