// Here's a basic React-based project
import { createRoot } from "react-dom/client";

import { useState, useEffect } from "react";

let root = createRoot(document.getElementById("app"));

root.render(<App />);

function App() {
  return <h1>Hello world!</h1>;
}
