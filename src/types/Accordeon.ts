import type { PropsWithChildren } from "react";

export interface AccordeonProps extends PropsWithChildren {
  title: string;
  key: string;
  isOpenByDefault?: boolean;
}
