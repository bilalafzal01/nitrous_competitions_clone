import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import TitleJumbotron from "../../components/Reusable/TitleJumbotron";
import { CustomRow } from "../../components/Reusable/Utilities";
import { ICOLOR } from "../../constants";
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
      <Helmet>
        <title>About Us</title>
      </Helmet>
      {/* about us jumbotron */}
      <CustomRow>
        <Col span={24}>
          <TitleJumbotron title="About Us" />
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
            {/* charities */}
            <CustomRow>
              <Col span={24}>
                <Charities />
              </Col>
            </CustomRow>
          </PaddedContent>
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
