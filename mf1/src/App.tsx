import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./router";

const App = ({ value, basename }: { value?: string; basename: string }) => (
  <div className="container">
    <div>String from host: {value || "none"}</div>
    <BrowserRouter basename={basename}>
      <Routes>
        {routes("").map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
