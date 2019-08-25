import React from "react";
import PropTypes from "prop-types";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import Inner from "../elements/Inner";
import { colors } from "../../tailwind";
import styled from "styled-components";
import tw from "tailwind.macro";
import SVG from "../components/SVG";
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations";

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`;

const About = ({ children, offset }) => (
  <>
    <Divider
      bg="#2323d9"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    />
    <Content speed={0.4} offset={offset}>
      <Wrapper>
        <Inner>{children}</Inner>
      </Wrapper>
    </Content>
  </>
);

export default About;

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
