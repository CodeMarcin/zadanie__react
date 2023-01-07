import { Alert, TableCell, TableRow } from "@mui/material";

type TMessageType = "ERRO" | "MESSAGE";

interface IResultTableMessage {
  type: TMessageType;
  message: string;
}

export const ResultTableMessage = ({ type, message }: IResultTableMessage) => {
  if (type === "MESSAGE") {
    return (
      <TableRow>
        <TableCell colSpan={3}>
          <Alert variant="filled" severity="info">
            {message}
          </Alert>
        </TableCell>
      </TableRow>
    );
  }

  return <div>ResultTableMessage</div>;
};
