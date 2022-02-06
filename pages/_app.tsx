import 'github-markdown-css/github-markdown-light.css';
import '../styles/globals.css'

// import '../pages/article/github.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
