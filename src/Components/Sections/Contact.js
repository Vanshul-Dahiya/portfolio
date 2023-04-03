import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layout";
import Button from "../Button/Button";

import Title from "../Title/Title";

const Contact = () => {
  const theme = useTheme();
  return (
    <ContactStyled id="contact" theme={theme}>
      <Title
        name={"Lets Talk"}
        desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      />

      <div className="contact-info">
        <div className="map-section"></div>
        <form action="" className="form-section">
          <div className="input-control">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
          </div>
          <div className="input-control">
            <input type="text" placeholder="Subject" />
          </div>
          <div className="input-control">
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="btn-con">
            <Button
              name="Send Message"
              blob="blob"
              bg={theme.colorPrimary}
              color={theme.colorWhite}
              bFw={"600"}
              onClick="onClick"
              bRad={"30px"}
              bPad={theme.bPad1}
            />
          </div>
        </form>
      </div>
    </ContactStyled>
  );
};
const ContactStyled = styled(SectionLayout)`
  position: relative;
  .contact-info {
    display: flex;
    gap: 2rem;
    margin-top: 3rem;
    @media screen and (max-width: 973px) {
      flex-direction: column;
    }
    .map-section {
      width: 40%;
      position: relative;
      img {
        width: 100%;
        object-fit: cover;
        opacity: 0.1;
      }
    }
    .form-section {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      .input-control {
        display: flex;
        gap: 1rem;
        input,
        textarea {
          width: 100%;
          padding: 1rem 1.5rem;
          border-radius: 30px;
          font-size: inherit;
          outline: none;
          border: none;
          font-family: inherit;
          resize: none;
        }
      }
    }
  }
`;
export default Contact;
