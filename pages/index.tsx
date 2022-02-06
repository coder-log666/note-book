import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const openBlog = () => {
    router.push("/blog");
  };
  const openAlgorithmByJs = () => {
    return router.push("/algorithmByJs");
  }
  return (
    <div className={"home"}>
      <Head>
        <title>RiverLi的网络日志</title>
        <meta name="description" content="技术、生活、读书笔记、随想" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"home_center"}>
        <div className="home_center_title">
          <h1>{"李江的网络日志"}</h1>
          <div>{"LiJiang's Personal Website"}</div>
        </div>
        <div>
          <span className="home_center_content">
            <div onClick={openBlog}>
              <span className="home_center_content_arrow">{"»"}</span>{" "}
              <span>{"网络日志(Blog)"}</span>
            </div>
          </span>
          <span className="home_center_content">
            <div onClick={openAlgorithmByJs}>
              <span className="home_center_content_arrow">{"»"}</span>{" "}
              <span>{"算法讲解"}</span>
            </div>
          </span>
          <div className="home_center_bottom">
            <span>联系我</span> | <span>lijiang.com</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
