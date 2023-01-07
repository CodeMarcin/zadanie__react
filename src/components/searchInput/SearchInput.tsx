import { useState } from "react";

import { Container, TextField } from "@mui/material";

import { SEARCH_INPUT_LABELS } from "./Labels";
import { Box } from "@mui/system";

interface ISearchInput {
  handleSearchInput(e: string): void;
}

export const SearchInput = ({ handleSearchInput }: ISearchInput) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
    setInputValue(onlyNumber);
    handleSearchInput(onlyNumber);
  };

  return (
    <Box>
      <TextField
        sx={{ borderBottom: "2px solid #000" }}
        label={SEARCH_INPUT_LABELS.SEARCH_INPUT_LABEL}
        value={inputValue}
        variant="standard"
        fullWidth
        onChange={handleInputChange}
      />
    </Box>
  );
};
