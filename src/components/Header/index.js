import { Image } from "antd";
import React from "react";
import styled from "styled-components";

const Root = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
`;

const NavBar = styled.div`
  display: flex;
`;

function LargeHeader() {
  return (
    <Root>
      <Container>
        <Left>
          <img src={require("../../assets/images/icons/logo.svg")} alt="" />
        </Left>
        <Right></Right>
      </Container>
    </Root>
  );
}

export default LargeHeader;
