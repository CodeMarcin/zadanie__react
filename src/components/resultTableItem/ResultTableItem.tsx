import { useRef, useCallback, useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { setShowModalItemID } from "../../siteSlice/siteSlice";

import { TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IResultTableItem {
  id: number;
  color: string;
  name: string;
  year: number;
}

export const ResultTableItem = ({ id, color, name, year }: IResultTableItem) => {
  const dispatch = useAppDispatch();

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    cursor: "pointer",
    background: `linear-gradient(to top, ${color} 50%, #222831 0)`,
    backgroundPosition: "top",
    backgroundSize: "200% 200%",
    ":hover": { backgroundPosition: "bottom" },
    ":hover .MuiTableCell-root": { color: "white" },
    transition: theme.transitions.create(["background-position"], { duration: "0.5s" }),
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    color: "white",
    fontWeight: "bold",
    fontSize: "12px",
    borderBottom: `1px solid ${color}`,
    transition: theme.transitions.create(["color"], { duration: "0.5s" }),
  }));

  return (
    <StyledTableRow onClick={() => dispatch(setShowModalItemID(id))} tabIndex={0}>
      <StyledTableCell>{id}</StyledTableCell>
      <StyledTableCell>{name[0].toUpperCase() + name.substring(1)}</StyledTableCell>
      <StyledTableCell>{year}</StyledTableCell>
    </StyledTableRow>
  );
};
