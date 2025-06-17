import React from "react";
import { render, screen } from "@testing-library/react";
import { RecipeList } from "@/components";

const testRecipes = [
  {
    id: "1",
    title: "test 1",
    description: "test description 1",
    image: "test1.jpg",
  },
  {
    id: "2",
    title: "test 2",
    description: "test description 2",
    image: "test2.jpg",
  },
];

describe("RecipeList", () => {
  it("renders a list of recipe titles", () => {
    render(<RecipeList recipes={testRecipes} />);

    const card1 = screen.getByText("test 1");
    const card2 = screen.getByText("test 2");

    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
  });

  it("renders no recipes text when no data", () => {
    render(<RecipeList recipes={[]} />);

    const noRecipesText = screen.getByText("No recipes found");

    expect(noRecipesText).toBeInTheDocument();
  });

  it("renders correct number of recipes", () => {
    render(<RecipeList recipes={testRecipes} />);

    const items = screen.getAllByRole("button");

    expect(items.length).toBe(2);
  });
});
