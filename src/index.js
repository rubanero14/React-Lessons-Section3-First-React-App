// This import should be imported wheneve the file has JSX codes
import React from "react";

// This import is to initiate the React project and compiling to browser based codes
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
