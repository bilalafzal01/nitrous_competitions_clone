import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { CustomRow } from "../../components/Reusable/Utilities";
import { ICOLOR } from "../../constants";
import AboutJumbotron from "./components/AboutJumbotron";
import Charities from "./components/Charities";
import OnlineCompetitions from "./components/OnlineCompetitions";
import OurMission from "./components/OurMission";
import WhyUs from "./components/WhyUs";

const Root = styled.div``;

const PaddedContent = styled.div`
  padding: 100px 290px;
  background-color: ${ICOLOR.white};
`;

function AboutPage() {
  return (
    <Root>
      {/* about us jumbotron */}
      <CustomRow>
        <Col span={24}>
          <AboutJumbotron />
        </Col>
      </CustomRow>
      {/* padded content */}
      <CustomRow>
        <Col span={24}>
          <PaddedContent>
            {/* online competitions */}
            <CustomRow>
              <Col span={24}>
                <OnlineCompetitions />
              </Col>
            </CustomRow>
            {/* our mission */}
            <CustomRow>
              <Col span={24}>
                <OurMission />
              </Col>
            </CustomRow>
          </PaddedContent>
          {/* charities */}
          <CustomRow>
            <Col span={24}>
              <Charities />
            </Col>
          </CustomRow>
        </Col>
      </CustomRow>
      {/* why us */}
      <CustomRow>
        <Col span={24}>
          <WhyUs />
        </Col>
      </CustomRow>
      {/* dont take our word for it */}
      <CustomRow>
        <Col span={24}></Col>
      </CustomRow>
    </Root>
  );
}

export default AboutPage;
