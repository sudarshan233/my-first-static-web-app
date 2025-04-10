import React from "react";

function RecipeSteps(props)
{
    const recipeSteps = props.steps.map((step, index) => {
        return(
            <li key={index}>{step.step}</li>
        );
    })

    return(
        <ol>
            {recipeSteps}
        </ol>
    );
}

export default RecipeSteps;