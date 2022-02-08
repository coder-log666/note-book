import React from "react";
import { Layout, Menu } from "antd";
import { PageHeaderStyle } from "./style";
import Link from "next/link";
const { Header } = Layout;

const headerTabs = [
  {
    title: "首页",
    href: "/",
    id: 1,
  },
  {
    title: "文章",
    href: "/blog",
    id: 2,
  },
  {
    title: "算法",
    href: "/algorithmByJs",
    id: 3,
  },
  {
    title: "哔哩哔哩",
    href: "https://space.bilibili.com/525723339",
    id: 4,
  },
];

export class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageHeaderStyle>
        <Header className="header">
          <Menu className="menu">
            {headerTabs.map((tab) => {
              return (
                <Link href={tab.href}>
                  <a>
                    <Menu.Item
                      className={
                        "item " +
                        (this.props.selectedId == tab.id ? "selected" : "")
                      }
                      key={tab.id}
                    >
                      {tab.title}
                    </Menu.Item>
                  </a>
                </Link>
              );
            })}
          </Menu>
        </Header>
      </PageHeaderStyle>
    );
  }
}
