import { useDebugValue } from "react";

interface LightSwitch {
  status: boolean;
}

export default function useLightSwitch(lightSwitch: boolean) {
  useDebugValue(lightSwitch);
  const result: LightSwitch = {
    status: lightSwitch,
  };
  return result;
}
