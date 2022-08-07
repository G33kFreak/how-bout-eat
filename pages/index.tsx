import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { getRandomRecipe } from '../api/endpoints'
import { HistoryItem } from '../components/historyItem'
import { generateBadges, RecipeBadge } from '../components/recipeBadge'
import Recipe from '../models/recipe'
import RecipeHistoryItem from '../models/recipeHistoryItem'
import { getRecipesHistory, putRecipesHistory } from '../services/localStorage'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [recipe, setRecipe] = useState<Recipe>()
  const [isLoading, setLoading] = useState<boolean>(true)
  const [recipesHistory, setRecipesHistory] = useState<Array<RecipeHistoryItem>>([])

  const updateRecipesHistory = (localHistory: Array<RecipeHistoryItem>, newRecipe: Recipe) => {
    localHistory.push(newRecipe)

    if (localHistory.length > 10) {
      localHistory.shift()
    }

    putRecipesHistory(localHistory)
    setRecipesHistory(localHistory)
  }

  const loadRecipes = async () => {
    try {
      const history = getRecipesHistory()
      const newRecipe = await getRandomRecipe()

      updateRecipesHistory(history, newRecipe)

      setRecipe(newRecipe)
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  const onNextPressed = () => {
    setLoading(true)
  }

  const onShowPressed = () => {
    window.open(recipe?.sourceUrl, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    if (isLoading) {
      loadRecipes()
    }
  }, [isLoading])



  return (
    <div className={styles.main}>
      <div className={styles.recipe__container}>
        {!isLoading && recipe ? <h3 className={styles.recipe__title}>{recipe.title}</h3> : null}
        <div>
          {!isLoading && recipe ? <img className={styles.recipe__image} src={recipe.image} alt="" /> : null}
          {!isLoading && recipe ?
            <div className={styles.recipe__badges}>
              {generateBadges(recipe)}
            </div>
            : null
          }
        </div>
        <div className={styles.buttons__container}>
          <Button className={styles.button} onClick={onShowPressed} variant="warning">Show</Button>
          <Button className={styles.button} onClick={onNextPressed} variant="success">Next</Button>
        </div>
      </div>
      <div className={styles.history__container}>
        {recipesHistory.reverse().map((item, index) => <HistoryItem item={item} key={index} />)}
      </div>
    </div>
  )
}

export default Home
