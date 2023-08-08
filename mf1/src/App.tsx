import "./index.css";
import { BrowserRouter, Route, Routes, useInRouterContext } from "react-router-dom";
import { routes } from "./router";
import { useEffect } from "react";

const App = ({ routerUpdater }: { routerUpdater?: (routes: unknown[]) => null }) => {
  const isInsideRouter = useInRouterContext()

  useEffect(() => {
    if (routerUpdater) {
      routerUpdater(routes)
    }
  }, [])

  if (isInsideRouter) {
    return (
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    )
  }
  return (
  <div className="container">
    <BrowserRouter>
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </div>
)};

export default App;
