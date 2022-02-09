import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { PageHeader } from "../common/header";
import { Page } from "../common/page";
import { Row, Col } from "antd";
import { BlogStyle } from "./style";

const Blog: NextPage = () => {
  return (
    <BlogStyle>
      <Page selectedId={2}>
        <Row>
          <Col span={4}></Col>
          <Col span={16} className="list">
            <div>
              <h2>2022年01月</h2>
              <div>
                <ul className="ul">
                  <li>2022.01.01: JavaScript指南</li>
                  <li>2022.01.01: JavaScript指南</li>
                  <li>2022.01.01: JavaScript指南</li>
                  <li>2022.01.01: JavaScript指南</li>
                  <li>2022.01.01: JavaScript指南</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Page>
    </BlogStyle>
  );
};

export default Blog;
