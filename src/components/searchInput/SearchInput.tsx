import { useEffect, useState, useDeferredValue, useCallback } from "react";

import { Grid, Paper, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";

import { SEARCH_INPUT_LABELS } from "./Labels";

interface ISearchInput {
  idFromURLAfterLoadSite: string | undefined;
  handleSearchInput(e: string): void;
}

const onlyNumber = (value: string) => value.replace(/[^0-9]/g, "");

export const StyledPaperSearchInput = styled(Paper)(() => ({
  padding: "5px",
  display: "flex",
  alignItems: "center",
}));

export const SearchInput = ({ idFromURLAfterLoadSite, handleSearchInput }: ISearchInput) => {
  const [inputValue, setInputValue] = useState("");
  const defferedInputValue = useDeferredValue(inputValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const onlyNumberValue = onlyNumber(e.target.value);

    setInputValue(onlyNumberValue);
  };

  useEffect(() => {
    if (idFromURLAfterLoadSite) setInputValue(onlyNumber(idFromURLAfterLoadSite));
  }, [idFromURLAfterLoadSite]);

  useEffect(() => {
    handleSearchInput(defferedInputValue);
  }, [defferedInputValue, handleSearchInput]);

  return (
    <Grid item>
      <StyledPaperSearchInput>
        <SearchIcon />
        <InputBase fullWidth placeholder={SEARCH_INPUT_LABELS.SEARCH_INPUT_LABEL} value={inputValue} onChange={handleInputChange} />
      </StyledPaperSearchInput>
    </Grid>
  );
};
