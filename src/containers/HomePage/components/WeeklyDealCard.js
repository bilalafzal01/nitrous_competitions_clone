import { Col, Image } from "antd";
import React from "react";
import styled from "styled-components";
import { CustomButton } from "../../../components/Reusable/Buttons";
import { CustomH3 } from "../../../components/Reusable/Typography";
import { CustomRow } from "../../../components/Reusable/Utilities";
import { ICOLOR } from "../../../constants";

const Root = styled.div`
  background-color: ${ICOLOR.grayBackground};
`;

const ImageCol = styled(Col)`
  display: flex;
  justify-content: flex-end;

  img {
  }
`;

const ContentCol = styled(Col)`
  padding: 30px;

  h3 {
    font-size: 24px;
  }
`;

const WorthPrice = styled.p`
  color: ${ICOLOR.orange};
  font-family: "Inter-SemiBold";
`;

const DescriptionPara = styled.p`
  font-size: 14px;
  color: ${ICOLOR.textLightGray};
`;

const TimeTicketDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: ${ICOLOR.textLightGray};
  line-height: 19.5px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 7.5px;
  }

  .ticketIconDiv {
    margin-left: 63px;
  }
`;

const DrawTypeDiv = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 7.5px;
  }

  span {
    font-size: 14px;
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    color: ${ICOLOR.dark};
  }
`;

const PriceDiv = styled.div`
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: baseline;

  span.price {
    font-size: 31px;
    color: ${ICOLOR.orange};
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    margin-right: 5px;
  }
`;

const PlayButton = styled(CustomButton)`
  span {
    text-transform: initial;
    font-size: 14px;
    line-height: 21px;
    font-family: "Poppins-SemiBold";
    font-weight: 600;
  }
`;

function WeeklyDealCard({ item }) {
  return (
    <Root>
      <CustomRow>
        {/* left column */}
        <ContentCol span={12}>
          {/* worth */}
          <CustomRow>
            <Col span={24}>
              <WorthPrice>Worth £{item.worth}</WorthPrice>
            </Col>
          </CustomRow>
          {/* title */}
          <CustomRow>
            <Col span={24}>
              <CustomH3>{item.title}</CustomH3>
            </Col>
          </CustomRow>
          {/* description */}
          <CustomRow>
            <Col span={24}>
              <DescriptionPara>{item.description}</DescriptionPara>
            </Col>
          </CustomRow>
          {/* time and tickets */}
          <CustomRow marginbottom="18px">
            <Col span={24}>
              <TimeTicketDiv>
                <div>
                  <img
                    alt=""
                    src={
                      require("../../../assets/images/icons/clockIcon.png")
                        .default
                    }
                  />
                  <span>{item.time} Hrs</span>
                </div>
                <div className="ticketIconDiv">
                  <img
                    alt=""
                    src={
                      require("../../../assets/images/icons/ticketIcon.png")
                        .default
                    }
                  />
                  <span>{item.ticketsPerEntry} ticket per entry</span>
                </div>
              </TimeTicketDiv>
            </Col>
          </CustomRow>
          {/* draw type */}
          <CustomRow marginbottom="18px">
            <Col span={24}>
              <DrawTypeDiv>
                <img
                  alt=""
                  src={
                    item.drawType === "live "
                      ? require("../../../assets/images/icons/liveDrawIcon.png")
                          .default
                      : require("../../../assets/images/icons/instantDrawIcon.png")
                          .default
                  }
                />
                <span>{item.drawType} Draw</span>
              </DrawTypeDiv>
            </Col>
          </CustomRow>
          {/* price */}
          <CustomRow marginbottom="18px">
            <Col span={24}>
              <PriceDiv>
                <span className="price">£{item.price} </span>
                <span>Per Ticket</span>
              </PriceDiv>
            </Col>
          </CustomRow>
          {/* button */}
          <CustomRow>
            <Col span={24}>
              <PlayButton
                borderRadius
                background={ICOLOR.orange}
                textColor={ICOLOR.white}
                width="100%"
              >
                <span>Play Now</span>
              </PlayButton>
            </Col>
          </CustomRow>
        </ContentCol>
        {/* image col */}
        <ImageCol span={12}>
          <Image
            height={"100%"}
            preview={false}
            src={
              require(`../../../assets/images/weeklygames/${item.image}`)
                .default
            }
            alt=""
          />
        </ImageCol>
      </CustomRow>
    </Root>
  );
}

export default WeeklyDealCard;
