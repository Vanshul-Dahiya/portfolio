import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";

const ServiceItem = ({ icon, title, desc, bg, shadow }) => {
  const theme = useTheme();
  return (
    <ServiceItemStyle
      theme={theme}
      style={{
        background: bg,
        boxShadow: shadow,
      }}
    >
      <div className="icon">{icon}</div>
      <h4> {title} </h4>
      <p> {desc} </p>
    </ServiceItemStyle>
  );
};
const ServiceItemStyle = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  .icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colorBg3};
    transition: all 0.3s ease-in-out;
    i {
      font-size: 2rem;
    }
    &:hover {
      background-color: ${(props) => props.theme.colorGreen};
    }
  }
  h4 {
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    margin: 1.2rem 0;
  }
  &:hover {
    transform: translateY(-3px);
  }
  p {
    text-align: center;
  }
`;
export default ServiceItem;
