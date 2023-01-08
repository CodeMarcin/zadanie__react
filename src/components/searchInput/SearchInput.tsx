import { useEffect, useState } from "react";
import { StyledPaperSearchInput } from "./Styles";
import { Grid } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { SEARCH_INPUT_LABELS } from "./Labels";

import { Paper } from "@mui/material";

import { InputBase } from "@mui/material";

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
    <Grid item>
      <StyledPaperSearchInput >
        <SearchIcon />
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder={SEARCH_INPUT_LABELS.SEARCH_INPUT_LABEL} value={inputValue} onChange={handleInputChange} />
      </StyledPaperSearchInput>
    </Grid>
  );
};
