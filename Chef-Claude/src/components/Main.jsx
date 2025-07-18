import React from 'react'
import '../index.css'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientList from './IngredientList'
import { getRecipeFromMistral } from '../ai'

export default function Main() {

    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato pasta"])
    const [recipeShown, setRecipeShown] = React.useState(false)
    

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        } else {
            alert("Please enter an ingredient.")
        }
    }

    function toggleRecipeShown() {
        setRecipeShown(prevState => !prevState)
    }
 




    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && 
            <IngredientList 
                ingredients={ingredients} 
                toggleRecipeShown = {toggleRecipeShown} />
            }
            {
            recipeShown && <ClaudeRecipe/>
            }

        </main>
    )
}
