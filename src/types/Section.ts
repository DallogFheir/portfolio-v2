import type { PropsWithChildren } from "react";

export interface SectionContent {
  title: string;
  imgSrc: string;
  url?: string;
  extraImgClasses?: string[];
}

export interface SectionProps extends PropsWithChildren {
  slug: string;
  content: SectionContent[];
  isMobile: boolean;
}
