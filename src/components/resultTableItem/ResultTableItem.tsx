import { TableCell, TableRow } from "@mui/material";

interface IResultTableItem {
  id: number;
  color: string;
  name: string;
  year: number;
}

export const ResultTableItem = ({ id, color, name, year }: IResultTableItem) => {
  return (
    <TableRow sx={{ backgroundColor: `${color}` }}>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{year}</TableCell>
    </TableRow>
  );
};
