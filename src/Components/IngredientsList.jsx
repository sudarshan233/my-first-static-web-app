import React from "react";
import '../../public/styles.css';

function IngredientsList(props)
{
    const ingredientsListItems = props.ingredients.map((ingredient, index) => {
        return (
            <li key={index} className={ ingredient.prepared ? 'prepared': ''} onClick={ () => props.onClick(index) }>{ ingredient.name }</li>
        )
    })

    return(
        <ul>{ ingredientsListItems}</ul>
    )
}

export default IngredientsList;