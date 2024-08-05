import type { SectionContent } from "../../types/Section";
import Express from "./assets/technologies/express.png";
import JavaScript from "./assets/technologies/javascript.png";
import Python from "./assets/technologies/python.png";
import React from "./assets/technologies/react.png";
import SapUi5 from "./assets/technologies/sapui5.png";
import Sass from "./assets/technologies/sass.png";
import TypeScript from "./assets/technologies/typescript.png";

export default [
  {
    title: "JavaScript",
    imgSrc: JavaScript,
  },
  {
    title: "TypeScript",
    imgSrc: TypeScript,
  },
  {
    title: "React",
    imgSrc: React,
  },
  {
    title: "Express",
    imgSrc: Express,
  },
  {
    title: "Sass",
    imgSrc: Sass,
  },
  {
    title: "Python",
    imgSrc: Python,
  },
  {
    title: "SAP UI5",
    imgSrc: SapUi5,
  },
] satisfies SectionContent[];
