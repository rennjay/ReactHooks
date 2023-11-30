import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppleFruit from "./Callback";

let newColor: string = "Blue";
function App() {
  const [color, setColor] = useState("");
  console.log("App is rendering...color", color);

  function handleClick(color: string) {
    setColor(color + Math.random());
    handleColorChange(color);
  }

  const handleColorChange = useCallback(function (color: string) {
    console.log("Color change trigerred", color);
  }, []);

  return (
    <>
      <button
        onClick={() => handleClick("blue")}
        style={{ background: "skyblue" }}
      >
        Set color blue
      </button>
      <button onClick={() => handleClick("red")} style={{ background: "red" }}>
        Set color red
      </button>
      <AppleFruit handleColorChange={handleColorChange} />
    </>
  );
}

export default App;
