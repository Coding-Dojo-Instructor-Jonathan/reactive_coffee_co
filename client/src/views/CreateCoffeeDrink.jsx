import Header from "../components/Header"
import NewCoffeeDrinkForm from "../components/NewCoffeeDrinkForm"

const CreateCoffeeDrink = () => {
    return (
        <>
            <Header />
            <main>
                <NewCoffeeDrinkForm>
                    <h1>Create a new coffee drink</h1>
                </NewCoffeeDrinkForm>
            </main>
        </>
    )
}

export default CreateCoffeeDrink