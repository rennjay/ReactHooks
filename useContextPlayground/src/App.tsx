import { createContext } from "react";
import "./App.css";
import { Coffee } from "./Coffee";
import ShowCoffee from "./ShowCoffee";
import { CoffeeContext } from "./CoffeeContext";

function App() {
  const coffee: Coffee = {
    brand: "Nescafe",
    flavor: "Original",
    drink: () => alert("Sarap ng original!"),
  };

  return (
    <>
      <CoffeeContext.Provider value={coffee}>
        <ShowCoffee />
      </CoffeeContext.Provider>
    </>
  );
}

export default App;
