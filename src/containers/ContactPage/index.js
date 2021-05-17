import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import TitleJumbotron from "../../components/Reusable/TitleJumbotron";
import { CustomRow } from "../../components/Reusable/Utilities";
import { ICOLOR } from "../../constants";
import QuestionHelp from "./components/QuestionHelp";
import ContactForm from "./components/ContactForm";

const Root = styled.div`
  background-color: ${ICOLOR.white};
`;

const PaddedContent = styled.div`
  max-width: 945px;
  background-color: ${ICOLOR.white};
  padding: 132px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function ContactPage() {
  return (
    <Root>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      {/* contact us jumbotron */}
      <CustomRow>
        <Col span={24}>
          <TitleJumbotron title="Contact Us" />
        </Col>
      </CustomRow>
      {/* padded content */}
      <CustomRow justify="center">
        <Col xl={12}>
          <PaddedContent>
            {/* Questions or Help */}
            <CustomRow>
              <Col span={24}>
                <QuestionHelp />
              </Col>
            </CustomRow>
            {/* Form */}
            <CustomRow>
              <Col span={24}>
                <ContactForm />
              </Col>
            </CustomRow>
          </PaddedContent>
        </Col>
      </CustomRow>
    </Root>
  );
}

export default ContactPage;
