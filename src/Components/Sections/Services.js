import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layout";

import Title from "../Title/Title";
import { code, design, desktop } from "../../utils/Icons";
import ServiceItem from "../ServiceItem/ServiceItem";

const Service = () => {
  const theme = useTheme();
  return (
    <ServiceStyled id="services" theme={theme}>
      <Title
        name={"Service"}
        desc={
          "I'm currently looking for an internship as full-stack developer. Last 2 years, I've spent learning different technologies, programming languages and different frameworks to develop web applications."
        }
      />
      <div className="services-con">
        <ServiceItem
          icon={code}
          title={"Full stack"}
          bg={theme.colorPurple}
          shadow={theme.shadowPurple}
          desc={
            "I can create a full stack application using MERN stack as per the client's request."
          }
        />
        <ServiceItem
          icon={desktop}
          title={"Flutter Development"}
          bg={theme.colorGreenDark}
          shadow={theme.shadowGreen}
          desc={
            "I can also help to create a cross platform application using flutter for android, iOS as well as web platforms."
          }
        />
        <ServiceItem
          icon={design}
          title={"Frontend Development"}
          shadow={theme.shadowPrimary}
          bg={theme.colorPrimary}
          desc={
            "I can create responsive, simple yet attractive UI as per the client's request."
          }
        />
      </div>
    </ServiceStyled>
  );
};
const ServiceStyled = styled(SectionLayout)`
  background: ${(props) => props.theme.colorBgGrad};
  .services-con {
    margin-top: 3.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
  }
`;
export default Service;
