import type { NextPage } from "next";
import Link from "next/link";
import { PageHeader } from '../common/header/index';

const AlgorithmByJs: NextPage = () => {
  return (
    <div>
      <PageHeader selectedId={3}></PageHeader>
      <Link href="/algorithmByJs/solution/46">
          <a>全排列</a>
        </Link>
    </div>
  );
};

export default AlgorithmByJs;
