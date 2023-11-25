import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const mockHostState = () => ({
  counter: 0,
  add: () => {},
  subtract: () => {}
})

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <App basename={""} value="This is a stand alone app" useHostState={mockHostState} />
  </StrictMode>
);
