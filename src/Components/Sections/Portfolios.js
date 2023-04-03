import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layout";
import Title from "../Title/Title";
import { portfolios as myPortfolios } from "../../data/portfolio";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import { getUnique } from "../../utils/helpers";

const Portfolios = () => {
  const theme = useTheme();
  const [portfolios, setPortfolios] = useState(myPortfolios);

  const [categories, setCategories] = useState([
    "All",
    ...getUnique(portfolios, "category"),
  ]);

  const [active, setActive] = useState(0);

  // change index
  const activeCategory = (ind) => {
    setActive(ind);
  };

  // filter
  const filterPortfolios = (cat, ind) => {
    if (cat === "All") {
      setPortfolios(myPortfolios);
      activeCategory(ind);
      return;
    }
    const filtered = myPortfolios.filter((port) => {
      return port.category === cat;
    });
    activeCategory(ind);
    setPortfolios(filtered);
  };

  return (
    <PortfoliosStyled theme={theme}>
      <Title name={"Portfolios"} desc={"lroemrmemek"} />
      <div className="filter-btns">
        {categories.map((cat, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                filterPortfolios(cat, index);
              }}
              className={`filter-btn ${active === index ? "active" : ""} `}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="portfolios-con">
        {portfolios.map((port) => {
          return (
            <li>
              <PortfolioItem key={port.id} {...port} />
            </li>
          );
        })}
      </div>
    </PortfoliosStyled>
  );
};
const PortfoliosStyled = styled(SectionLayout)`
  background: linear-gradient(180deg, #222121, #191919);
  .portfolios-con {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 2rem;
  }
  .filter-btns {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    .filter-btn {
      display: inline-block;
      font-family: inherit;
      font-size: inherit;
      font-weight: 600;
      color: ${(props) => props.theme.colorGrey1};
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      position: relative;
      transition: all 0.3s ease-in-out;
    }
  }
  .active {
    color: ${(props) => props.theme.colorPrimary} !important;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background: ${(props) => props.theme.colorPrimary};
    }
  }
`;
export default Portfolios;