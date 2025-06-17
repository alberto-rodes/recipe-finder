import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RecipeCard } from "@/components";
import { useNavigate } from "react-router-dom";

describe("RecipeCard", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    mockNavigate.mockClear();
  });

  const testRecipe = {
    id: "1",
    title: "test",
    description: "test description",
    image: "test.jpg",
  };

  it("renders title, image, and description", () => {
    render(<RecipeCard recipe={testRecipe} />);

    const title = screen.getByText("test");
    const image = screen.getByRole("img");
    const description = screen.getByText("test description");

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("calls navigate with correct id when clicked", () => {
    render(<RecipeCard recipe={testRecipe} />);

    const card = screen.getByRole("button");

    fireEvent.click(card);

    expect(mockNavigate).toHaveBeenCalledWith("/recipe/1");
  });
});
