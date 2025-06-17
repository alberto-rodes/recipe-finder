import { useCallback, useState } from "react";
import { Typography } from "@mui/material";
import { RecipeList, SearchBar } from "@/components";
import { getRecipes } from "@/utils/api";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = useCallback((text: string) => {
    getRecipes(text).then((recipes) => {
      setRecipes(recipes);
    });
  }, []);

  return (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        Recipe Finder
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </>
  );
};

export default Home;
