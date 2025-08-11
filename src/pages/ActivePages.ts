import About from "./About";
import Experiences from "./Experiences";
import Intro from "./Intro";
import Resume from "./Resume";
import Skills from "./Skills";

const ActivePages = [
  {
    id: "intro",
    page: "Intro",
    component: Intro,
  },
  {
    id: "about",
    page: "About",
    component: About,
  },
  {
    id: "skills",
    page: "Skills",
    component: Skills,
  },
  {
    id: "experiences",
    page: "Experience",
    component: Experiences,
  },
  {
    id: "resume",
    page: "Resume",
    component: Resume,
  },
];

export default ActivePages;
