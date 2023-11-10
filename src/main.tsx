import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { NavigationProvider } from "./contexts/NavigationContext.tsx";
import { FilterSearchProvider } from "./contexts/FilterSearchContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <NavigationProvider>
        <FilterSearchProvider>
          <App />
        </FilterSearchProvider>
      </NavigationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
