import { useState, useEffect, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "./store/hooks";

import { fetchAndParseAllData, fetchAndParseItemByID } from "./siteSlice/siteSlice";

import { Container } from "@mui/system";

import { SearchInput } from "./components/searchInput/SearchInput";
import { ResultTable } from "./components/resultTable/ResultTable";
import { Pagination } from "./components/pagination/Pagination";
import { Typography } from "@mui/material";

export const App = () => {
  const selector = useAppSelector((state) => state.site);
  const { items, pagination, site } = selector;
  const dispatch = useAppDispatch();

  const initializeDefaultData = useCallback(() => {
    dispatch(fetchAndParseAllData({ page: 1 }));
  }, [dispatch]);

  const handleChangePagination = (e: React.ChangeEvent<unknown>, value: number) => {
    dispatch(fetchAndParseAllData({ page: value }));
  };

  const handleSearchInput = (value: string) => {
    if (!value) initializeDefaultData();
    else dispatch(fetchAndParseItemByID(value));
  };

  useEffect(() => {
    initializeDefaultData();
  }, [initializeDefaultData]);

  return (
    <Container maxWidth="lg">
      <SearchInput handleSearchInput={handleSearchInput} />
      <ResultTable isDataLoading={site.isLoadingData} items={items} message={site.message} />
      {pagination.total_pages > 1 && (
        <Pagination count={pagination.total_pages} page={pagination.page} handleChangePagination={(e, value) => handleChangePagination(e, value)} />
      )}
      {/* TO DO: Add Showing example: 5 of 12  */}
    </Container>
  );
};
