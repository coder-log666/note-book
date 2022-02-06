import type { NextPage } from "next";
import { useRouter } from "next/router";

const Solution: NextPage = () => {
  const router = useRouter();
  const { code } = router.query;
  console.log('code = ' + code)
  debugger
  return (
    <div>
      <div>
        <iframe
          src="//player.bilibili.com/player.html?aid=635997394&bvid=BV1Kb4y1E7rD&cid=493500447&page=1"
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
