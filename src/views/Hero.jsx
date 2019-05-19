import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";
import Content from "../elements/Content";

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`;

const Hero = ({ children, offset }) => (
  <>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
);

export default Hero;

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
