import "./index.css";
import { Suspense, lazy } from "react";

const MF = lazy(() => import("mf1/App"));
const Btn = lazy(() => import("mf1/Btn"));

export const App = () => (
  <div className="main-container">
    <h2>PoC Module Federation</h2>
      <Suspense fallback={null}>
        <MF value={'parent'}/>
      </Suspense>
      <Suspense>
        <Btn />
      </Suspense>
  </div>
);
