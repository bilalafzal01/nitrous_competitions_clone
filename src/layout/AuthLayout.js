/* eslint-disable no-unused-vars */
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function AuthLayout(props) {
  const { children } = props;

  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default AuthLayout;
