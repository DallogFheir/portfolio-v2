import type { PropsWithChildren } from "react";

export interface AccordeonProps extends PropsWithChildren {
  title: string;
  isOpen: boolean;
  dispatchToggleOpen: () => void;
  isMobile: boolean;
  addSeparator: boolean;
}
