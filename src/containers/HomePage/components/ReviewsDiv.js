import { Col, Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CustomH2 } from "../../../components/Reusable/Typography";
import { CustomRow } from "../../../components/Reusable/Utilities";
import { ICOLOR } from "../../../constants";
import reviews from "../../../constants/reviews";

const Root = styled.div`
  padding: 100px 290px;
  background-color: ${ICOLOR.white};
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    max-width: 524px;
    text-align: center;
  }
`;

const ReviewCol = styled(Col)``;

const ReviewRoot = styled.div`
  border: 2px solid #0000000d;
  border-radius: 36px;
  margin-bottom: 22px;
  padding: 35px 22px 20px;

  p {
    font-size: 15px;
    line-height: 24px;
    color: ${ICOLOR.textLightGray};
    margin-bottom: 0;
  }
`;

const StarsCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const NameImageRow = styled(CustomRow)`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h6 {
    font-family: "Poppins-SemiBold";
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 0;
  }
`;

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    font-size: 14px;
    line-height: 21px;
    color: ${ICOLOR.textLightGray};
  }

  img {
    margin-left: 3.92px;
  }
`;

const ReviewCard = ({ item }) => {
  return (
    <ReviewRoot>
      <CustomRow marginbottom="30px">
        {/* left quote icon */}
        <Col span={4}>
          <Image
            alt=""
            preview={false}
            src={
              require("../../../assets/images/icons/leftQuoteIcon.png").default
            }
          />
        </Col>
        {/* review content */}
        <Col span={20}>
          <p>{item.reviewContent}</p>
        </Col>
      </CustomRow>
      <CustomRow>
        {/* rating stars */}
        <StarsCol span={8}>
          <Image
            preview={false}
            alt=""
            src={
              require("../../../assets/images/icons/ratingStarsFive.png")
                .default
            }
          />
        </StarsCol>
        {/* user name + picture */}
        <Col span={16}>
          <NameImageRow gutter={[16, 16]}>
            <Col>
              <h6>{item.name}</h6>
              <CustomLink>
                <span>View Post</span>
                <Image
                  preview={false}
                  alt=""
                  src={
                    require(`../../../assets/images/icons/ratingStarBlue.png`)
                      .default
                  }
                />
              </CustomLink>
            </Col>
            <Col>
              <Image
                preview={false}
                alt=""
                src={
                  require(`../../../assets/images/reviews/user${item.userImage}.png`)
                    .default
                }
              />
            </Col>
          </NameImageRow>
        </Col>
      </CustomRow>
    </ReviewRoot>
  );
};

function ReviewsDiv() {
  return (
    <Root>
      {/* Title Row */}
      <CustomRow marginbottom="43px">
        <Col span={24}>
          <TitleDiv>
            <CustomH2>Don't Just Take Our Word For It...</CustomH2>
          </TitleDiv>
        </Col>
      </CustomRow>
      {/* reviews row */}
      <CustomRow gutter={[16, 16]}>
        {/* 2 reviews, vertical */}
        <ReviewCol span={8}>
          <ReviewCard item={reviews[0]} />
          <ReviewCard item={reviews[3]} />
        </ReviewCol>
        {/* 2 reviews, vertical */}
        <Col span={8}>
          <ReviewCard item={reviews[1]} />
          <ReviewCard item={reviews[4]} />
        </Col>
        {/* 2 reviews, vertical */}
        <Col span={8}>
          <ReviewCard item={reviews[2]} />
          <ReviewCard item={reviews[5]} />
        </Col>
      </CustomRow>
    </Root>
  );
}

export default ReviewsDiv;
