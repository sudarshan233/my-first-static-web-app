import React from "../../_snowpack/pkg/react.js";
import '../../styles.css.proxy.js';
function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map((ingredient, index) => {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: ingredient.prepared ? 'prepared' : ''
    }, ingredient.name);
  });
  return /*#__PURE__*/React.createElement("ul", null, ingredientsListItems);
}
export default IngredientsList;