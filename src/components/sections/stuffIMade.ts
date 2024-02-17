import type { SectionContent } from "../../types/Section";
import BeginnerProjectsBot from "./assets/beginner-projects-bot.png";
import CluedoSolver from "./assets/cluedo-solver.png";
import MultilingualKeyboard from "./assets/multilingual-keyboard.png";
import PlatynowyBog from "./assets/platynowy-bog.png";
import Pseudokoder from "./assets/pseudokoder.png";

export default [
  {
    title: "Platynowy Bóg",
    url: "https://platynowy-bog.com.pl",
    imgSrc: PlatynowyBog,
  },
  {
    title: "Cluedo Solver",
    url: "https://adam-broszkiewicz.pl/cluedo-solver",
    imgSrc: CluedoSolver,
  },
  {
    title: "Multilingual Keyboard",
    url: "https://github.com/DallogFheir/multilingual-keyboard",
    imgSrc: MultilingualKeyboard,
  },
  {
    title: "Pseudokoder",
    url: "https://adam-broszkiewicz.pl/pseudokoder",
    imgSrc: Pseudokoder,
  },
  {
    title: "Beginner Projects Bot",
    url: "https://www.reddit.com/user/BeginnerProjectsBot",
    imgSrc: BeginnerProjectsBot,
  },
] satisfies SectionContent[];
