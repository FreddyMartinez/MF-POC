import { FirstForm } from "./modules/firstStep/firstStep";
import { Suspense, lazy } from "react";

const SecondForm = lazy(() => import("./modules/secondStep/secondStep"));

export const routes = [
  {
    path: "/",
    element: <FirstForm />,
  },
  {
    path: "second",
    element: <Suspense><SecondForm /></Suspense>,
  },
];

