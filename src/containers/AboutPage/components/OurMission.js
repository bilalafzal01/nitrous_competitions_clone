import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import {
  AboutPagePara,
  CustomH2,
} from "../../../components/Reusable/Typography";
import { CustomRow } from "../../../components/Reusable/Utilities";

const Root = styled.div`
  margin-bottom: 110px;
`;

const CustomCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function OurMission() {
  return (
    <Root>
      <CustomRow gutter={[20, 20]}>
        <Col xl={12}>
          <img
            src={require("../../../assets/images/about/ourMission.png").default}
            alt=""
          />
        </Col>
        <CustomCol xl={12}>
          <CustomH2 marginbottom="24px">Our Mission</CustomH2>
          <AboutPagePara fontsize="18px">
            To modernise raffles and competitions by making them easy to host
            and enter whilst at the same time providing both 100% security as
            well as complete user transparency.
          </AboutPagePara>
        </CustomCol>
      </CustomRow>
    </Root>
  );
}

export default OurMission;
