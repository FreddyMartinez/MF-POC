import "./index.css";
import { Suspense, lazy } from "react";

const MF = lazy(() => import("mf1/App"));

export const App = () => (
  <div className="main-container">
    <h2>PoC Module Federation</h2>
    <Suspense fallback={null}>
      <MF />
    </Suspense>
  </div>
);
