import { useEffect, useState } from "react"
import Header from "../components/Header"
import { useParams, useNavigate } from "react-router-dom"
import CoffeeDrinkService from "../services/coffeeDrink.services"
import { Link } from "react-router-dom"
import buttonStyles from "../assets/css/Buttons.module.css"
import moduleStyles from "../assets/css/CoffeeDrinks.module.css"

const SingleDrink = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [drink, setDrink] = useState({})

    useEffect(() => {
        CoffeeDrinkService.getOneDrink(id)
            .then((res) => { setDrink(res) })
    }, [])

    const deleteDrink = () => {
        CoffeeDrinkService.deleteDrink(id)
            .then(() => { navigate("/") })
    }

    return (
        <>
            <Header />
            <main>
                <h1>{drink.name}</h1>
                <p><b>Coffee Origin:</b> {drink.coffeeBean}</p>
                <p><b>Description:</b> {drink.description}</p>
                <p><b>Price:</b> ${drink.price}</p>
                <div className={moduleStyles.buttonWrapper}></div>
                <Link to={`/drink/update/${drink._id}`} className={buttonStyles.yellowCTA}>Update</Link>
                <button onClick={deleteDrink} className={buttonStyles.redCTA}>Delete {drink.name}</button>
            </main>
        </>
    )
}

export default SingleDrink