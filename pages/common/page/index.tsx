import React from "react";
import { Layout } from "antd";
import { PageStyle } from "./style";
import { PageHeader } from "../header";
const { Header, Content } = Layout;

export class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageStyle>
        <Layout className='page'>
          <PageHeader selectedId={this.props.selectedId}></PageHeader>
          <Content className='content'>{this.props.children}</Content>
        </Layout>
      </PageStyle>
    );
  }
}
