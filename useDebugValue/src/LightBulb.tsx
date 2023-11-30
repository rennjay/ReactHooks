import { useState } from "react";
import useLightSwitch from "./useLightBulb";

export default function LightBulb() {
  const [enable, setEnable] = useState(true);
  const lightSwitch = useLightSwitch(false);
  return (
    <div
      style={{
        display: "block",
        padding: "250px",
        borderRadius: "50%",
        backgroundColor: "Yellow",
      }}
    >
      <h1>Hi, I am a LightBulb!</h1>
      <h2>Status: {lightSwitch.status ? "ON" : "OFF"}</h2>
    </div>
  );
}
