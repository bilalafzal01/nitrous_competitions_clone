import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { CustomH2 } from "../../../components/Reusable/Typography";
import { CustomRow } from "../../../components/Reusable/Utilities";
import { ICOLOR } from "../../../constants";
import weeklyDealsCards from "../../../constants/weeklyDealsCards";
import WeeklyDealCard from "./WeeklyDealCard";

const Root = styled.div`
  background-color: ${ICOLOR.white};
  padding: 163px 290px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  p {
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
      <Row gutter={[20, 20]}>
        {weeklyDealsCards.map((item) => (
          <Col xl={12} key={item.id}>
            <WeeklyDealCard item={item} />
          </Col>
        ))}
      </Row>
    </Root>
  );
}

export default WeeklyGames;
