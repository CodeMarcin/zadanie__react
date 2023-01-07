import { useAppDispatch } from "../../store/hooks";
import { setShowModalItemID } from "../../siteSlice/siteSlice";

import { TableCell, TableRow } from "@mui/material";

interface IResultTableItem {
  id: number;
  color: string;
  name: string;
  year: number;
}

export const ResultTableItem = ({ id, color, name, year }: IResultTableItem) => {
  const dispatch = useAppDispatch();
  const handleClickItem = () => {
    dispatch(setShowModalItemID(id));
  };
  return (
    <TableRow onClick={handleClickItem} sx={{ backgroundColor: `${color}` }}>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{year}</TableCell>
    </TableRow>
  );
};
