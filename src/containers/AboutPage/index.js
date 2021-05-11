import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { CustomRow } from "../../components/Reusable/Utilities";
import AboutJumbotron from "./components/AboutJumbotron";

const Root = styled.div``;

function AboutPage() {
  return (
    <Root>
      {/* about us jumbotron */}
      <CustomRow>
        <Col span={24}>
          <AboutJumbotron />
        </Col>
      </CustomRow>
      {/* online competitions */}
      <CustomRow>
        <Col span={24}></Col>
      </CustomRow>
      {/* our mission */}
      <CustomRow>
        <Col span={24}></Col>
      </CustomRow>
      {/* charities */}
      <CustomRow>
        <Col span={24}></Col>
      </CustomRow>
      {/* why us */}
      <CustomRow>
        <Col span={24}></Col>
      </CustomRow>
      {/* dont take our word for it */}
      <CustomRow>
        <Col span={24}></Col>
      </CustomRow>
    </Root>
  );
}

export default AboutPage;
