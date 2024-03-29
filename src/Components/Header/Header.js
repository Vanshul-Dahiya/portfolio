import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import Button from "../Button/Button";
import { brief } from "../../utils/Icons";
import avatar from "../../img/avatar.png";
import profile from "../../img/profile.png";
import line from "../../img/line.png";
import Particle from "../Particle";

const Header = ({ toggle, setToggle }) => {
  const theme = useTheme();
  return (
    <HeaderStyled theme={theme}>
      <div className="particles-con">
        <Particle />
      </div>
      <div className="burger-menu" onClick={() => setToggle(!toggle)}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
      <div className="left-header">
        <div className="left-h-content">
          <h2>Hi there, </h2>
          <h1>
            I am Vanshul <span>.</span>
          </h1>
          <p className="profession"> Web Developer </p>
          <p className="description">
            I'm a 3rd year college student currently working in the
            field of web development using MERN stack . Well-versed in tech stacks
            which includes full stack web development ,native android development &
            cross platform app development.
          </p>
          <div className="btn-con">
            <a
              target="blank"
              href="https://www.linkedin.com/in/vanshul-dahiya2401/"
            >
              <Button
                name={"Hire me"}
                blob={"blob"}
                bg={theme.colorPrimary}
                color={theme.colorWhite}
                bFw={"600"}
                bRad={"30px"}
                bPad={theme.bPad1}
                icon={brief}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="right-header"></div>
      <div className="image-con">
        <img src={profile} alt="" />
      </div>
      <div className="image-overlay"></div>
      <img src={line} alt="" className="image-line" />
    </HeaderStyled>
  );
};
const HeaderStyled = styled.header`
  position: relative;
  overflow: hidden;
  height: 100vh;
  padding: 1rem 18rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 1600px) {
    padding: 1rem 10rem;
  }
  @media screen and (max-width: 1360px) {
    padding: 1rem 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    padding: 1rem 3rem;
  }
  .particles-con {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .burger-menu {
    position: fixed;
    top: 2rem;
    right: 3rem;
    display: flex;
    flex-direction: column;
    z-index: 15;
    cursor: pointer;
    .line {
      width: 35px;
      height: 4px;
      background-color: ${(props) => props.theme.colorPrimary};
      margin-bottom: 5px;
      border-radius: 7px;
      transition: all 0.3s ease-in-out;
      display: flex;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
      &:last-child {
        margin-bottom: 0;
        width: 20px;
        align-self: flex-end;
      }
    }
    &:hover {
      .line:last-child {
        width: 35px;
      }
    }
  }
  .left-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 5;
    @media screen and (max-width: 1360px) {
      .left-h-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      p {
        text-align: center;
      }
      .profession {
        margin-top: 1rem;
      }
    }
    h2 {
      font-size: 3.5rem;
      color: ${(props) => props.theme.colorPurple};
      @media screen and (max-width: 575px) {
        font-size: 2.5rem;
      }
    }
    h1 {
      font-size: 4rem;
      span {
        color: ${(props) => props.theme.colorPrimary};
      }
      @media screen and (max-width: 575px) {
        font-size: 3rem;
      }
    }
    .profession {
      font-size: 2rem;
      font-weight: 500;
      color: ${(props) => props.theme.colorGreen};
      @media screen and (max-width: 575px) {
        font-size: 1.5rem;
      }
    }
    .description {
      margin-top: 1rem;
      color: ${(props) => props.theme.colorGrey1};
      margin-bottom: 2rem;
      line-height: 2rem;
    }
  }
  .image-con {
    position: absolute;
    right: 10px;
    z-index: 2;
    @media screen and (max-width: 1360px) {
      display: none;
    }
    img {
      margin-top: 80px;
      width: 600px;
    }
  }
  .image-overlay {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colorBg};
    z-index: 3;
    opacity: 0.3;
    @media screen and (max-width: 1360px) {
      display: none;
    }
  }
  .image-line {
    position: absolute;
    right: 0;
    top: -15%;
    width: 105%;
    z-index: 1;
    @media screen and (max-width: 1060px) {
      display: none;
    }
  }
`;
export default Header;
