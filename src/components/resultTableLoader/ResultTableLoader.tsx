import { Skeleton, TableCell, TableRow } from "@mui/material";

export const ResultTableLoader = () => {
  return (
    <TableRow>
      <TableCell colSpan={3}>
        <Skeleton variant="rounded" height={60} sx={{ margin: "10px 0 0" }} />
      </TableCell>
    </TableRow>
  );
};
