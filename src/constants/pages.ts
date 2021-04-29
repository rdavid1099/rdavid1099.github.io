import { RootPage } from "../pages/RootPage/RootPage";
import { ProjectsPage } from "../pages/ProjectsPage/ProjectsPage";

export const ROOT_PAGE = "RootPage";
export const PROJECTS_PAGE = "ProjectsPage";

export const Pages = {
  [ROOT_PAGE]: RootPage,
  [PROJECTS_PAGE]: ProjectsPage,
};

export type PageType = keyof typeof Pages;
