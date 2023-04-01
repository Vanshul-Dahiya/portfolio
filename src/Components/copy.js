import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";

const Header = () => {
  const theme = useTheme();
  return <HeaderStyled theme={theme}>Header</HeaderStyled>;
};
const HeaderStyled = styled.header``;
export default Header;
