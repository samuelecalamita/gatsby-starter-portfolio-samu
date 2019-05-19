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
  ${tw`mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 h-auto`};
`;

const AboutSub = styled.p`
  ${tw`text-white pt-12 lg:pt-0 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutSubtitle = styled.h3`
  ${tw`text-2xl lg:text-3xl font-serif text-white mt-8 pt-6 md:pt-12`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans text-justify`};
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
          Let's{" "}
          <a href="mailto:samuelecalamita@gmail.com" title="Let´s chat!">
            chat
          </a>
        </Subtitle>
      </Hero>
      <About offset={1}>
        <Title>About</Title>
        <AboutHero>
          {/* <Avatar src={avatar} alt="Samuele Calamita Bild" /> */}
          <AboutSub>
            Hi, ich bin Samuele. Ich komme aus Italien und lebe seit mehr als 5
            Jahren mit meiner Frau und unserem Kater Loui in Berlin. Derzeit
            arbeite ich als Frontend Developer bei der{" "}
            <a
              href="https://www.pinuts.de/"
              title="Pinuts Website besuchen..."
              target="_blank"
            >
              Pinuts media+science GmbH
            </a>
            .
          </AboutSub>
        </AboutHero>
        <AboutSubtitle>Meine Skills</AboutSubtitle>
        <AboutDesc>
          <strong>Semantisches HTML</strong> (Jade, Pug, AMP Grundlagen),{" "}
          <strong>CSS</strong> (Sass, Scss, Less, BEM, CSS Animationen){" "}
          <strong>Javascript</strong> (jQuery, ES6, React Grundlagen, GatsbyJS
          Grundlagen) <strong>SVG</strong>, <strong>Accessibility</strong>,{" "}
          <strong>Responsive-Verhalten</strong>,{" "}
          <strong>Frontend-Frameworks</strong> (Bootstrap 3 und 4, Foundation,
          Foundation for Emails) <strong>Task Runner</strong> (Grunt, Gulp){" "}
          <strong>Sonstige Kenntnisse</strong> Sketch (Asset Management,
          InVision, Scrum Grundlagen, Jira, Confluence)
        </AboutDesc>
      </About>
      <Contact offset={2}>
        <Inner>
          <Title>Kontakt</Title>
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
          &copy; 2019 by Samuele Calamita{" "}
          <Link to="/datenschutz">Datenschutz</Link>
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
