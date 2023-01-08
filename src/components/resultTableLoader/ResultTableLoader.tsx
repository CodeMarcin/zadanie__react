import { TableCell, TableRow } from "@mui/material";

import { SVGLoader } from "../../utilities/SVG";

import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(() => ({
  borderBottom: "none",
  padding: "0",
}));

export const ResultTableLoader = () => {
  return (
    <>
      <TableRow>
        <StyledTableCell colSpan={3}>
          <SVGLoader />
        </StyledTableCell>
      </TableRow>
    </>
  );
};
