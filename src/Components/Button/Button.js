import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";

const Button = ({ name, blob, color, icon, bg, bFw, bRad, bPad }) => {
  const theme = useTheme();
  return (
    <ButtonStyled
      style={{
        backgroundColor: bg,
        color: color,
        borderRadius: bRad,
        padding: bPad,
        fontWeight: bFw,
      }}
      theme={theme}
    >
      {name} {icon} <div className={blob}></div>
    </ButtonStyled>
  );
};
const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  overflow: hidden;
  position: relative;
  i {
    margin-left: 0.6rem;
  }
  &:hover .blob {
    transform: scale(1.4);
    transition: all 0.3s ease-in-out;
  }
`;
export default Button;
