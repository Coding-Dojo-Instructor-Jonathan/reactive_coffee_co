/* eslint-disable react/prop-types */
import styles from "../assets/css/NewCoffeeDrink.module.css"
import { useState } from "react"
import CoffeeDrinkService from "../services/coffeeDrink.services"

const NewCoffeeDrinkForm = (props) => {
    const [errors, setErrors] = useState({})
    const [drinkData, setDrinkData] = useState({
        "name": "",
        "coffeeBean": "",
        "description": "",
        "inStock": false,
        "price": 0.00
    })

    const handleInputUpdate = (e) => {
        const {name, value} = e.target
        console.log(name, value);
        setDrinkData((prevDrinkData) => ({...prevDrinkData, [name]: value}))
    }

    // handles the response after a user submits the drink form
    const handleSubmit = (e) => {
        e.preventDefault()

        CoffeeDrinkService.createDrink(drinkData)
            .then(() => {
                // reset the inputs
                setDrinkData({
                    "name": "",
                    "coffeeBean": "",
                    "description": "",
                    "price": 0.00
                })
            })
            .catch((err) => {setErrors(err.response.data.errors)})
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                {props.children}
                <div className={styles.inputWrapper}>
                    {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                    <label htmlFor="name">Drink Name:</label>
                    <input type="text" name="name" value={drinkData.name} onChange={(e) => handleInputUpdate(e)} />
                </div>
                <div className={styles.inputWrapper}>
                    {errors.coffeeBean && <p className={styles.error}>{errors.coffeeBean.message}</p>}
                    <label htmlFor="coffeeBean">Bean Origin:</label>
                    <input type="text" name="coffeeBean" value={drinkData.coffeeBean} onChange={(e) => handleInputUpdate(e)} />
                </div>
                <div className={styles.inputWrapper}>
                    {errors.description && <p className={styles.error}>{errors.description.message}</p>}
                    <label htmlFor="description">Describe this drink in a sentence or two:</label>
                    <textarea name="description" value={drinkData.description} onChange={(e) => handleInputUpdate(e)}></textarea>
                </div>
                <div className={styles.inputWrapper}>
                    {errors.price && <p className={styles.error}>{errors.price.message}</p>}
                    <label htmlFor="price">Price:</label>
                    <input type="number" step="0.01" name="price" value={drinkData.price} onChange={(e) => handleInputUpdate(e)} />
                </div>

                <button type="submit">Add New Drink</button>
            </form>
        </>
    )
}

export default NewCoffeeDrinkForm