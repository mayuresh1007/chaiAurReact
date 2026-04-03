import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import ThemeProvider from "./contexts/ThemeProvider.jsx";
import ThemeProvider from "./contexts/themecontext.js";
import { GithubProvider } from "./contexts/GitHUbContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ThemeProvider> */}
    <GithubProvider>

      <App />
    </GithubProvider>
    {/* </ThemeProvider> */}
  </StrictMode>,
);
