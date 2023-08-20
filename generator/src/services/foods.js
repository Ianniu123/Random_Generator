import axios from 'axios'
import data from '../services/data'

const baseUrl = `https://api.spoonacular.com/recipes/random?apiKey=${data.API_KEY}`

const getFood = async (numFoods) => {
    const tags = ""
    const response = await axios.get(`${baseUrl}&number=${numFoods}&tags=${tags}`)
    return response.data.recipes
}

export default { getFood }