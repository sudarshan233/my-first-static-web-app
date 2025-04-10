import React from "../../_snowpack/pkg/react.js";
function RecipeSteps(props) {
  const recipeSteps = props.steps.map((step, index) => {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, step.step);
  });
  return /*#__PURE__*/React.createElement("ol", null, recipeSteps);
}
export default RecipeSteps;