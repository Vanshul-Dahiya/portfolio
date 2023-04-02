import styled from "styled-components";
import { useTheme } from "./context/themeContext";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import { useState } from "react";
import About from "./Components/Sections/About";

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
      </main>
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
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colorBg2};
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
