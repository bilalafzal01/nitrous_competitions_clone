import { Col, Image, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICOLOR } from "../../constants";
import { CustomButton } from "../Reusable/Buttons";
import { CustomH3, CustomH4, CustomPara } from "../Reusable/Typography";
import { CustomRow } from "../Reusable/Utilities";

const Root = styled.footer`
  background-color: ${ICOLOR.darkBackground};
  color: ${ICOLOR.textLight};
`;

const FooterTop = styled.div`
  padding: 120px 0;
  .center {
    display: flex;
    justify-content: center;
  }
`;

const CustomParaDiv = styled.div`
  width: 532px;
`;

const PaymentImagesDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: 0 9px;
  }
`;

const EmailInputDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${ICOLOR.white}20;
  border-radius: 6px;
  padding: 6px 12px;
  background-color: ${ICOLOR.inputDarkBG};
  font-size: 14px;
  line-height: 16.94px;
  input {
    width: 320px;
    height: 40px;
    outline: none;
    background-color: ${ICOLOR.inputDarkBG};
    border: none;
    font-family: "Inter-Regular";
    font-weight: 400;
    color: ${ICOLOR.textLight};
  }
  button {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: ${ICOLOR.inputDarkBG};
    height: 100%;
    border: none;
    color: ${ICOLOR.orange};
    font-family: "Inter-Regular";
    font-weight: 500;
  }
`;

const SocialLinksDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: 0 21px;
  }
`;

const FooterBottom = styled.div`
  height: 110px;
  border-top: 1px solid ${ICOLOR.white}10;
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
`;

const CustomLink = styled(Link)`
  margin: ${({ margin }) => (margin ? margin : 0)};
  color: ${ICOLOR.textLight};
  text-decoration: none;
  line-height: 26px;
  font-weight: ${({ fontweight }) => (fontweight ? fontweight : 400)};
  font-family: ${({ fontfamily }) => (fontfamily ? fontfamily : "inherit")};
  color: ${({ color }) => (color ? color : "inherit")};
`;

function CustomFooter() {
  return (
    <Root>
      {/* Top div */}
      <FooterTop>
        {/* title */}
        <CustomRow marginbottom="18px">
          <Col span={24} className="center">
            <CustomH3 color={ICOLOR.headingLight}>
              Nitrous Competitions
            </CustomH3>
          </Col>
        </CustomRow>
        {/* info para */}
        <CustomRow marginbottom="18px">
          <Col span={24} className="center">
            <CustomParaDiv>
              <CustomPara>
                Nitrous Competitions is a new, innovative competitions service
                built with you in mind. Our aim is to provide our contenders the
                chance to win amazing prizes.
              </CustomPara>
            </CustomParaDiv>
          </Col>
        </CustomRow>
        {/* links */}
        <CustomRow marginbottom="42px">
          <Col span={24} className="center">
            <div>
              <CustomLink
                margin="0 20px"
                color={ICOLOR.textLight}
                fontweight="700"
                fontfamily="Poppins-Bold"
              >
                Login
              </CustomLink>
              <CustomLink
                margin="0 20px"
                color={ICOLOR.textLight}
                fontweight="700"
                fontfamily="Poppins-Bold"
              >
                Create An Account
              </CustomLink>
              <CustomLink
                margin="0 20px"
                color={ICOLOR.textLight}
                fontweight="700"
                fontfamily="Poppins-Bold"
              >
                FAQ
              </CustomLink>
            </div>
          </Col>
        </CustomRow>
        {/* payment heading */}
        <CustomRow marginbottom="24px">
          <Col span={24} className="center">
            <CustomH4 color={ICOLOR.headingLight}>Payment Method</CustomH4>
          </Col>
        </CustomRow>
        {/* payment methods images */}
        <CustomRow marginbottom="36px">
          <Col span={24} className="center">
            <PaymentImagesDiv>
              <img
                preview={false}
                alt=""
                src={require("../../assets/images/icons/visa.svg").default}
              />
              <img
                preview={false}
                alt=""
                src={
                  require("../../assets/images/icons/mastercard.svg").default
                }
              />
              <img
                preview={false}
                alt=""
                src={require("../../assets/images/icons/amex.png").default}
              />
              <img
                preview={false}
                alt=""
                src={require("../../assets/images/icons/applePay.png").default}
              />
              <img
                alt=""
                src={require("../../assets/images/icons/gPay.png").default}
              />
            </PaymentImagesDiv>
          </Col>
        </CustomRow>
        {/* subscribe news */}
        <CustomRow marginbottom="24px">
          <Col span={24} className="center">
            <CustomH4 color={ICOLOR.headingLight}>Subscribe for news</CustomH4>
          </Col>
        </CustomRow>
        {/* newsletter input */}
        <CustomRow marginbottom="34px">
          <Col span={24} className="center">
            <EmailInputDiv>
              <Input type="text" placeholder="Email Address" />
              <button>Subscribe</button>
            </EmailInputDiv>
          </Col>
        </CustomRow>
        {/* social links */}
        <CustomRow>
          <Col span={24} className="center">
            <SocialLinksDiv>
              <Link to="#">
                <img
                  alt=""
                  src={
                    require("../../assets/images/icons/facebookIcon.png")
                      .default
                  }
                />
              </Link>
              <Link to="#">
                <img
                  alt=""
                  src={
                    require("../../assets/images/icons/twitterIcon.png").default
                  }
                />
              </Link>
              <Link to="#">
                <img
                  alt=""
                  src={
                    require("../../assets/images/icons/linkedinIcon.png")
                      .default
                  }
                />
              </Link>
              <Link to="#">
                <img
                  alt=""
                  src={
                    require("../../assets/images/icons/youtubeIcon.png").default
                  }
                />
              </Link>
            </SocialLinksDiv>
          </Col>
        </CustomRow>
      </FooterTop>
      {/* Bottom div */}
      <FooterBottom>
        {/* title + shiftcrowd logo */}
        <BottomLeft>
          <span> Nitrous Competitions Ltd - </span>
          <img
            src={
              require("../../assets/images/icons/footerShiftcrowd.png").default
            }
            alt=""
          />
        </BottomLeft>
        {/* links */}
        <BottomRight>
          <CustomLink>Terms &amp; Conditions</CustomLink>
          <CustomLink>Returns &amp; Refunds</CustomLink>
          <CustomLink>Cookie policy</CustomLink>
        </BottomRight>
      </FooterBottom>
    </Root>
  );
}

export default CustomFooter;
