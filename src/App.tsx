import { useEffect } from "react";

import { useSelector } from "react-redux";
import { getData, getDataFromAPI } from "./store/dataSlice";
import { useAppDispatch } from "./store/store.hooks";

import { SearchInput } from "./components/searchInput/SearchInput";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

import { SVGLoader } from "./utilities/SVG";

export const App = () => {
  const selector = useSelector(getData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDataFromAPI({ page: 1 }));
  }, []);

  return (
    <>
      <SearchInput />
      {selector.isLoading ? (
        <SVGLoader />
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selector.fromApi.data.map((el) => (
                  <TableRow key={el.id} sx={{ backgroundColor: `${el.color}` }}>
                    <TableCell>{el.id}</TableCell>
                    <TableCell>{el.name}</TableCell>
                    <TableCell>{el.year}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};
