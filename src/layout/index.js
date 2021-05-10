// import Footer from "../components/Footer";
// import Header from "../components/Header";
import React from "react";
import styled from "styled-components";
import { Layout as AntLayout } from "antd";

const { Header, Footer, Content } = AntLayout;
// const Root = styled.div``;
// const Container = styled.div`
//   /* max-width: 1400px; */
//   height: 100vh;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
// `;
// const Content = styled.div`
//   flex: 1 1 0%;
// `;

function Layout(props) {
  const { children } = props;
  return (
    <AntLayout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </AntLayout>
  );
}

export default Layout;
