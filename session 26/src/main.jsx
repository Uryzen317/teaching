import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <>
    <App />
    <App />
    <App />
    <App />
    <App />
  </>
);

function App() {
  // useState
  const [counter, setCounter] = useState(0);
  // const [username, setUsername] = useState("");
  // const [firstname, setFirstanem] = useState("");
  // const [role, setRole] = useState("admin");
  // const [isLoggedin, setIsLoggedint] = useState(false);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        gap: "24px",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "48px" }}>{counter}</h1>
      <h1 style={{ textAlign: "center", fontSize: "48px" }}>{counter}</h1>
      <h1 style={{ textAlign: "center", fontSize: "48px" }}>{counter}</h1>
      <h1 style={{ textAlign: "center", fontSize: "48px" }}>{counter}</h1>
      <h1 style={{ textAlign: "center", fontSize: "48px" }}>{counter + 1}</h1>
      <h1 style={{ textAlign: "center", fontSize: "48px" }}>{counter * 1}</h1>
      <h1 style={{ textAlign: "center", fontSize: "48px" }}>{counter / 1}</h1>
      <h1 style={{ textAlign: "center", fontSize: "48px" }}>{counter % 1}</h1>
      <h1 style={{ textAlign: "center", fontSize: "48px" }}>{counter}</h1>
      <button
        style={{ padding: "8px 24px", fontWeight: "bold", fontSize: "24px" }}
        onClick={() => {
          setCounter(counter + 1);

          setTimeout(() => {
            alert(counter);
          }, 1000);

          // setCounter(counter + 1); // 0 + 1
          // setCounter(counter + 1); // 0 + 1
          // setCounter(counter + 1); // 0 + 1
        }}
      >
        Add 1
      </button>
    </main>
  );
}
