import { TextField, InputAdornment, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
    onSearch("");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value, onSearch]);

  return (
    <TextField
      fullWidth
      label="Search recipes"
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      slotProps={{
        input: {
          endAdornment: value && (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClear}
                edge="end"
                aria-label="Clear search"
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchBar;
