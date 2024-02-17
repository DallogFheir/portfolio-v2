import type { SectionContent } from "../../types/Section";
import Email from "./assets/email.svg";

export default [
  {
    title: "broszkiewicz.adam@gmail.com",
    imgSrc: Email,
    url: "mailto:broszkiewicz.adam@gmail.com",
  },
  {
    title: "GitHub",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
    url: "https://github.com/DallogFheir",
    extraImgClasses: ["icon-inverted"],
  },
  {
    title: "LinkedIn",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    url: "https://www.linkedin.com/in/adam-broszkiewicz-5191b4235",
  },
] satisfies SectionContent[];
