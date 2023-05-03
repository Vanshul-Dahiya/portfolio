import uuid from "react-uuid";
import { eye, git } from "../utils/Icons";
import snippet from "../img/about.jpg";
import blog from "../img/Saved Pictures/blog.png";
import budget from "../img/Saved Pictures/budget.png";
import chatgpt from "../img/Saved Pictures/chatgpt.png";
import colorPalette from "../img/Saved Pictures/color_palette.png";
import fileSharing from "../img/Saved Pictures/file_sharing.png";
import githubUser from "../img/Saved Pictures/github_user.png";
import pokidex from "../img/Saved Pictures/pokidex.png";
import portF from "../img/Saved Pictures/portfolioImage.png";
import ipl from "../img/Saved Pictures/ipl.png";
import dadJ from "../img/Saved Pictures/dadJoke.png";
import formula from "../img/Saved Pictures/formula.jpeg";
import url from "../img/Saved Pictures/url.jpeg";
import mail from "../img/Saved Pictures/mail.jpeg";

export const portfolios = [
  {
    id: uuid(),
    category: "React Projects",
    title: "React portfolio website",
    image: portF,
    link1: "https://github.com/Vanshul-Dahiya/portfolio",
    link2: "https://github.com/Vanshul-Dahiya/portfolio",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "MERN Projects",
    title: "Blog Application",
    image: blog,
    link1: "https://github.com/Vanshul-Dahiya/mern-blog-app",
    link2: "https://github.com/Vanshul-Dahiya/mern-blog-app",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "MERN Projects",
    title: "ChatGpt Clone",
    image: chatgpt,
    link1: "https://github.com/Vanshul-Dahiya/chatgpt_clone",
    link2: "https://github.com/Vanshul-Dahiya/chatgpt_clone",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "React Projects",
    title: "Expense Tracker",
    image: budget,
    link1: "https://github.com/Vanshul-Dahiya/budget-tracker-using-react",
    link2: "https://budget-tracker-flame.vercel.app/",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "MERN Projects",
    title: "File sharing project",
    image: fileSharing,
    link1: "https://github.com/Vanshul-Dahiya/file-sharing-mern-app",
    link2: "https://github.com/Vanshul-Dahiya/file-sharing-mern-app",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "Chrome Extensions",
    title: "Ipl Game ",
    image: ipl,
    link1: "https://github.com/Vanshul-Dahiya/ipl_game_extension",
    link2: "https://github.com/Vanshul-Dahiya/ipl_game_extension",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "React Projects",
    title: "Pokidex ",
    image: pokidex,
    link1: "https://github.com/Vanshul-Dahiya/pokidex",
    link2: "https://github.com/Vanshul-Dahiya/pokidex",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "React Projects",
    title: "Color Palette website",
    image: colorPalette,
    link1: "https://github.com/Vanshul-Dahiya/color_palette",
    link2: "https://color-palette-generator-ochre.vercel.app/",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "Chrome Extensions",
    title: "Dad Joke Generator",
    image: dadJ,
    link1: "https://github.com/Vanshul-Dahiya/chrome-extension",
    link2: "https://github.com/Vanshul-Dahiya/chrome-extension",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "React Projects",
    title: "Github User profile Search",
    image: githubUser,
    link1: "https://github.com/Vanshul-Dahiya/github_user_search",
    link2: "https://github-user-search-sigma-brown.vercel.app/",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "Backend Projects",
    title: "Mail Sender",
    image: mail,
    link1: "https://github.com/Vanshul-Dahiya/mail-sender-using-nodejs",
    link2: "https://github.com/Vanshul-Dahiya/mail-sender-using-nodejs",
    icon1: git,
    icon2: git,
  },
  {
    id: uuid(),
    category: "Backend Projects",
    title: "Web Scrapper",
    image: formula,
    link1: "https://github.com/Vanshul-Dahiya/web_scraper_formula_one",
    link2: "https://github.com/Vanshul-Dahiya/web_scraper_formula_one",
    icon1: git,
    icon2: git,
  },
  {
    id: uuid(),
    category: "Backend Projects",
    title: "Url Shortener",
    image: url,
    link1: "https://github.com/Vanshul-Dahiya/url-shortener",
    link2: "https://github.com/Vanshul-Dahiya/url-shortener",
    icon1: git,
    icon2: git,
  },
];
