import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import "./index.css";
import { routes as baseRoutes, routesContext } from "./routes";
import { useState } from "react";

interface RoutParams {
  path: string;
  element: JSX.Element;
}

export const App = () => {
  const [routes, setRoutes] = useState(baseRoutes);

  function updateRoutes(routes: RoutParams[]) {
    console.log("__________________ updated__________")
    console.log(routes);
    setRoutes([...baseRoutes, ...routes]);
  }

  return (
    <div className="main-container">
      <h2>PoC Module Federation</h2>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/first-block">First block</Link>
            </li>
            <li>
              <Link to="/second-block">Second block</Link>
            </li>
          </ul>
        </nav>
        <routesContext.Provider value={updateRoutes}>
          <Routes>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Routes>
        </routesContext.Provider>
      </BrowserRouter>
    </div>
  );
};
