import { Button, Col, Image } from "antd";
import React from "react";
import styled from "styled-components";
import { CustomH1 } from "../../../components/Reusable/Typography";
import { CustomRow } from "../../../components/Reusable/Utilities";
import { ICOLOR } from "../../../constants";

const CustomParaDiv = styled.div`
  width: 470px;
  color: ${ICOLOR.white};

  p {
    font-size: 20px;
    line-height: 30px;
  }
`;

const MainButton = styled(Button)`
  width: 482px;
  height: 64px;
  color: ${ICOLOR.white};
  background-color: ${ICOLOR.orange};
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 36px;
  justify-content: space-between;
  cursor: pointer;
  span {
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
`;

function HomeJumbotron() {
  return (
    <div className="homeMain">
      {/* title */}
      <CustomRow marginbottom="17px">
        <Col span={24}>
          <CustomH1 color={ICOLOR.white}>
            NITROUS
            <br />
            COMPETITIONS
          </CustomH1>
        </Col>
      </CustomRow>
      {/* para */}
      <CustomRow marginbottom="62px">
        <Col span={24}>
          <CustomParaDiv>
            <p>
              Our live draws will now be streamed via our Facebook page . You
              need to be in it to win it!
            </p>
          </CustomParaDiv>
        </Col>
      </CustomRow>
      {/* play now */}
      <CustomRow>
        <Col span={24}>
          <MainButton>
            <span>Play Now</span>
            <Image
              preview={false}
              src={
                require("../../../assets/images/icons/rightArrow.png").default
              }
              alt=""
            />
          </MainButton>
        </Col>
      </CustomRow>
    </div>
  );
}

export default HomeJumbotron;
