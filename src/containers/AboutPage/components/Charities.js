import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { CustomRow } from "../../../components/Reusable/Utilities";
import {
  AboutPagePara,
  CustomH2,
} from "../../../components/Reusable/Typography";
import charityPartners from "../../../constants/charityPartners";
import { ICOLOR } from "../../../constants";

const Root = styled.div`
  margin-top: 110px;
  max-width: 1188px;
`;

const CustomCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CharityCardDiv = styled.div`
  border: 1.5px solid ${ICOLOR.lightGrayBorder};
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  height: 102px;
`;

const MorePara = styled.div`
  height: 102px;
  font-family: "Poppins-SemiBold";
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  color: ${ICOLOR.orange};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharitySmallCard = ({ item }) => {
  return (
    <CharityCardDiv>
      <img
        alt=""
        src={
          require(`../../../assets/images/charityPartners/${item.smallImage}`)
            .default
        }
      />
    </CharityCardDiv>
  );
};

function Charities() {
  return (
    <Root>
      <CustomRow gutter={[16, 16]}>
        {/* content */}
        <CustomCol xl={12}>
          <CustomH2 marginbottom="24px">
            We generate revenue for charities
          </CustomH2>
          <AboutPagePara fontsize="18px">
            Nitrouscompetitions can be used to generate revenue for its users
            and their business; but it can also be used to generate revenue for
            charities if hosts choose to donate all or part of the proceeds from
            ticket sales to good causes.
          </AboutPagePara>
        </CustomCol>
        {/* images */}
        <Col span={12}>
          <CustomRow gutter={[20, 20]}>
            {charityPartners.map((item) => (
              <Col span={8} key={item.id}>
                <CharitySmallCard item={item} />
              </Col>
            ))}
            <Col span={8}>
              <MorePara>+More</MorePara>
            </Col>
          </CustomRow>
        </Col>
      </CustomRow>
    </Root>
  );
}

export default Charities;
