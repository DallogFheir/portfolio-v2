import type { PropsWithChildren } from "react";

export interface ImageProps extends PropsWithChildren {
  imgSrc: string;
  title: string;
  url?: string;
  extraImgClasses?: string[];
}
