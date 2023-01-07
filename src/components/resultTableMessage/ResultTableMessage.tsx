import { Alert, TableCell, TableRow } from "@mui/material";

type TMessageType = "ERROR" | "MESSAGE";

interface IResultTableMessage {
  type: TMessageType;
  message: string;
}

export const ResultTableMessage = ({ type, message }: IResultTableMessage) => {
  return (
    <TableRow>
      <TableCell colSpan={3}>
        <Alert variant="filled" severity={type === "MESSAGE" ? "info" : "error"}>
          {message}
        </Alert>
      </TableCell>
    </TableRow>
  );
};
