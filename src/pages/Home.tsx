import { Typography } from "@mui/material";
import { SearchBar } from "@/components";

const Home = () => {
  return (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        Recipe Finder
      </Typography>
      <SearchBar onSearch={(text) => console.log(text)} />
    </>
  );
};

export default Home;
