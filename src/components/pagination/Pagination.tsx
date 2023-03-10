import { Button, ButtonGroup, Box } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import usePagination from "@mui/material/usePagination";

import { styled } from "@mui/material/styles";

import { PAGINATION_LABELS } from "./Labels";

interface IPagination {
  count: number;
  page: number;
  handleChangePagination(e: React.ChangeEvent<unknown>, value: number): void;
}

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Pagination = ({ count, page, handleChangePagination }: IPagination) => {
  const { items } = usePagination({
    count,
    page,
    onChange: (e, page) => handleChangePagination(e, page),
    hidePrevButton: page === 1,
    hideNextButton: page === count,
  });

  return (
    <StyledBox>
      <ButtonGroup variant="outlined" size="small" color="warning">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          switch (type) {
            case "start-ellipsis":
            case "end-ellipsis":
              children = "..";
              break;
            case "page":
              children = (
                <Button
                  {...item}
                  key={index}
                  style={{
                    fontWeight: selected ? "bold" : undefined,
                  }}
                >
                  {page}
                </Button>
              );
              break;
            default:
              children =
                type === "previous" ? (
                  <Button key={index} {...item} startIcon={<ArrowCircleLeftOutlinedIcon />}>
                    {PAGINATION_LABELS.PREVIOUS}
                  </Button>
                ) : (
                  <Button key={index} {...item} endIcon={<ArrowCircleRightOutlinedIcon />}>
                    {PAGINATION_LABELS.NEXT}
                  </Button>
                );
              break;
          }

          return children;
        })}
      </ButtonGroup>
    </StyledBox>
  );
};
