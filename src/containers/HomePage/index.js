import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { CustomRow } from "../../components/Reusable/Utilities";
import CharityPartners from "./components/CharityPartners";
import HomeJumbotron from "./components/HomeJumbotron";
import HowItWorks from "./components/HowItWorks";
import PrizeWinners from "./components/PrizeWinners";
import ReviewsDiv from "./components/ReviewsDiv";
import WeeklyGames from "./components/WeeklyGames";

const Root = styled.div``;

function HomePage() {
  return (
    <Root>
      {/* Jumbotron */}
      <CustomRow>
        <Col span={24}>
          <HomeJumbotron />
        </Col>
      </CustomRow>
      {/* Weekly Games */}
      <CustomRow>
        <Col span={24}>
          <WeeklyGames />
        </Col>
      </CustomRow>
      {/* Charity Partners */}
      <CustomRow>
        <Col span={24}>
          <CharityPartners />
        </Col>
      </CustomRow>
      {/* Prize Winners */}
      <CustomRow>
        <Col span={24}>
          <PrizeWinners />
        </Col>
      </CustomRow>
      {/* How it works */}
      <CustomRow>
        <Col span={24}>
          <HowItWorks />
        </Col>
      </CustomRow>
      {/* Reviews */}
      <CustomRow>
        <Col span={24}>
          <ReviewsDiv />
        </Col>
      </CustomRow>
    </Root>
  );
}

export default HomePage;
