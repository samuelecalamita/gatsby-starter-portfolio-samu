import React from "react";
import styled, {keyframes} from "styled-components";
import { Link } from "gatsby";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Layout from "../components/Layout";
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";
import Avatar from "../images/avatar.jpg";
import Hero from "../views/Hero";
import About from "../views/About";
import Contact from "../views/Contact";

const toRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-25px);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
    filter: blur(0);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.9;
  }
`

const ToRightAnimation = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateX(-25px);
  animation: 1s ease-out ${props => props.delay || "0"}s forwards ${toRight};
`

const AboutHero = styled.div`
  ${tw`mt-8 font-sans`};
`;

const AboutSub = styled.p`
  ${tw`text-white leading-normal pt-12 lg:pt-0 text-2xl lg:text-3xl xl:text-3xl`};
`;

const AboutSubtitle = styled.h3`
  ${tw`text-2xl lg:text-3xl font-serif text-white mt-8 pt-6 md:pt-12`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light leading-normal text-lg md:text-xl text-2xl lg:text-3xl xl:text-3xl font-sans`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light leading-normal font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const BackgroundVideo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  video {
    object-fit: cover;
    min-height: 100vh;
    width: 100%;
    opacity: 0;
    animation: 5s ease-out 1.5s forwards ${fadeIn};
  }

  &:after{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(1,1,87,0.9);
  } 
`;


  
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderVideo: "webm"
    }
  }
  

  componentDidMount() {
    const  isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    const renderVideo = isChrome === true ? "webm" : "mp4";
    this.setState({renderVideo});
  }

  render() { 
    return ( 
      <>
      <Layout />
        <BackgroundVideo>
          <video loop autoPlay muted>
            <source src={`a-spasso.${this.state.renderVideo}`} type={`video/${this.state.renderVideo}`} />
            Your browser does not support the video tag.
          </video>
        </BackgroundVideo>
      <Parallax pages={3}>
        <Hero offset={0}>
          <BigTitle>
            <ToRightAnimation delay="0.5">
              Hi, ich bin Samuele.
            </ToRightAnimation>
            <br />
            <ToRightAnimation delay="1">
              Frontend Developer
            </ToRightAnimation>
          </BigTitle>
          <Subtitle>
            <a href="mailto:samuelecalamita@gmail.com" title="Let´s chat!">
              <ToRightAnimation delay="1.5">
                Get in Touch
              </ToRightAnimation>
            </a>
          </Subtitle>
        </Hero>
        <About offset={1}>
          <Title>About</Title>
          <AboutHero>
            <AboutSub>
              Hi, ich bin Samuele. Ich komme aus Italien und lebe seit mehr als 5
              Jahren in Berlin. Nach drei Jahren Erfahrung bei Pinuts media+science,
               derzeit arbeite ich als Frontend Developer bei{" "}
              <a
                href="https://www.pro-vision.de/"
                title="pro!vision Website besuchen..."
                target="_blank"
              >
                pro!vision
              </a>
            </AboutSub>
  
            <AboutSubtitle>Meine Skills</AboutSubtitle>
            <AboutDesc>
              <strong>Semantisches HTML</strong> (Jade, Pug, AMP Grundlagen),{" "}
              <strong>CSS</strong> (Sass, Scss, Less, BEM, CSS Animationen),{" "}
              <strong>Javascript</strong> (jQuery, ES6, React Grundlagen, GatsbyJS
              Grundlagen), <strong>SVG</strong>, <strong>Accessibility</strong>,{" "}
              <strong>Responsive-Verhalten</strong>,{" "}
              <strong>Frontend-Frameworks</strong> (Bootstrap 3 und 4, Foundation,
              Foundation for Emails), <strong>Task Runner</strong> (Grunt, Gulp),{" "}
              <strong>Sonstige Kenntnisse</strong> Sketch, InVision, Scrum
              Grundlagen, Jira, Confluence.
            </AboutDesc>
          </AboutHero>
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
              </a>{", "}
              <a
                href="https://www.linkedin.com/in/samuele-calamita-556491117"
                target="_blank"
                title="Gehe zu: Samuele Calamita LinkedIn Profil"
              >
                LinkedIn
              </a>
              {", "}
              <a
                href="https://www.github.com/samuelecalamita"
                target="_blank"
                title="Gehe zu: Samuele Calamita Github Profil"
              >
                Github
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
     )
  }
}
 
export default Index;