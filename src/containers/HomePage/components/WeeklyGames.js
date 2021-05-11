import { Col, Image, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";
import styled from "styled-components";
import { CustomRow } from "../../../components/Reusable/Utilities";
import { ICOLOR } from "../../../constants";

const Root = styled.div`
  background-color: ${ICOLOR.white};
  padding: 290px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div``;

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
            <Left></Left>
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
    </Root>
  );
}

export default WeeklyGames;
