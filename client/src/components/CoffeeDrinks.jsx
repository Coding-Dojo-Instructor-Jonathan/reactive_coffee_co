import CoffeeDrinkService from "../services/coffeeDrink.services"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from "../assets/css/CoffeeDrinks.module.css"

const CoffeeDrinks = () => {
    const [drinkList, setDrinkList] = useState([])
    
    useEffect(() => {
        CoffeeDrinkService.getAllDrinks()
            .then((drinksFromAPI) => { setDrinkList(drinksFromAPI) })
    }, [])

    const deleteDrink = (drinkId) => {
        CoffeeDrinkService.deleteDrink(drinkId)
        setDrinkList((prevDrinkList) => prevDrinkList.filter((drink) => drink._id !== drinkId))
    }
    
    return (
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Coffee Bean</th>
                        <th>Price</th>
                        <th>In Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        drinkList.map((drink, ind) => (
                            <tr key={ind}>
                                <td>
                                    <Link to={`/drink/${drink._id}`}>{drink.name}</Link>
                                </td>
                                <td>{drink.coffeeBean}</td>
                                <td>{drink.price}</td>
                                <td>{(drink.inStock) ? "True" : "False"}</td>
                                <td>
                                    <Link to={`/drink/update/${drink._id}`}>Update</Link> | <button onClick={() => {deleteDrink(drink._id)}}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default CoffeeDrinks