import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { CustomRow } from "../../../components/Reusable/Utilities";
import {
  AboutPagePara,
  CustomH2,
} from "../../../components/Reusable/Typography";

const Root = styled.div`
  margin-top: 110px;
`;

const CustomCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Charities() {
  return (
    <Root>
      <CustomRow>
        {/* content */}
        <CustomCol xl={12}>
          <CustomH2 marginbottom="24px">
            We generate revenue for charities
          </CustomH2>
          <AboutPagePara fontsize="18px">
            Nitrouscompetitions can be used to generate revenue for its users
            and their business; but it can also be used to generate revenue for
            charities if hosts choose to donate all or part of the proceeds from
            ticket sales to good causes.
          </AboutPagePara>
        </CustomCol>
        {/* images */}
        <Col span={12}></Col>
      </CustomRow>
    </Root>
  );
}

export default Charities;
