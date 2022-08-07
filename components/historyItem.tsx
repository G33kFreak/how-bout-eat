import RecipeHistoryItem from "../models/recipeHistoryItem";
import styles from '../styles/Home.module.css'

export const HistoryItem = ({ item }: { item: RecipeHistoryItem }) => {
    return (
        <div className={styles.history__item__container}>
            <img className={styles.history__item__img} src={item.image} />
            <p className={styles.history__item__text}>{item.title}</p>
        </div>
    )
}