import React from "react";
import styled from "styled-components";
import ICOLOR from "constants/IColor";

const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${ICOLOR.dark};
`;

function PageLoader() {
  return <Root>Loading...</Root>;
}

export default PageLoader;
