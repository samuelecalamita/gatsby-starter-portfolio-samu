import React from "react";
import tw from "tailwind.macro";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import Inner from "../elements/Inner";
import { colors } from "../../tailwind";
import SVG from "../components/SVG";
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations";

const WaveWrapper = styled.div`
  ${tw`absolute pin-b w-full`};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw`relative h-full`};
  svg {
    width: 100%;
    height: 40vh;
  }
  path {
    ${waveAnimation("20s")};
  }
`;

const About = ({ children, offset }) => (
  <>
    <Divider
      bg="#2323d9"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    />
    <Divider fill="#010157" speed={0.2} offset={offset}>
      <WaveWrapper>
        <InnerWave>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 338.05"
            preserveAspectRatio="none"
          >
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </WaveWrapper>
    </Divider>
    {/* <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG
          icon="box"
          hiddenMobile
          width={6}
          fill={colors.blue}
          left="50%"
          top="75%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          fill={colors["grey-darkest"]}
          left="70%"
          top="20%"
        />
        <SVG
          icon="triangle"
          width={8}
          stroke={colors["grey-darkest"]}
          left="25%"
          top="5%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={24}
          fill={colors.orange}
          left="80%"
          top="80%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="arrowUp"
          hiddenMobile
          width={16}
          fill={colors.purple}
          left="5%"
          top="80%"
        />
        <SVG
          icon="triangle"
          width={12}
          stroke={colors.white}
          left="95%"
          top="50%"
        />
        <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          fill={colors["grey-darkest"]}
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG
        icon="circle"
        width={12}
        fill={colors["grey-darkest"]}
        left="70%"
        top="60%"
      />
      <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
      <SVG
        icon="box"
        width={12}
        fill={colors["grey-darkest"]}
        left="20%"
        top="30%"
      />
      <SVG
        icon="hexa"
        width={8}
        stroke={colors["grey-darkest"]}
        left="80%"
        top="70%"
      />
    </Divider> */}
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
);

export default About;

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
