import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { CustomRow } from "../../components/Reusable/Utilities";

const Root = styled.div``;

function ContactPage() {
  return (
    <Root>
      {/* contact us jumbotron */}
      <CustomRow>
        <Col span={24}></Col>
      </CustomRow>
      {/* padded content */}
      <CustomRow>
        <Col span={24}>
          {/* Questions or Help */}
          <CustomRow>
            <Col span={24}></Col>
          </CustomRow>
          {/* Form */}
          <CustomRow>
            <Col span={24}></Col>
          </CustomRow>
        </Col>
      </CustomRow>
    </Root>
  );
}

export default ContactPage;
