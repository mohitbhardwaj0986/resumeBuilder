import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { FormDataContext } from "./FormDataContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FormDataContext>
      <App />
    </FormDataContext>
  </BrowserRouter>
);
