import { SitePortal } from "../sitePortal/SitePortal";

import { Grid, Typography, Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

import { ITEM_MODAL_LABELS } from "./Labels";
interface IItemModal {
  open: boolean;
  data: IItem;
  handleCloseModal(): void;
}

const StyledGridTop = styled(Grid)(({ theme }) => ({
  columnGap: "20px",
  flexWrap: "nowrap",
  padding: "15px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const StyledCloseIcon = styled(CloseIcon)(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledCloseIconMobile = styled(CloseIcon)(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "block",
  },
}));

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
      <Dialog open={open} onClose={handleCloseModal}>
        <Grid container flexDirection="column">
          <StyledGridTop item container>
            <StyledCloseIconMobile onClick={handleCloseModal} />
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
            <StyledCloseIcon onClick={handleCloseModal} />
          </StyledGridTop>
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
