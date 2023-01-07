import { Alert, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";

import { ResultTableItem } from "../resultTableItem/ResultTableItem";
import { ResultTableLoader } from "../resultTableLoader/ResultTableLoader";
import { ResultTableMessage } from "../resultTableMessage/ResultTableMessage";

import { RESULT_TABLE_LABELS } from "./Labels";

interface IResultTable {
  isDataLoading: boolean;
  items: IItem[];
  message: string | null;
}

export const ResultTable = ({ isDataLoading, items, message }: IResultTable) => {
  return (
    <Box>
      <TableContainer sx={{ minHeight: "322px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{RESULT_TABLE_LABELS.ID}</TableCell>
              <TableCell>{RESULT_TABLE_LABELS.NAME}</TableCell>
              <TableCell>{RESULT_TABLE_LABELS.YEAR}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isDataLoading ? (
              <ResultTableLoader />
            ) : items.length ? (
              items.map((el) => <ResultTableItem key={el.id} id={el.id} color={el.color} name={el.name} year={el.year} />)
            ) : (
              <TableRow>
                <TableCell colSpan={3}>
                  <Alert variant="filled" severity="info">
                    {RESULT_TABLE_LABELS.NO_DATA_TO_DISPLAY}
                  </Alert>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

//   <TableBody>
//     {selector.fromApi.data.map((el) => (

//     ))}
//   </TableBody>;
