import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { CustomH2 } from "../../../components/Reusable/Typography";
import { CustomRow } from "../../../components/Reusable/Utilities";
import { ICOLOR } from "../../../constants";
import charityPartners from "../../../constants/charityPartners";

const Root = styled.div`
  background-color: ${ICOLOR.white};
  padding: 0 290px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    color: ${ICOLOR.textLightGray};
  }
`;

const CharityPartnerDiv = styled.div`
  border: 3px solid ${ICOLOR.lightGrayBorder};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 204px;
`;

const CharityPartnerCard = ({ item }) => (
  <CharityPartnerDiv>
    <img
      src={
        require(`../../../assets/images/charityPartners/${item.image}`).default
      }
      alt=""
    />
  </CharityPartnerDiv>
);

function CharityPartners() {
  return (
    <Root>
      {/* title row */}
      <CustomRow marginbottom="62px">
        <Col span={24}>
          <TitleDiv>
            <CustomH2>Our Charity Partners</CustomH2>
            <p>
              When you enter YOU can pick which charities benefit from your
              donations
            </p>
          </TitleDiv>
        </Col>
      </CustomRow>
      {/* cards */}
      <CustomRow gutter={[20, 20]}>
        {charityPartners.map((item) => (
          <Col xl={6} key={item.id}>
            <CharityPartnerCard item={item} />
          </Col>
        ))}
      </CustomRow>
    </Root>
  );
}

export default CharityPartners;
