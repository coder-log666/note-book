import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getData } from "../data";
const Solution: NextPage = () => {
  const router = useRouter();
  const { code } = router.query;
  if (!code) return <div></div>;
  let data = getData(code);
  if (!data) return <div>暂无资源</div>;
  return (
    <div>
      <div>
        <iframe
          src={data.src}
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
          width="640"
          height="360"
        ></iframe>
      </div>
    </div>
  );
};

export default Solution;
