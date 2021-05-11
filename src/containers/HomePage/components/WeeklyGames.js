import { Button, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { CustomH2 } from "../../../components/Reusable/Typography";
import { CustomRow } from "../../../components/Reusable/Utilities";
import { ICOLOR } from "../../../constants";
import weeklyDealsCards from "../../../constants/weeklyDealsCards";
import WeeklyDealCard from "./WeeklyDealCard";

const Root = styled.div`
  background-color: ${ICOLOR.white};
  padding: 163px 290px 116px 290px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  p {
    font-size: 16px;
    color: ${ICOLOR.textLightGray};
  }
`;

const CustomSelect = styled.div`
  border: 1px solid ${ICOLOR.borderColor};
  border-radius: 10px;
  padding: 16px;
  display: flex;
  width: 184px;
  height: 48px;
  align-items: center;
  cursor: pointer;
`;

const LoadMoreButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadMoreButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 70px;
  background-color: ${ICOLOR.grayBackground};
  color: ${ICOLOR.orange};
  outline: none;
  border: none;
  border-radius: 10px;
  span {
    line-height: 27px;
    margin-left: 6px;
    font-weight: 600;
    font-size: 18px;
    font-family: "Poppins-SemiBold";
  }
  &:hover {
    background-color: ${ICOLOR.grayBackground}90;
    color: ${ICOLOR.orange};
  }
`;

function WeeklyGames() {
  return (
    <Root>
      {/* Title + filter row */}
      <CustomRow marginbottom="59px">
        <Col span={24}>
          <TitleDiv>
            <Left>
              <CustomH2>Weekly Games</CustomH2>
              <p>New dream prizes added daily - be sure to watch this space!</p>
            </Left>
            <CustomSelect>
              <img
                alt=""
                src={
                  require("../../../assets/images/icons/filterIcon.png").default
                }
              />
              <select>
                <option value="Filter">Filter</option>
              </select>
            </CustomSelect>
          </TitleDiv>
        </Col>
      </CustomRow>
      {/* Cards Row */}
      <CustomRow marginbottom="77px" gutter={[20, 20]}>
        {weeklyDealsCards.map((item) => (
          <Col xl={12} key={item.id}>
            <WeeklyDealCard item={item} />
          </Col>
        ))}
      </CustomRow>
      {/* Load more button */}
      <CustomRow>
        <Col span={24}>
          <LoadMoreButtonDiv>
            <LoadMoreButton>
              <img
                src={
                  require("../../../assets/images/icons/loadIcon.png").default
                }
                alt=""
              />
              <span>Load More</span>
            </LoadMoreButton>
          </LoadMoreButtonDiv>
        </Col>
      </CustomRow>
    </Root>
  );
}

export default WeeklyGames;
