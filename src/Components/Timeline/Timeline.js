import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import TimelineItem from "../TimelineItem/TimelineItem";
import { brief, education } from "../../utils/Icons";

const Timeline = () => {
  const theme = useTheme();
  return (
    <TimelineStyled theme={theme}>
      <div className="education-timeline timeline">
        <TimelineItem
          duration={"2012-2020"}
          title={"Student"}
          desc={"lreom"}
          icon={education}
        />
        <TimelineItem
          duration={"2012-2020"}
          title={"Student"}
          desc={"lreom"}
          icon={education}
        />
        <TimelineItem
          duration={"2012-2020"}
          title={"Student"}
          desc={"lreom"}
          icon={education}
        />
      </div>
      <div className="jobs-timeline timeline">
        <TimelineItem
          duration={"2012-2020"}
          title={"Student"}
          desc={"lreom"}
          icon={brief}
        />
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
