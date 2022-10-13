import { ContactContextProvider } from "context/ContactContext";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContactContextProvider>
      <App />
    </ContactContextProvider>
  </StrictMode>
);
