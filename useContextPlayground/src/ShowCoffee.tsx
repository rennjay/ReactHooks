import { useContext } from "react";
import CoffeeDetails from "./CoffeeDetails";
import CoffeeContext from "./CoffeeContext";

export default function ShowCoffee() {
  const coffeeContext = useContext(CoffeeContext);
  console.log(coffeeContext);
  return (
    <>
      <h1>Your Coffee</h1>
      <CoffeeDetails />
    </>
  );
}
