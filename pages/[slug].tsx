import Head from "next/head"

//define this to return the paths - list of slugs - your blog posts
const getStaticPaths = async () => {
  const paths = [
    {
      params: {
        slug: "blog-post-1",
      },
    },
    {
      params: {
        slug: "blog-post-2",
      },
    },
  ]

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

  let title = "Blog Post 1"
  let description = "First Blog Post"
  let content = "This is the First Blog Post"

  if (slug === "blog-post-2") {
    title = "Blog Post 2"
    description = "Second Blog Post"
    content = "This is the Second Blog Post"
  }

  return {
    props: {
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
        <div className="prose max-w-none">{content}</div>
      </main>
    </>
  )
}

export default Slug

//it will not work unless you export these two.
export { getStaticPaths, getStaticProps }
