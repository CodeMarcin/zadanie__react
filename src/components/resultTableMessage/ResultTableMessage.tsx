import { Alert, TableCell, TableRow } from "@mui/material";

import { styled } from "@mui/material/styles";
type TMessageType = "ERROR" | "MESSAGE";

interface IResultTableMessage {
  type: TMessageType;
  message: string | null;
}

const StyledTableCell = styled(TableCell)(() => ({
  borderBottom: "none",
  padding: "0",
}));

export const ResultTableMessage = ({ type, message }: IResultTableMessage) => {
  return (
    <TableRow>
      <StyledTableCell colSpan={3}>
        <Alert variant="filled" severity={type === "MESSAGE" ? "info" : "error"}>
          {message}
        </Alert>
      </StyledTableCell>
    </TableRow>
  );
};
