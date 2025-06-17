import React from "react";
import { RecipeCard } from "@/components";
import { IRecipe } from "@/types";
import "./RecipeList.css";

interface RecipeListProps {
  recipes: IRecipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  return !recipes.length ? (
    <p className="recipe-list-empty">No recipes found</p>
  ) : (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <React.Fragment key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default RecipeList;
