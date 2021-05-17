import { Col, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import styled from "styled-components";
import { CustomRow } from "../../../components/Reusable/Utilities";
import { ICOLOR } from "../../../constants";

const Root = styled.div`
  margin: 45px 0;
  background-color: ${ICOLOR.grayBackground};
  padding: 107px 68px;
  width: 100%;
`;

const LeftInputsWrapper = styled.div``;

const InputLabel = styled.label`
  font-family: "Poppins-SemiBold";
  font-size: 17px;
  font-weight: 600;
  line-height: 23px;
`;

const RightInputsWrapper = styled.div`
  & textarea {
    background-color: ${ICOLOR.white};
    margin-top: 10px;
    border-radius: 5px;
    resize: none;
    padding: 22px;
    min-height: 313px;
    &:hover {
      background-color: ${ICOLOR.white}90;
    }
  }
`;

const CustomInput = styled.div`
  margin-bottom: 26px;

  input {
    margin-top: 10px;
    background-color: ${ICOLOR.white};
    border-radius: 5px;
    padding: 22px;

    &:hover {
      background-color: ${ICOLOR.white}90;
    }
    &::placeholder {
      color: ${ICOLOR.placeholderColor};
    }
  }

  select.contact {
    background-color: #fff;
    &::placeholder {
      color: ${ICOLOR.placeholderColor};
    }
  }
`;

// const CustomSelect = styled.div`
//   border: none;
//   border-radius: 10px;
//   padding: 16px;
//   background-color:
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   select {
//     width: 100%;
//   }
// `;

function ContactForm() {
  return (
    <Root>
      {/* inputs */}
      <CustomRow gutter={[20, 20]}>
        {/* left inputs */}
        <Col span={12}>
          <LeftInputsWrapper>
            {/* Topic */}
            <CustomInput>
              <InputLabel>Topic</InputLabel>
              <select className="contact">
                <option value="Filter">Filter</option>
              </select>
            </CustomInput>
            {/* Subject */}
            <CustomInput>
              <InputLabel>Subject</InputLabel>
              <Input bordered={false} placeholder="Write your subject" />
            </CustomInput>
            {/* Email Address */}
            <CustomInput>
              <InputLabel>Email Address</InputLabel>
              <Input bordered={false} placeholder="Enter Email Address" />
            </CustomInput>
          </LeftInputsWrapper>
        </Col>
        {/* right inputs */}
        <Col span={12}>
          <RightInputsWrapper>
            <InputLabel>Message</InputLabel>
            <TextArea bordered={false} placeholder="Message" />
          </RightInputsWrapper>
        </Col>
      </CustomRow>
      {/* Button */}
    </Root>
  );
}

export default ContactForm;
