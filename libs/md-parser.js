import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDir = path.join(process.cwd(), "content")

const getContent = async (slug) => {
  const fullPath = path.join(contentDir, `${slug}.md`)

  const fileContent = fs.readFileSync(fullPath, "utf8")

  const { data: frontmatter, content } = matter(fileContent)

  return {
    frontmatter,
    content,
  }
}

const getSlugs = () => {
  const fileNames = fs.readdirSync(contentDir)

  return fileNames.reduce(function (result, fileName) {
    if (fileName !== "img") {
      result.push({
        params: {
          slug: fileName.replace(/\.md$/, ""),
        },
      })
    }
    return result
  }, [])
}

const getBlogs = async () => {
  const fileNames = fs.readdirSync(contentDir)

  const blogs = fileNames.reduce(function (result, fileName) {
    if (fileName !== "img") {
      const fullPath = path.join(contentDir, fileName)

      const fileContent = fs.readFileSync(fullPath, "utf8")

      const { data: frontmatter } = matter(fileContent)

      result.push({
        slug: fileName.replace(/\.md$/, ""),
        frontmatter,
      })
    }
    return result
  }, [])

  return blogs
}

export { getContent, getSlugs, getBlogs }
