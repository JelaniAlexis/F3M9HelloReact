// Import React& react-dom (reactnative for mobile apps)
import * as React from "react";
import * as ReactDOMClient from "react-dom/client";

// Import components
import App from "./App";

// Display component in DOM
const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);
root.render(<App tab="home"/>);