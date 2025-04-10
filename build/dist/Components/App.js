import React, { useEffect, useState } from "../../_snowpack/pkg/react.js";
import RecipeTitle from "./RecipeTitle.js";
import IngredientsList from "./IngredientsList.js";
import RecipeSteps from "./RecipeSteps.js";
function App() {
  const initialRecipe = {
    title: 'Mashed potatoes',
    feedback: {
      rating: 4.8,
      reviews: 20
    },
    ingredients: [{
      name: '3 potatoes, cut into 1/2" pieces',
      prepared: false
    }, {
      name: '4 Tbsp butter',
      prepared: false
    }, {
      name: '1/8 cup heavy cream',
      prepared: false
    }, {
      name: 'Salt',
      prepared: true
    }, {
      name: 'Pepper',
      prepared: true
    }],
    steps: [{
      step: 'Add cut potatoes to a pot of heavily salted water.'
    }, {
      step: 'Bring pot to a boil.'
    }, {
      step: 'Boil the potatoes until fork tender, about 15-20 minutes.'
    }, {
      step: 'Strain the potatoes.'
    }, {
      step: 'Return potatoes to pot.'
    }, {
      step: 'Add butter, cream, salt, and pepper to taste.'
    }, {
      step: 'Mash potatoes.'
    }, {
      step: 'Reseason and add butter and cream as desired.'
    }]
  };
  const [recipe, setRecipe] = useState(initialRecipe);
  const [prepared, setPrepared] = useState(false);
  useEffect(() => {
    setPrepared(recipe.ingredients.every(i => i.prepared));
  }, [recipe]);
  function ingredientClick(index) {
    const updatedRecipe = {
      ...recipe
    };
    updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
    setRecipe(updatedRecipe);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RecipeTitle, {
    title: recipe.title,
    feedback: recipe.feedback
  }), /*#__PURE__*/React.createElement(IngredientsList, {
    ingredients: recipe.ingredients,
    onClick: ingredientClick
  }), /*#__PURE__*/React.createElement(RecipeSteps, {
    steps: recipe.steps
  }), prepared ? /*#__PURE__*/React.createElement("h2", null, "Preparation done") : /*#__PURE__*/React.createElement("h2", null, "Continue"));
}
export default App;