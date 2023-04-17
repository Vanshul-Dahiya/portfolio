import styled from "styled-components";
import { useTheme } from "./context/themeContext";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import { useState } from "react";
import About from "./Components/Sections/About";
import Service from "./Components/Sections/Services";
import Experience from "./Components/Sections/Experience";
import Portfolios from "./Components/Sections/Portfolios";
import Contact from "./Components/Sections/Contact";

function App() {
  const theme = useTheme();
  // state
  const [toggle, setToggle] = useState(true);
  return (
    <AppStyled theme={theme}>
      <Navigation toggle={toggle} />
      <Header toggle={toggle} setToggle={setToggle} />
      <main>
        <About />
        <Service />
        <Experience />
        <Portfolios />
        <Contact />
      </main>
      <footer>
        <div className="links">
          <a href="https://github.com/vanshul_dahiya" target="blank">
            <i
              style={{
                color: "#ff4c60",
              }}
              className=" fa-2x fa-brands fa-github"
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vanshul-dahiya2401/"
            target="blank"
          >
            <i className=" fa-2x fa-brands fa-linkedin"></i>
          </a>

          <a href="mailto:vanshuldahiya2002@gmail.com" target="blank">
            <i
              style={{
                color: "#ff4c60",
              }}
              className=" fa-2x fa-brands fa-google"
            ></i>
          </a>
        </div>
        <p>
          Copyright &copy; 2023{" "}
          <a href="https://github.com/vanshul-dahiya" target="_blank">
            Vanshul Dahiya {""}
          </a>
          <span>~ All rights reserved.. </span>
        </p>
      </footer>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorWhite};
  position: relative;
  p,
  a,
  li {
    color: ${(props) => props.theme.colorGrey1};
  }
  p {
    line-height: 1.9rem;
  }
  footer {
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colorBg2};
    .links {
      margin-bottom: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      i {
        color: ${(props) => props.theme.colorGrey1};
        transition: all 0.3s ease-in-out;
        &:hover {
          color: ${(props) => props.theme.colorPurple};
        }
      }
    }
    p {
      a {
        color: ${(props) => props.theme.colorPrimary};
        transition: all 0.3s ease-in-out;
        &:hover {
          color: ${(props) => props.theme.colorGreen};
        }
      }
    }
  }
`;

export default App;
