import EditCoffeeDrinkForm from "../components/EditCoffeeDrinkForm"
import Header from "../components/Header"

const EditCoffeeDrink = () => {
    return (
        <>
            <Header />
            <main>
                <EditCoffeeDrinkForm>
                    <h1>Edit this coffee drink</h1>
                </EditCoffeeDrinkForm>
            </main>
        </>
    )
}

export default EditCoffeeDrink