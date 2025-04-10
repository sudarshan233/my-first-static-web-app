import React from "../../_snowpack/pkg/react.js";
import RecipeTitle from "./RecipeTitle.js";
import IngredientsList from "./IngredientsList.js";
import RecipeSteps from "./RecipeSteps.js";
const recipe = {
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
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RecipeTitle, {
    title: recipe.title,
    feedback: recipe.feedback
  }), /*#__PURE__*/React.createElement(IngredientsList, {
    ingredients: recipe.ingredients
  }), /*#__PURE__*/React.createElement(RecipeSteps, {
    steps: recipe.steps
  }));
}
export default App;