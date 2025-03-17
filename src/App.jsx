import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1 className="text-6xl">Hot hot cold coffee: {coffees.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {coffees.map((coffeeData) => (
          <CoffeeCard
            key={coffeeData._id}
            coffee={coffeeData}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
