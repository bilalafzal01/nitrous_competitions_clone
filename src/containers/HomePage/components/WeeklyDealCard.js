import { Col, Image } from "antd";
import React from "react";
import styled from "styled-components";
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

function WeeklyDealCard({ item }) {
  return (
    <Root>
      <CustomRow>
        <Col span={12}></Col>
        <ImageCol span={12}>
          <img
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
