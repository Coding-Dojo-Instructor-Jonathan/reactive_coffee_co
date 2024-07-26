/* eslint-disable no-useless-catch */
import axios from "axios";

const http = axios.create({
    "baseURL": "http://localhost:8000/api/coffee"
})

const CoffeeDrinkService = {
    "createDrink": async (drinkData) => {
        try {
            const res = await http.post("/", drinkData)
            return res.data
        } catch(err) { throw err }
    },
    "getAllDrinks": async () => {
        try {
            const res = await http.get("/")
            return res.data
        } catch(err) { throw err }
    },
    "getOneDrink": async (id) => {
        try {
            const res = await http.get(`/${id}`)
            return res.data
        } catch(err) { throw err }
    },
    "updateDrink": async (id, data) => {
        try {
            const res = await http.patch(`/${id}`, data)
            return res.data
        } catch(err) { throw err }
    },
    "deleteDrink": async (id) => {
        try {
            const res = await http.delete(`/${id}`)
            return res.data
        } catch(err) { throw err }
    }
}

export default CoffeeDrinkService