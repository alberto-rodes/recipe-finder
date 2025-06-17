import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IRecipe } from "@/types";
import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";

interface RecipeCardProps {
  recipe: IRecipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { id, title, description, image } = recipe;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <Card
      component="button"
      onClick={handleClick}
      className="recipe-card"
      variant="outlined"
      aria-label={`View recipe: ${title}`}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className="recipe-card-image"
      />
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            className="recipe-card-description"
          >
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
