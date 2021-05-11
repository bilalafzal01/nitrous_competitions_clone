import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import {
  AboutPagePara,
  CustomH2,
  CustomH5,
} from "../../../components/Reusable/Typography";
import { CustomRow } from "../../../components/Reusable/Utilities";
import { ICOLOR } from "../../../constants";
import whyUs from "../../../constants/whyUs";

const Root = styled.div`
  padding: 100px 290px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardRootDiv = styled.div`
  padding: 56px 0;
  background-color: ${ICOLOR.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 37px;
  }

  p {
    width: 294px;
    text-align: center;
  }
`;

const WhyUsCard = ({ item }) => {
  return (
    <CardRootDiv>
      <img
        src={require(`../../../assets/images/about/${item.icon}`).default}
        alt=""
      />
      <CustomH5 marginbottom="21px" fontsize="18px">
        {item.title}
      </CustomH5>
      <AboutPagePara>{item.description}</AboutPagePara>
    </CardRootDiv>
  );
};

function WhyUs() {
  return (
    <Root>
      {/* title */}
      <CustomRow marginbottom="75px">
        <Col span={24}>
          <TitleDiv>
            <CustomH2>Why Us?</CustomH2>
          </TitleDiv>
        </Col>
      </CustomRow>
      {/* cards */}
      <CustomRow gutter={[50, 20]}>
        {whyUs.map((item) => (
          <Col span={8} key={item.id}>
            <WhyUsCard item={item} />
          </Col>
        ))}
      </CustomRow>
    </Root>
  );
}

export default WhyUs;
