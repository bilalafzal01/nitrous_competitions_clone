import { Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICOLOR } from "../../constants";

const Root = styled.footer`
  background-color: ${ICOLOR.darkBackground};
  color: ${ICOLOR.textLight};
`;

const FooterTop = styled.div``;

const FooterBottom = styled.div`
  height: 110px;
  border-top: 1px solid ${ICOLOR.borderColor};
  display: flex;
  padding: 0 292px;
`;

const BottomLeft = styled.div`
  display: flex;
  align-items: center;
  width: 796px;
  span {
    line-height: 24px;
    font-size: 16px;
    opacity: 80%;
  }
`;
const BottomRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  a {
    color: ${ICOLOR.textLight};
    text-decoration: none;
    line-height: 26px;
  }
`;

function CustomFooter() {
  return (
    <Root>
      <FooterTop>hey</FooterTop>
      <FooterBottom>
        <BottomLeft>
          <span> Nitrous Competitions Ltd - </span>
          <Image
            preview={false}
            src={
              require("../../assets/images/icons/footerShiftcrowd.png").default
            }
          />
        </BottomLeft>
        <BottomRight>
          <Link>Terms &amp; Conditions</Link>
          <Link>Returns &amp; Refunds</Link>
          <Link>Cookie policy</Link>
        </BottomRight>
      </FooterBottom>
    </Root>
  );
}

export default CustomFooter;
