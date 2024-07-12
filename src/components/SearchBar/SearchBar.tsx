import { ChangeEvent, useState } from "react";

import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import "./SearchBar.css"

interface SearchBarProps {
  onChangeCallback: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChangeCallback }) => {
  const [value, setValue] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChangeCallback && onChangeCallback(inputValue);
  };

  return (
    <div className="search-bar">
      <TextField
        label="Search"
        type="search"
        variant="outlined"
        value={value}
        onChange={handleChange}
        placeholder="Search"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
