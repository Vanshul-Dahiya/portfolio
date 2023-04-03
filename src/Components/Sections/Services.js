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
      <Title name={"Service"} desc={"lorem2"} />
      <div className="services-con">
        <ServiceItem
          icon={design}
          title={"web design"}
          bg={theme.colorPurple}
          shadow={theme.shadowPurple}
          desc={"llorenkner"}
        />
        <ServiceItem
          icon={desktop}
          title={"web design"}
          bg={theme.colorGreenDark}
          shadow={theme.shadowGreen}
          desc={"llorenkner"}
        />
        <ServiceItem
          icon={code}
          title={"web design"}
          bg={theme.colorPrimary}
          shadow={theme.shadowPrimary}
          desc={"llorenkner"}
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
