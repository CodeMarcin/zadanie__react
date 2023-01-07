import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";

import { SitePortal } from "../sitePortal/SitePortal";

interface IItemModal {
  open: boolean;
  data: IItem;
  handleCloseModal(): void;
}

export const ItemModal = ({ open, data, handleCloseModal }: IItemModal) => {
    const {id, name, color, pantone_value, year} = data
    console.log(data)
  return (
    <SitePortal>
      <Dialog open={open} onClose={handleCloseModal} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </SitePortal>
  );
};
