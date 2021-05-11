/* eslint-disable no-unused-vars */
import { Button, Image } from "antd";
import React from "react";
import styled from "styled-components";
import { ICOLOR, NAVS } from "../../constants";
import { CustomButton } from "../Reusable/Buttons";
import NavItem from "./NavItem";

const Root = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 47px;
  height: 110px;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
`;

const NavBar = styled.div`
  display: flex;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;
`;

const SignInButton = styled(Button)`
  margin-left: 5px;
  outline: none;
  border-radius: 10px;
  background-color: white;
  border: none;
  height: 48px;
  width: 110px;
  span {
    font-family: "Inter-Medium";
    font-weight: 500;
    font-size: 16px;
    line-height: 19.36px;
    text-transform: uppercase;
  }
`;

function LargeHeader() {
  return (
    <Root>
      <Container>
        <Left>
          <Image
            preview={false}
            src={require("../../assets/images/icons/logo.svg").default}
            alt=""
          />
        </Left>
        <Right>
          <NavBar>
            {NAVS?.map((item) => {
              const { id, label, link } = item;
              return <NavItem {...{ id, label, link }} key={id} />;
            })}
          </NavBar>
        </Right>
        <Buttons>
          <CustomButton
            borderRadius
            background={ICOLOR.white}
            borderColor={ICOLOR.borderColor}
            textColor={ICOLOR.dark}
          >
            <Image
              preview={false}
              src={require("../../assets/images/icons/cartIcon.svg").default}
            />
            <span>£0.00</span>
          </CustomButton>
          <CustomButton
            borderRadius
            marginLeft="36px"
            background={ICOLOR.orange}
            textColor={ICOLOR.white}
          >
            <span>Sign up</span>
          </CustomButton>
          <CustomButton
            borderRadius
            marginLeft="5px"
            background={ICOLOR.white}
            textColor={ICOLOR.dark}
          >
            <span>Sign In</span>
          </CustomButton>
        </Buttons>
      </Container>
    </Root>
  );
}

export default LargeHeader;
