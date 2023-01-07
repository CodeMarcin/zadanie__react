import { ReactNode } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("body") as HTMLElement;

export const SitePortal = (props: { children: ReactNode }) => {
  const { children } = props;

  return createPortal(children, modalRoot);
};
