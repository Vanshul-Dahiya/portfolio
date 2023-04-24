import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layout";
import profileAbout2 from "../../img/profileAbout2.jpg";
import shape1 from "../../img/shape1.png";
import shape2 from "../../img/shape2.png";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { brief, download, flame, medal } from "../../utils/Icons";
import Progressbar from "../Progressbar/Progressbar";
import Stats from "../Stats/Stats";
import cv from "../../cv/cv.pdf";

const About = () => {
  const theme = useTheme();
  return (
    <AboutStyled id="about" theme={theme}>
      <div className="about-info">
        <div className="about-image">
          <img src={profileAbout2} alt="" />
        </div>
        <div className="about-content">
          <Title name={"About Me"} />
          <p>
            As a third-year college student with a passion for web development,
            I am excited to showcase my skills and experience in the field
            through my portfolio. With a strong foundation in full-stack web
            development, native Android development, and cross-platform app
            development, I am confident in my ability to create dynamic and
            engaging web projects that meet the needs of any organization. Apart
            from that i also love playing chess , volleyball and badminton.
          </p>
          <div className="progress-bars">
            <Progressbar
              bg={theme.colorPrimary}
              service={"Full Stack Development"}
              progress={"85"}
            />
            <Progressbar
              bg={theme.colorGreen}
              service={"Flutter Development"}
              progress={"75"}
            />
            <Progressbar
              bg={theme.colorYellow}
              service={"Android Dev"}
              progress={"90"}
            />
          </div>
          <div className="btn-con">
            <a href={cv} download>
              <Button
                name="Download CV"
                blob="blog"
                icon={download}
                bg={theme.colorPrimary}
                color={theme.colorWhite}
                bFw={"600"}
                onClick="onClick"
                bRad={"30px"}
                bPad={theme.bPad1}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="stats-container">
        <Stats icon={flame} number="25+" desc="All completed projects" />
        <Stats icon={brief} number="2+" desc="Years of learning" />
        <Stats icon={medal} number="3" desc="Certificates" />
      </div>
      <img src={shape1} alt="shape1" className="shape1" />
      <img src={shape2} alt="shape2" className="shape2" />
    </AboutStyled>
  );
};
const AboutStyled = styled(SectionLayout)`
  background-color: ${(props) => props.theme.aboutBg};
  position: relative;
  overflow: hidden;
  .stats-container {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .about-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    z-index: 5;
    @media screen and (max-width: 1250px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .about-image {
      padding: 1.5rem;
      background: ${(props) => props.theme.colorBg3};
      border-radius: 5px;
      width: 80%;
      @media screen and (max-width: 1150px) {
        width: 100%;
      }
      img {
        width: 100%;
      }
    }
    .about-content {
      .progress-bars {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1.5rem;
      }
      .btn-con {
        margin-top: 2rem;
        @media screen and (max-width: 1150px) {
          margin-bottom: 2rem;
        }
      }
    }
  }
  .shape1 {
    position: absolute;
    left: -7px;
    top: -7px;
    z-index: 1;
    opacity: 0.05;
    pointer-events: none;
  }
  .shape2 {
    position: absolute;
    right: -7px;
    top: -7px;
    z-index: 1;
    opacity: 0.05;
    pointer-events: none;
  }
`;
export default About;
