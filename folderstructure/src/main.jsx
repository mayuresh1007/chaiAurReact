import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Mayuresh from "./components/mayuresh.jsx";
import MayureshCode from "./components/MayureshCode.jsx";

const ReactElementByMe = React.createElement("a", {
  href: "https://google.com",
  target:"_blank"
},'go to google');

const ReactElementByMe1 = React.createElement("input", {
 type:'text',
 placeholder:"type here"
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Mayuresh /> */}
    {/* <MayureshCode /> */}
    {/* {ReactElementByMe} */}
  </StrictMode>,
);
