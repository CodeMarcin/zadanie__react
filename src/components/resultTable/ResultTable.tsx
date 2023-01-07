import { Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { ResultTableItem } from "../resultTableItem/ResultTableItem";
import { ResultTableLoader } from "../resultTableLoader/ResultTableLoader";
import { ResultTableMessage } from "../resultTableMessage/ResultTableMessage";

import { RESULT_TABLE_LABELS } from "./Labels";

interface IResultTable {
  isDataLoading: boolean;
  items: IItem[];
  message: string | null;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const ResultTable = ({ isDataLoading, items, message }: IResultTable) => {

  const getContent = () => {
    if (isDataLoading) return <ResultTableLoader />;
    else if (items.length) return items.map((el) => <ResultTableItem key={el.id} id={el.id} color={el.color} name={el.name} year={el.year} />);
    else if (!items.length && !message) return <ResultTableMessage type="MESSAGE" message={RESULT_TABLE_LABELS.NO_DATA_TO_DISPLAY} />;
    else return <ResultTableMessage type="ERROR" message={message ?? ""} />;
  };

  return (
    <Box>
      <TableContainer sx={{ minHeight: "322px" }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>{RESULT_TABLE_LABELS.ID}</StyledTableCell>
              <StyledTableCell>{RESULT_TABLE_LABELS.NAME}</StyledTableCell>
              <StyledTableCell>{RESULT_TABLE_LABELS.YEAR}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{getContent()}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

//   <TableBody>
//     {selector.fromApi.data.map((el) => (

//     ))}
//   </TableBody>;
