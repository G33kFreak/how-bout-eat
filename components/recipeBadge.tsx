import React from "react"
import Recipe from "../models/recipe"
import styles from '../styles/Home.module.css'

export const generateBadges = (recipe: Recipe) => {
    const badgeTitles: Array<string> = []
    const badgeComponents: Array<any> = []

    for (const key in recipe) {
        const value = recipe[key as keyof Recipe]

        if (typeof value === "boolean" && value) {
            const valueToTitle = key
                .replace(/([a-z])([A-Z])/g, '$1 $2')
                .toLowerCase();

            badgeTitles.push(valueToTitle.charAt(0).toUpperCase() + valueToTitle.slice(1))
        }
    }

    badgeTitles.forEach((item, index) => badgeComponents.push(<RecipeBadge key={index} title={item} />))

    return badgeComponents
}

export const RecipeBadge = ({ title }: { title: string }) => {
    return (
        <div className={styles.recipe__badge}>
            <p className={styles.recipe__badge__text}>{title}</p>
        </div>
    )
}