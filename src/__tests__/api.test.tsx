import IApiMeal from "@/types/ApiMeal";
import { getRecipes } from "@/utils/api";

const mockMeal: IApiMeal = {
  idMeal: "1",
  strMeal: "test",
  strInstructions: "test description",
  strMealThumb: "test.jpg",
};

describe("getRecipes", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("returns recipe when query is not empty", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: async () => ({
        meals: [mockMeal],
      }),
    });

    const recipes = await getRecipes("test");

    expect(recipes).toEqual([
      {
        id: "1",
        title: "test",
        description: "test description...",
        image: "test.jpg",
      },
    ]);
  });

  it("returns only first 3 meals when query is empty", async () => {
    const meals = [
      mockMeal,
      { ...mockMeal, idMeal: "2" },
      { ...mockMeal, idMeal: "3" },
      { ...mockMeal, idMeal: "4" },
    ];
    (fetch as jest.Mock).mockResolvedValue({
      json: async () => ({
        meals,
      }),
    });

    const recipes = await getRecipes("");

    expect(recipes.length).toBe(3);
    expect(recipes[0].id).toBe("1");
  });

  it("returns empty array if no meals found", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: async () => ({
        meals: null,
      }),
    });

    const recipes = await getRecipes("test");

    expect(recipes).toEqual([]);
  });

  it("logs error if fetch throws an error", async () => {
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    (fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

    const recipes = await getRecipes("test");

    expect(recipes).toEqual([]);
    expect(errorSpy).toHaveBeenCalledWith(
      "Error fetching recipes:",
      new Error("Network error")
    );
  });
});
