import { useState, useEffect, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "./store/hooks";

import { fetchAndParseAllData, fetchAndParseItemByID } from "./siteSlice/siteSlice";

import { Container } from "@mui/system";

import { SearchInput } from "./components/searchInput/SearchInput";
import { ResultTable } from "./components/resultTable/ResultTable";
import { Pagination } from "./components/pagination/Pagination";
import { Typography } from "@mui/material";

const SEARCH_PARAMS = new URLSearchParams(document.location.search);
const EXPECTED_URL_PARAMS_PAGE = "page";
const EXPECTED_URL_PARAMS_ID = "id";

const getURLParams = () => {
  let URLParams: {
    param?: string;
    value?: string;
  } = {};

  for (const [key, value] of SEARCH_PARAMS.entries()) {
    if ((key === EXPECTED_URL_PARAMS_PAGE || key === EXPECTED_URL_PARAMS_ID) && value) {
      URLParams = { param: key, value };
      break;
    }
  }
  return URLParams;
};

const replaceURL = (type?: "id" | "page", value?: string | number) => {
  const cleanURL = window.location.href.substring(0, window.location.href.lastIndexOf("/"));
  if (!value && !type) window.history.replaceState({}, document.title, cleanURL);
  else window.history.replaceState({}, document.title, `?${type}=${value}`);
};

export const App = () => {
  const [idFromURLAfterLoadSite, setIdFromURLAfterLoadSite] = useState<string | undefined>();
  const [isFullyRendered, setIsFullyRendered] = useState(false);
  const selector = useAppSelector((state) => state.site);
  const dispatch = useAppDispatch();

  const { items, pagination, site } = selector;

  const initializeDefaultData = useCallback(() => {
    dispatch(fetchAndParseAllData({ page: 1 }));
  }, [dispatch]);

  const handleChangePagination = (e: React.ChangeEvent<unknown>, value: number) => {
    if (value === 1) replaceURL();
    else replaceURL("page", value);
    dispatch(fetchAndParseAllData({ page: value }));
  };

  const handleSearchInput = (value: string) => {
    if (!value) {
      replaceURL();
      initializeDefaultData();
    } else {
      replaceURL("id", value);
      dispatch(fetchAndParseItemByID(value));
    }
  };

  useEffect(() => {
    console.log('useeffe')
    const URLParams = getURLParams();
    if (Object.keys(URLParams).length)
      if (URLParams.param === EXPECTED_URL_PARAMS_PAGE) dispatch(fetchAndParseAllData({ page: parseInt(URLParams?.value!) }));
      else {
        dispatch(fetchAndParseItemByID(URLParams?.value!));
        setIdFromURLAfterLoadSite(URLParams?.value!);
      }
    else initializeDefaultData();

    setIsFullyRendered(true);
  }, [initializeDefaultData, dispatch]);

  return (
    <Container maxWidth="lg">
      {isFullyRendered && <SearchInput handleSearchInput={handleSearchInput} idFromURLAfterLoadSite={idFromURLAfterLoadSite} />}
      <ResultTable isDataLoading={site.isLoadingData} items={items} message={site.message} />
      {items.length > 1 && <Pagination count={pagination.total_pages} page={pagination.page} handleChangePagination={(e, value) => handleChangePagination(e, value)} />}
      {/* TO DO: Add Showing example: 5 of 12  */}
    </Container>
  );
};
