import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Hello from "./hello";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hello
      user={{
        username: "mohammad",
        avatar: "http://",
        style: {
          backgroundColor: "green",
          color: "white",
        },
      }}
    />
  </StrictMode>
);
