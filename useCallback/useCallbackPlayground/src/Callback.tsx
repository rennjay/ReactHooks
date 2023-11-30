import { memo } from "react";

interface Props {
  color: string;
  handleColorChange: () => void;
}

function AppleFruit({ color = "Green" }: Props) {
  console.log("Rendering Apple...");
  return <h1>I am a {color} Apple!</h1>;
}

export default memo(AppleFruit);
