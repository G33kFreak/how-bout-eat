export default interface Recipe {
    id: number
    title: string
    image: string
    readyInMinutes: number
    sourceUrl: string
    healthScore: number
    dairyFree: boolean
    glutenFree: boolean
    ketogenic: boolean
    lowFodmap: boolean
    sustainable: boolean
    vegan: boolean
    vegetarian: boolean
    veryHealthy: boolean
    veryPopular: boolean
    dishTypes: Array<String>
}