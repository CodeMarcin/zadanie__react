import { Skeleton, TableCell, TableRow } from "@mui/material";

export const ResultTableLoader = () => {
  return (
    <TableRow>
      <TableCell colSpan={3}>
        {[...Array(5)].map((el, i) => (
          <Skeleton key={i} variant="text" height={60} sx={{ margin: "10px 0 0", bgcolor: "#F2F7A1" }} />
        ))}
      </TableCell>
    </TableRow>
  );
};
