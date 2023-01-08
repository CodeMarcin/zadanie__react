import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { ITEM_MODAL_LABELS } from "./Labels";
import { SitePortal } from "../sitePortal/SitePortal";
import CloseIcon from "@mui/icons-material/Close";

interface IItemModal {
  open: boolean;
  data: IItem;
  handleCloseModal(): void;
}

export const ItemModal = ({ open, data, handleCloseModal }: IItemModal) => {
  const { id, name, color, pantone_value, year } = data;

  const topData = [
    {
      label: ITEM_MODAL_LABELS.ID,
      value: id,
    },
    {
      label: ITEM_MODAL_LABELS.NAME,
      value: name,
    },
    {
      label: ITEM_MODAL_LABELS.PANTONE_VALUE,
      value: pantone_value,
    },
    {
      label: ITEM_MODAL_LABELS.YEAR,
      value: year,
    },
  ];

  return (
    <SitePortal>
      <Dialog open={open} onClose={handleCloseModal} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <Grid container flexDirection="column">
          <Grid item container columnGap="20px" flexWrap="nowrap" p="15px" alignItems="center">
            {topData.map((el) => (
              <Grid item container flexWrap="nowrap" alignItems="baseline" columnGap="5px" width="auto" key={el.label}>
                <Typography variant="button" component="span" color="black" fontWeight="bold" textTransform="none">
                  {el.label}
                </Typography>
                <Typography variant="overline" component="span">
                  {el.value}
                </Typography>
              </Grid>
            ))}
            <CloseIcon onClick={handleCloseModal} sx={{ cursor: "pointer" }} />
          </Grid>
          <Grid item container justifyContent="center" alignItems="center" sx={{ backgroundColor: color, minHeight: "100px" }}>
            <Typography variant="h6" component="span" color="white" fontWeight="bold">
              {color}
            </Typography>
          </Grid>
        </Grid>
      </Dialog>
    </SitePortal>
  );
};
