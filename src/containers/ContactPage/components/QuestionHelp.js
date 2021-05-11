import { Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AboutPagePara,
  CustomH2,
  CustomH6,
} from "../../../components/Reusable/Typography";
import { CustomRow } from "../../../components/Reusable/Utilities";
import { ICOLOR } from "../../../constants";

const Root = styled.div``;

const SubPara = styled.p`
  max-width: 639px;
  margin-top: 20px;
  font-family: "Poppins-Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${ICOLOR.textLightGray};
  min-height: 95px;
  & a {
    color: ${ICOLOR.orange};
  }
`;

const IconCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const CustomInfo = ({ icon, title, content }) => {
  return (
    <CustomRow>
      {/* Icon col */}
      <IconCol span={4}>
        <img
          src={require(`../../../assets/images/icons/${icon}`).default}
          alt=""
        />
      </IconCol>
      {/* info col */}
      <Col span={20}>
        <CustomH6 marginbottom="13px" fontsize="20px">
          {title}
        </CustomH6>
        <AboutPagePara>{content}</AboutPagePara>
      </Col>
    </CustomRow>
  );
};

function QuestionHelp() {
  return (
    <Root>
      {/* title and sub para */}
      <CustomRow>
        <Col span={24}>
          <CustomH2>Questions or Help?</CustomH2>
          <SubPara>
            Before contacting our team please take a look at our
            <Link to="/"> Frequently Asked Questions </Link>
            page to see if this resolves your issue.
          </SubPara>
        </Col>
      </CustomRow>
      {/* address and email */}
      <CustomRow gutter={[16, 16]}>
        {/* address */}
        <Col span={12}>
          <CustomInfo
            icon="addressIcon.png"
            title="Address"
            content="
          Nitrous Competitions Ltd, 32 Holmwood drive Leicester, LE3 9LF."
          />
        </Col>
        {/* email */}
        <Col span={12}>
          <CustomInfo
            icon="emailIcon.png"
            title="Email"
            content="info@nitrouscompetitions.com"
          />
        </Col>
      </CustomRow>
    </Root>
  );
}

export default QuestionHelp;
