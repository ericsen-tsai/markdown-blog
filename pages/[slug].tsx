import Head from "next/head"

import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"

import { getSlugs, getContent } from "../libs/md-parser"

//define this to return the paths - list of slugs - your blog posts
const getStaticPaths = async () => {
  const paths = getSlugs()

  return {
    paths,
    fallback: false,
  }
}

type Params = {
  slug: string
}

const getStaticProps = async ({ params }: { params: Params }) => {
  const slug = params.slug
  const { frontmatter, content } = await getContent(slug)
  const { title, description } = frontmatter

  return {
    props: {
      slug,
      title,
      description,
      content,
    },
  }
}

//render your dynamic content here
const Slug = ({
  title,
  description,
  content,
}: {
  title: string
  description: string
  content: string
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} />
      </Head>
      <main className="max-w-7xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[gfm]}>{content}</ReactMarkdown>
        </article>
      </main>
    </>
  )
}

export default Slug

//it will not work unless you export these two.
export { getStaticPaths, getStaticProps }
