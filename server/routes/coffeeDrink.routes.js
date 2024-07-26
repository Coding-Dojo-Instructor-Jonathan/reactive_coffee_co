import CoffeeDrinkController from "../controllers/coffeeDrink.controller.js"
import { Router } from "express"

const coffeeDrinkRouter = Router()

coffeeDrinkRouter.route("/coffee")
    .post(CoffeeDrinkController.create)
    .get(CoffeeDrinkController.getAll)

coffeeDrinkRouter.route("/coffee/:id")
    .get(CoffeeDrinkController.getOne)
    .patch(CoffeeDrinkController.update)
    .delete(CoffeeDrinkController.delete)

export default coffeeDrinkRouter