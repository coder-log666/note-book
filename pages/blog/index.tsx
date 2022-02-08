import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {PageHeader} from '../common/header'

const Blog: NextPage = () => {

  return (
      <div>
          <PageHeader selectedId={2}></PageHeader>
      </div>
  )
}

export default Blog

