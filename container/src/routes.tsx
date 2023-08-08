import { createContext } from "react";
import { HomeComponent } from "./components/home";
import { FirstBlock } from "./components/firstBlock";


export const routes = [
  {
    path: "/",
    element: <HomeComponent />,
  },
  {
    path: "first-block",
    element: <FirstBlock />,
  },
];

export const routesContext = createContext(undefined as unknown as (routes: RoutProps[]) => void);

export interface RoutProps {
  path: string;
  element: JSX.Element;
}