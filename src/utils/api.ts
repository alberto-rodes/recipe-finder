import IApiMeal from "@/types/ApiMeal";

const transformMealToRecipe = (meal: IApiMeal) => ({
  id: meal.idMeal,
  title: meal.strMeal,
  description: meal.strInstructions.slice(0, 80) + "...",
  image: meal.strMealThumb,
});

export const getRecipes = async (query: string) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    if (!data.meals) {
      return [];
    }
    return !query
      ? data.meals
          .slice(0, 3)
          .map((meal: IApiMeal) => transformMealToRecipe(meal))
      : data.meals.map((meal: IApiMeal) => transformMealToRecipe(meal));
  } catch (err) {
    console.error("Error fetching recipes:", err);
    return [];
  }
};
