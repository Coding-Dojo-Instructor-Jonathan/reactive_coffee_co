/* eslint-disable react/prop-types */
import styles from "../assets/css/NewCoffeeDrink.module.css"
import { useEffect, useState } from "react"
import CoffeeDrinkService from "../services/coffeeDrink.services"
import { useParams } from "react-router-dom"

const EditCoffeeDrinkForm = (props) => {
    const {id} = useParams();
    const [drinkData, setDrinkData] = useState({})

    useEffect(() => {
        CoffeeDrinkService.getOneDrink(id)
            .then((res) => { setDrinkData(res) })
    }, [])

    const handleInputUpdate = (e) => {
        const {name, value} = e.target
        console.log(name, value);
        setDrinkData((prevDrinkData) => ({...prevDrinkData, [name]: value}))
    }

    // handles the response after a user submits the drink form
    const handleSubmit = (e) => {
        e.preventDefault()

        CoffeeDrinkService.updateDrink(id, drinkData)

        // reset the inputs
        setDrinkData({
            "name": "",
            "coffeeBean": "",
            "description": "",
            "price": 0.00
        })
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                {props.children}
                <div className={styles.inputWrapper}>
                    <label htmlFor="name">Drink Name:</label>
                    <input type="text" name="name" value={drinkData.name} onChange={(e) => handleInputUpdate(e)} />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="coffeeBean">Bean Origin:</label>
                    <input type="text" name="coffeeBean" value={drinkData.coffeeBean} onChange={(e) => handleInputUpdate(e)} />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="description">Describe this drink in a sentence or two:</label>
                    <textarea name="description" value={drinkData.description} onChange={(e) => handleInputUpdate(e)}></textarea>
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="price">Price:</label>
                    <input type="number" step="0.01" name="price" value={drinkData.price} onChange={(e) => handleInputUpdate(e)} />
                </div>

                <button type="submit">Edit {drinkData.name}</button>
            </form>
        </>
    )
}

export default EditCoffeeDrinkForm