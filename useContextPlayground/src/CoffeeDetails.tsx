import { useContext } from "react";
import { CoffeeContext } from "./CoffeeContext";

export default function CoffeeDetails() {
  const coffeeContext = useContext(CoffeeContext);
  coffeeContext.brand = "Kopiko";
  return (
    <>
      <h2>Brand: {coffeeContext.brand}</h2>
      <h2>Flavor: {coffeeContext.flavor}</h2>
      <button onClick={coffeeContext.drink}>Drink</button>
    </>
  );
}
