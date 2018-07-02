import React, { Component } from "react";
import PropTypes from "prop-types";
import "./RecipeList.css";
import Recipe from "./Recipe";

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        instructions:
          "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Lutong_Bahay_-_Bolognese_Spaghetti.jpg/800px-Lutong_Bahay_-_Bolognese_Spaghetti.jpg"
      },
      {
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img:
          "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Ftagalong-milkshake.jpg%3Fitok%3DKPkiRhKR&w=800&q=85"
      },
      {
        title: "Avocado Toast",
        instructions:
          "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: [
          "2 slices of bread",
          "1 avocado",
          "1 tablespoon olive oil",
          "1 pinch of salt",
          "pepper"
        ],
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Avocado_Toast_%2812565663524%29.jpg/800px-Avocado_Toast_%2812565663524%29.jpg"
      }
    ]
  };

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ));

    return <div className="recipe-list">{recipes}</div>;
  }
}
export default RecipeList;
