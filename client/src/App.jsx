import "./assets/css/main.css"
import { Routes, Route } from 'react-router-dom'
import AllDrinks from './views/AllDrinks'
import CreateCoffeeDrink from "./views/CreateCoffeeDrink"
import SingleDrink from "./views/SingleDrink"
import EditCoffeeDrink from "./views/EditCoffeeDrink"

function App() {

  return (
    <Routes>
      <Route path="/" element={<AllDrinks />} />
      <Route path="/drink/:id" element={<SingleDrink />} />
      <Route path="/drink/update/:id" element={<EditCoffeeDrink />} />
      <Route path="/create-drink" element={<CreateCoffeeDrink />} />
    </Routes>
  )
}

export default App