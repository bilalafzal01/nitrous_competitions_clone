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
  max-width: 1188px;
`;

function OnlineCompetitions() {
  return (
    <Root>
      <CustomRow gutter={[20, 20]}>
        {/* content */}
        <Col xl={12}>
          <CustomH2 marginbottom="25px">
            We hosts online competitions to fulfill your dream
          </CustomH2>
          <AboutPagePara>
            Nitrouscompetitions have been around for as long as we can all
            remember. In that time however, they've never developed or evolved
            with modern technology. Think of Nitrouscompetitions as the 'eBay'
            of the competition space! Forget paper tickets. Nitrouscompetitions
            is the new way to legally host and enter raffles online!
            <br />
            <br />
            Nitrouscompetitions is the first platform of its kind that enables
            users to host competition whilst at the same time legally enabling
            them to keep all of the revenue generated from ticket sales. Hosts
            specify the price per ticket and the number of tickets issued so
            that the odds for winning each raffle are fixed enabling users to
            calculate their chances of winning before entering.
            <br />
            <br />
            All features stem from our core ethos and desire to remain focussed
            on our mission.
          </AboutPagePara>
        </Col>
        {/* image */}
        <Col xl={12}>
          <img
            src={
              require("../../../assets/images/about/onlineCompetitions.png")
                .default
            }
            alt=""
          />
        </Col>
      </CustomRow>
    </Root>
  );
}

export default OnlineCompetitions;
