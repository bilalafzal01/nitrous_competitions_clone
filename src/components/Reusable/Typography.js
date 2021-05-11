import styled from "styled-components";

const CustomH1 = styled.h1`
  font-family: "Poppins-Bold";
  font-size: 60px;
  line-height: 72px;
  color: ${({ color }) => color};
`;

const CustomH2 = styled.h2`
  font-family: "Poppins-Bold";
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: ${({ color }) => color};
`;

const CustomH3 = styled.h3`
  font-family: "Poppins-Bold";
  font-size: 26px;
  line-height: 39px;
  color: ${({ color }) => color};
`;

const CustomH4 = styled.h4`
  font-family: "Poppins-Bold";
  font-size: 18px;
  line-height: 27px;
  color: ${({ color }) => color};
`;

const CustomH5 = styled.h5``;

const CustomH6 = styled.h6``;

const CustomPara = styled.p`
  font-family: "Poppins-Regular";
  line-height: 26px;
`;

export {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
  CustomPara,
};
