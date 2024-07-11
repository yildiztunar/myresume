import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import lightThemeImage from "../assets/header-bg-light.jpg";
import darkThemeImage from "../assets/header-bg-dark.jpg";
import Theme from "./Theme";
import Language from "./Language";

const HeaderStyle = styled.div`
  font-family: "Inter", sans-serif;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 60vh;
  background-position: center;
  display: flex;
`;

const FirstSection = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
margin: 0vh 0vh 0vh 14vh;
width: 50vh;
`
const TitleSection = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  margin-bottom:5rem;
  color: #CBF281;

`
const FirstMiddleSection = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
gap: 1.5rem;
`
const MeTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: left;
`;

const MeInformation = styled.h1`
  font-size: 1.3rem;
  text-align: left;

`;

const ButtonSection = styled.div`
  width: 50vh;
  display:flex;
  flex-direction: row;
  justify-content: left;
  color:#3730A3;
  gap: 0.5rem;
`
const MyButton =styled.button`
  font-weight: bold;
`
const SecondSection = styled.div`
`

const ThirdSection = styled.div`
`

function Header() {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);

  const backgroundImage = theme === "light" ? lightThemeImage : darkThemeImage;

  return (
    <HeaderStyle style={{ backgroundImage: `url(${backgroundImage})` }}>

    <FirstSection>

        <TitleSection>
            yildiz
        </TitleSection>
        
        <FirstMiddleSection>
        <MeTitle style={{ color: theme === "light" ? "#CBF180" : "black" }}>
            {t('meTitle')}
        </MeTitle>

        <MeInformation style={{ color: 'white' }}>
            {t('meInformation')}
        </MeInformation>

        <ButtonSection>
            <MyButton>Github</MyButton>
            <MyButton>Linkedin</MyButton>
        </ButtonSection>
        </FirstMiddleSection>

    </FirstSection>

    <SecondSection>
        <Language />
    </SecondSection>

    <ThirdSection>
        <Theme />
    </ThirdSection>


    </HeaderStyle>
  );
}

export default Header;
