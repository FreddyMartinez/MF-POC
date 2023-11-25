import "./index.css";
import './i18n'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./router";
import { ExternalConfigProvider } from "./components/external-config/ExternalConfigProvider";

const App = ({ value, basename, useHostState }: MicroFrontProps) => (
  <ExternalConfigProvider externalConfig={{ useHostState }}>
    <div className="container">
      <div>String from host: {value || "none"}</div>
      <BrowserRouter basename={basename}>
        <Routes>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  </ExternalConfigProvider>
);

export default App;
