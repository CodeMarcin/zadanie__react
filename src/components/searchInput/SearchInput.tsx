import { useState } from "react";

import { Container, TextField } from "@mui/material";

import { SEARCH_INPUT_LABELS } from "./Labels";

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState<string>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value.replace(/[^0-9]/g, ""));
  };

  return (
    <Container>
      <TextField label={SEARCH_INPUT_LABELS.SEARCH_INPUT_LABEL} value={inputValue} variant="standard" fullWidth onChange={handleInputChange} />
    </Container>
  );
};
