import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/beard.svg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 h-auto`};
`;

const AboutSub = styled.p`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={3}>
      <Hero offset={0}>
        <BigTitle>
          Hi, ich bin Samuele.
          <br />
          Frontend Developer
        </BigTitle>
        <Subtitle>
          Let' s chat:{" "}
          <a href="mailto:kontakt@samuelecalamita.de" title="Let´s chat!">
            kontakt@samuelecalamita.de
          </a>
        </Subtitle>
      </Hero>
      <About offset={1}>
        <Title>About</Title>
        <AboutHero>
          {/* <Avatar src={avatar} alt="Samuele Calamita Bild" /> */}
          <AboutSub>
            Mit großer Leidenschaft habe ich mich Jahr für Jahr in der
            digitalen, technischen Welt weitergebildet.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Der Beruf des Frontenddevelopers ist ein Traum für mich, weil mich
          schon seit der Berufsschule fasziniert, technische Lösungen und
          Logiken zu entwickeln sowie komplexe Stukturen zu realisieren.
        </AboutDesc>
      </About>
      <Contact offset={2}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Sag <a href="mailto:samuelecalamita@gmail.com">Hallo</a> oder besuch
            mich hier:{" "}
            <a
              href="https://www.xing.com/profile/Samuele_Calamita/cv"
              target="_blank"
              title="Gehe zu: Samuele Calamita Xing Profil"
            >
              Xing
            </a>{" "}
            &{" "}
            <a
              href="https://www.linkedin.com/in/samuele-calamita-556491117"
              target="_blank"
              title="Gehe zu: Samuele Calamita LinkedIn Profil"
            >
              LinkedIn
            </a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Samuele Calamita <Link to="/impressum">IMPRESSUM</Link>
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
