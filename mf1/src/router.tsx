import { FirstForm } from "./modules/firstStep/firstStep";
import { Suspense, lazy } from "react";

const SecondForm = lazy(() => import("./modules/secondStep/secondStep"));

export const routes = (prefix: string) => [
  {
    path: prefix + "/",
    element: <FirstForm />,
  },
  {
    path: prefix + "second",
    element: <Suspense><SecondForm /></Suspense>,
  },
];

