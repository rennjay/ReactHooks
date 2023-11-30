import { createContext } from "react";
import { Coffee } from "./Coffee";

export const CoffeeContext = createContext<Coffee>({
  brand: "Nescafe",
  flavor: "Brown",
  drink: () => alert("Sarap ng brown!"),
});

export default CoffeeContext;
