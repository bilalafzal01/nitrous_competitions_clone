import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { CustomH2 } from "../../../components/Reusable/Typography";
import { CustomRow } from "../../../components/Reusable/Utilities";
import { ICOLOR } from "../../../constants";
import howItWorks from "../../../constants/howItWorks";

const Root = styled.div`
  padding: 100px 290px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardRoot = styled.div`
  background-color: ${ICOLOR.white};
  padding: 46px 24px;
  border-radius: 50px;
  height: 340px;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 16px;
    line-height: 26px;
    color: ${ICOLOR.textLightGray};
  }
`;

const Title = styled.h5`
  font-family: "Poppins-Bold";
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-top: 14px;
  margin-bottom: 9px;
`;

const HowItWorksCard = ({ item }) => {
  return (
    <CardRoot>
      <CardBody>
        <img
          alt=""
          src={require(`../../../assets/images/icons/${item.icon}`).default}
        />
        <Title>{item.title}</Title>
        <p>{item.description}</p>
      </CardBody>
    </CardRoot>
  );
};

function HowItWorks() {
  return (
    <Root>
      {/* Title Row */}
      <CustomRow marginbottom="43px">
        <Col span={24}>
          <TitleDiv>
            <CustomH2>How It Works</CustomH2>
          </TitleDiv>
        </Col>
      </CustomRow>
      {/* Cards */}
      <CustomRow gutter={[20, 20]}>
        {howItWorks.map((item) => (
          <Col xl={6} key={item.id}>
            <HowItWorksCard item={item} />
          </Col>
        ))}
      </CustomRow>
    </Root>
  );
}

export default HowItWorks;
