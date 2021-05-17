import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { CustomH2, CustomH3 } from "../../../components/Reusable/Typography";
import { CustomRow } from "../../../components/Reusable/Utilities";
import { ICOLOR } from "../../../constants";
import prizeWinners from "../../../constants/prizeWinners";

const Root = styled.div`
  background-color: ${ICOLOR.white};
  padding: 100px 290px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 16px;
    color: ${ICOLOR.textLightGray};
  }
`;

const PrizeWinnerDiv = styled.div`
  background-color: ${ICOLOR.grayBackground};
  img {
    width: 100%;
  }
`;

const TopBanner = styled.div`
  min-height: 36px;
  color: ${ICOLOR.white};
  font-family: "Inter-Bold";
  font-size: 23px;
  line-height: 28px;
`;

const InfoDiv = styled.div`
  padding: 28px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 18px;
    color: ${ICOLOR.textLightGray};
    margin-bottom: 4px;
  }
  p.winnerName {
    font-family: "Poppins-Bold";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    color: ${ICOLOR.dark};
    margin-bottom: 13px;
  }
`;

const TickerNumber = styled.span`
  font-family: "Poppins-SemiBold";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  color: ${ICOLOR.orange};
`;

const PrizeWinnerCard = ({ item }) => {
  return (
    <PrizeWinnerDiv>
      {/* Top Banner */}
      <div className="topBanner">
        <TopBanner>Winner</TopBanner>
      </div>
      {/* Image */}
      <img
        src={
          require(`../../../assets/images/prizeWinners/${item.image}`).default
        }
        alt=""
      />
      {/* Info Div */}
      <CustomRow>
        <Col span={24}>
          <InfoDiv>
            <CustomH3>{item.won}</CustomH3>
            <p>Won by</p>
            <p className="winnerName">{item.winner}</p>
            <div className="winnerTickerNumber">
              <TickerNumber>{item.ticketNumber}</TickerNumber>
            </div>
          </InfoDiv>
        </Col>
      </CustomRow>
    </PrizeWinnerDiv>
  );
};

function PrizeWinners() {
  return (
    <Root>
      {/* title row */}
      <CustomRow marginbottom="62px">
        <Col span={24}>
          <TitleDiv>
            <CustomH2>Prize Winners</CustomH2>
            <p>Recently won, dont miss out on the next winners!</p>
          </TitleDiv>
        </Col>
      </CustomRow>
      {/* cards */}
      <CustomRow gutter={[20, 20]}>
        {prizeWinners.map((item) => (
          <Col xl={8} key={item.id}>
            <PrizeWinnerCard item={item} />
          </Col>
        ))}
      </CustomRow>
    </Root>
  );
}

export default PrizeWinners;
