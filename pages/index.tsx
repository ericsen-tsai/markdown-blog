import type { NextPage } from "next"
import Head from "next/head"
import { getBlogs } from "../libs/md-parser"
import Link from "next/link"

const getStaticProps = async () => {
  const blogs = await getBlogs()

  return {
    props: {
      blogs,
    },
  }
}

type Blog = {
  slug: string
  frontmatter: {
    title: string
    description: string
  }
}

const Index: NextPage<{ blogs: Blog[] }> = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Markdown Blog</title>
        <meta property="description" content="Index Page" />
      </Head>
      <main className="max-w-7xl mx-auto">
        {blogs.map((blog) => {
          return (
            <div
              className="prose prose-lg max-w-none"
              key={blog.frontmatter.title}
            >
              <Link href={`/${blog.slug}`}>
                <a className="underline">
                  <h2>{blog.frontmatter.title}</h2>
                </a>
              </Link>

              <h3>{blog.frontmatter.description}</h3>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default Index
export { getStaticProps }
