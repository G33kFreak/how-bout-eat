import RecipeHistoryItem from "../models/recipeHistoryItem"

const RECIPES_HISTORY_KEY = 'HISTORY'
const API_POINTS_LEFT_KEY = 'API_POINTS'

const getRecipesHistory = (): Array<RecipeHistoryItem> => {
    const historyJson = localStorage.getItem(RECIPES_HISTORY_KEY)

    if (historyJson !== undefined && historyJson !== null) {
        return JSON.parse(historyJson)
    } else {
        return []
    }
}

const putRecipesHistory = (newHistory: Array<RecipeHistoryItem>) => {
    localStorage.setItem(RECIPES_HISTORY_KEY, JSON.stringify(newHistory))
}


export {
    getRecipesHistory,
    putRecipesHistory,
}