import { useEffect, useState } from "react";

import { Container, TextField } from "@mui/material";

import { SEARCH_INPUT_LABELS } from "./Labels";
import { Box } from "@mui/system";

interface ISearchInput {
  idFromURLAfterLoadSite: string | undefined;
  handleSearchInput(e: string): void;
}

const onlyNumber = (value: string) => value.replace(/[^0-9]/g, "");

export const SearchInput = ({ idFromURLAfterLoadSite, handleSearchInput }: ISearchInput) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const onlyNumberValue = onlyNumber(e.target.value);

    setInputValue(onlyNumber(onlyNumberValue));
    handleSearchInput(onlyNumber(onlyNumberValue));
  };

  useEffect(() => {
    if (idFromURLAfterLoadSite) setInputValue(onlyNumber(idFromURLAfterLoadSite));
  }, [idFromURLAfterLoadSite]);

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
