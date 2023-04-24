import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import TimelineItem from "../TimelineItem/TimelineItem";
import { brief, desktop, education } from "../../utils/Icons";

const Timeline = () => {
  const theme = useTheme();
  return (
    <TimelineStyled theme={theme}>
      <div className="education-timeline timeline">
        <TimelineItem
          duration={"June 2022 - July 2022"}
          title={"Android App Developer Intern "}
          desc={"Intern @ Sihag innovations pvt ltd."}
          icon={desktop}
        />
        <TimelineItem
          duration={"2018-2020"}
          title={"Higher Secondary"}
          desc={"CGPA : 8.2"}
          icon={education}
        />
        <TimelineItem
          duration={"2016-2018"}
          title={""}
          desc={"CGPA : 9.6 "}
          icon={education}
        />
      </div>
      <div className="jobs-timeline timeline">
        <h3> Skills </h3>
        <TimelineItem desc={"React.js"} icon={education} />
        <TimelineItem desc={"Node.js"} icon={education} />
        <TimelineItem desc={"HTML/CSS"} icon={education} />
        <TimelineItem desc={"MongoDB"} icon={education} />
        <TimelineItem desc={"Flutter"} icon={education} />
        <TimelineItem desc={"SQL"} icon={education} />
        <TimelineItem desc={"Git/Github"} icon={education} />
      </div>
    </TimelineStyled>
  );
};
const TimelineStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  gap: 2rem;
  .timeline {
    background-color: ${(props) => props.theme.colorBg5};
    padding: 2rem;
    border-radius: 10px;
  }
  .jobs-timeline {
    h4 {
      padding: 1rem;
    }
    .icon {
      left: -10px;
    }
  }
`;
export default Timeline;
