import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { PageHeader } from "../common/header";
import { Page } from "../common/page";
import { Row, Col } from "antd";
import { BlogStyle } from "./style";


const Blog: NextPage = (props) => {
  const {data} = props

  const getArticles = (datas) => {
    let lis: any = []
    datas.forEach((data) => {
      Object.keys(data).forEach((month)=> {
        data[month].forEach((element) => {
          let title = element.split('.')[0]
          lis.push(<li>{month + '：' + title}</li>)
        });
      });
    });
    return (
      <ul>
        {lis}
      </ul>
    )
  }
  return (
    <BlogStyle>
      <Page selectedId={2}>
        <Row>
          <Col span={4}></Col>
          <Col span={16} className="list">
            {
              Object.keys(data).map((year)=>{
                return <div>
                  <h2>{year}</h2>
                  {
                    getArticles(data[year])
                  }
                </div>
              })
            }
          </Col>
          <Col span={4}></Col>
        </Row>
      </Page>
    </BlogStyle>
  );
};

Blog.getInitialProps = async (res) => {
  var fs = require("fs");

  const files = fs.readdirSync('./post');
  let components: string[] = [];
  files.forEach(function (item: string) {
    let stat = fs.lstatSync("./post/" + item);
    if (stat.isDirectory() === true) {
      components.push(item);
    }
  });
  // console.log(components)
  const map:{[x: string]: any;} = {}
  components.forEach((component)=>{
    // console.log(component)
    let month: { [x: string]: any; }[] = []
    const files = fs.readdirSync(`./post/${component}`);
    files.forEach(function (item: string) {
      let stat = fs.lstatSync(`./post/${component}/` + item);
      if (stat.isDirectory() === true) {
        //读取文件名称
        let articles = fs.readdirSync(`./post/${component}/${item}`);
        articles = articles.filter(function (article: string) {
          return !article.startsWith('.')
        })
        // console.log(articles)
        if (articles.length > 0) {
          month.push({[item]:articles});
        }
      }
    });
    if (month.length>0) {
      map[component] = month
    }
  })
  // console.log(map)

  return { data: map };
};

export default Blog;
