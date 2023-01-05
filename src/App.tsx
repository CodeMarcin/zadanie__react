import { useState, useEffect, useCallback } from "react";

import { SearchInput } from "./components/searchInput/SearchInput";

import { getBasicDataAPI } from "./api/getBasicDataAPI";

import { SVGLoader } from "./utilities/SVG";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getDataFromAPI = useCallback(async (page: number, perPage?: number) => {
    try {
      setIsLoading(true);
      const all = await getBasicDataAPI(page, perPage);
      const { data } = await await getBasicDataAPI(page, perPage);

      console.log(all);
      setIsLoading(false);
    } catch (error) {

      console.log("jest error");
      console.error(error, "ERROR");
    }
  }, []);

  useEffect(() => {
    getDataFromAPI(1);
  }, [getDataFromAPI]);
  
  return (
    <>
      <SearchInput />
      {!isLoading && <SVGLoader />}
    </>
  );
};
