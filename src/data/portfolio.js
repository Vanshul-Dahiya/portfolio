import uuid from "react-uuid";
import { eye, git } from "../utils/Icons";
import snippet from "../img/about.jpg";

export const portfolios = [
  {
    id: uuid(),
    category: "Web Development",
    title: "Figma landing page design",
    image: snippet,
    link1: "https://www.github.com/maclinz",
    link2: "https://www.github.com/maclinz",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "Game Development",
    title: "React portfolio website",
    image: snippet,
    link1: "https://www.github.com/maclinz",
    link2: "https://www.github.com/maclinz",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "Web Development",
    title: "React portfolio website",
    image: snippet,
    link1: "https://www.github.com/maclinz",
    link2: "https://www.github.com/maclinz",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "UI/UX Design",
    title: "React portfolio website",
    image: snippet,
    link1: "https://www.github.com/maclinz",
    link2: "https://www.github.com/maclinz",
    icon1: git,
    icon2: eye,
  },
];
