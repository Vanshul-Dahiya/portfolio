import React from "react";
import styled from "styled-components";
import { SectionLayout } from "../../styles/Layout";
import { useTheme } from "../../context/themeContext";
import Title from "../Title/Title";
import Timeline from "../Timeline/Timeline";
const Experience = () => {
  const theme = useTheme();
  return (
    <ExpStyled theme={theme}>
      <Title name={"Experience"} desc={"lorem32"} />
      <div className="timeline-con">
        <Timeline  />
      </div>
    </ExpStyled>
  );
};
const ExpStyled = styled(SectionLayout)`
  .timeline-con {
    margin-top: 3.5rem;
  }
`;
export default Experience;
