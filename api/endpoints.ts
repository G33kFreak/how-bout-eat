import Recipe from "../models/recipe"
import apiClient from "./apiClient"

export const getRandomRecipe = async (number: number = 1): Promise<Recipe> => {
    const response = await apiClient.get('recipes/random', {
        params: { number }
    })
    return response.data['recipes'][0]
}
