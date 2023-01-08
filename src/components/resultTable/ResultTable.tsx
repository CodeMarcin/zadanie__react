import { ResultTableItem } from "../resultTableItem/ResultTableItem";
import { ResultTableLoader } from "../resultTableLoader/ResultTableLoader";
import { ResultTableMessage } from "../resultTableMessage/ResultTableMessage";

import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { styled } from "@mui/material/styles";

import { RESULT_TABLE_LABELS } from "./Labels";

interface IResultTable {
  isDataLoading: boolean;
  items: IItem[];
  message: string | null;
}

const StyledGrid = styled(Grid)(() => ({
  padding: "0 25px",
}));

const StyledTable = styled(Table)(() => ({
  borderCollapse: "unset",
  borderSpacing: "0 15px",
}));

const StyledTableCell = styled(TableCell)(() => ({
  fontWeight: "bold",
  color: "#fff",
  border: "none",
}));

const TABLE_HEADER = [RESULT_TABLE_LABELS.ID, RESULT_TABLE_LABELS.NAME, RESULT_TABLE_LABELS.YEAR];

export const ResultTable = ({ isDataLoading, items, message }: IResultTable) => {
  const getContent = () => {
    if (isDataLoading) return <ResultTableLoader />;
    else if (items.length) return items.map((el) => <ResultTableItem key={el.id} id={el.id} color={el.color} name={el.name} year={el.year} />);
    else if (!items.length && !message) return <ResultTableMessage type="MESSAGE" message={RESULT_TABLE_LABELS.NO_DATA_TO_DISPLAY} />;
    else return <ResultTableMessage type="ERROR" message={message ?? null} />;
  };

  return (
    <StyledGrid item>
      <TableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              {TABLE_HEADER.map((el) => (
                <StyledTableCell key={el}>{el}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{getContent()}</TableBody>
        </StyledTable>
      </TableContainer>
    </StyledGrid>
  );
};
