import React from "react";
import styled from "styled-components";
import { CustomH1 } from "../../../components/Reusable/Typography";
import { ICOLOR } from "../../../constants";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 157px 0;
  background-color: ${ICOLOR.linenBackground};
`;

function AboutJumbotron() {
  return (
    <Root>
      <CustomH1 textTransform="uppercase">About Us</CustomH1>
    </Root>
  );
}

export default AboutJumbotron;
