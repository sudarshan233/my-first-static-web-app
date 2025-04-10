import React from "../_snowpack/pkg/react.js";
import { createRoot } from "../_snowpack/pkg/react-dom/client.js";
import App from "./Components/App.js";
const root = createRoot(document.getElementById('app'));
root.render(/*#__PURE__*/React.createElement(App, null));