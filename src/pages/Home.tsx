import { Typography } from "@mui/material";
import { RecipeCard, SearchBar } from "@/components";

const Home = () => {
  return (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        Recipe Finder
      </Typography>
      <SearchBar onSearch={(text) => console.log(text)} />
      <RecipeCard
        id="52771"
        title="Spicy Arrabiata Penne"
        description="Bring a large pot of water to a boil."
        image="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
      />
    </>
  );
};

export default Home;
