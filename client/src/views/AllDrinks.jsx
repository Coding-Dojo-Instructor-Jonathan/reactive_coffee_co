import Header from "../components/Header"
import CoffeeDrinks from "../components/CoffeeDrinks"

const AllDrinks = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Our Reactive Coffee Menu</h1>
                <CoffeeDrinks />
            </main>
        </>
    )
}

export default AllDrinks