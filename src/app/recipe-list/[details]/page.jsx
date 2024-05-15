import RecipeDetailsItem from '@/components/recipe-details';
import React from 'react'

async function fetchRecieDetails(currentRecipeId) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
        const data = await apiResponse.json();
    
        return data
    } catch (e) {
        throw new Error(e);
    }
    
}

const detailsPage = async ({params}) => {

    const getRecipeDetails = await fetchRecieDetails(params?.details)

    return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />

}

export default detailsPage