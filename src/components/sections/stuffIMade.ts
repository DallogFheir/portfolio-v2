import type { SectionContent } from "../../types/Section";
import AnkiDuplicards from "./assets/stuff/anki-duplicards.png";
import BeginnerProjectsBot from "./assets/stuff/beginner-projects-bot.png";
import CluedoSolver from "./assets/stuff/cluedo-solver.png";
import MultilingualKeyboard from "./assets/stuff/multilingual-keyboard.png";
import PlatynowyBog from "./assets/stuff/platynowy-bog.png";
import Pseudokoder from "./assets/stuff/pseudokoder.png";

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
  {
    title: "Anki Duplicards",
    url: "https://ankiweb.net/shared/info/1333083808",
    imgSrc: AnkiDuplicards,
  },
] satisfies SectionContent[];
