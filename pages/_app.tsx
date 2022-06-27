import "../styles/globals.css"
import Menu from "./Menu"
import type { AppProps } from "next/app"

function MarkDownBlog({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Menu />
      <Component {...pageProps} />
    </div>
  )
}

export default MarkDownBlog
