import type { SectionContent } from "../../types/Section";
import BeginnerProjectsBot from "./assets/stuff/beginner-projects-bot.png";
import CluedoSolver from "./assets/stuff/cluedo-solver.png";
import MultilingualKeyboard from "./assets/stuff/multilingual-keyboard.png";
import PlatynowyBog from "./assets/stuff/platynowy-bog.png";
import Pseudokoder from "./assets/stuff/pseudokoder.png";

export default [
  {
    title: "Platynowy Bóg",
    url: "https://adam-broszkiewicz.pl/platynowy-bog",
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
