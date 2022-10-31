import { ChangeEvent, KeyboardEvent, useState } from "react";
import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import ClearIcon from "@material-ui/icons/Clear";

import * as S from "./styles";

type SearchProps = {
  searchQuery: string;
  label: string;
  placeholder?: string;
  onSearch: (value: string) => void;
};

const Search = ({ searchQuery, onSearch, placeholder, label }: SearchProps) => {
  const [value, setValue] = useState(searchQuery);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(value);
    }
  };

  const handleClear = () => {
    setValue("");
    onSearch("");
  };

  return (
    <>
      <S.WhiteBackgroundGrid item xs={12}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="search" variant="outlined">
            {label}
          </InputLabel>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                {value && (
                  <>
                    <ClearIcon
                      style={{ cursor: "pointer" }}
                      onClick={handleClear}
                    />
                    <SearchIcon
                      data-testid="search-icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => onSearch(value)}
                    />
                  </>
                )}
              </InputAdornment>
            }
            id="search"
            data-testid="search-input"
            color="primary"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder={placeholder}
            fullWidth
            labelWidth={148}
            value={value}
          />
        </FormControl>
      </S.WhiteBackgroundGrid>
    </>
  );
};

export default Search;
