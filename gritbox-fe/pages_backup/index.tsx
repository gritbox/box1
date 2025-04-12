// pages/blog/index.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
}

export async function getStaticProps() {
  const slugs = fs.readdirSync(CONTENT_DIR)

  const posts: BlogPostMeta[] = slugs.map((slug) => {
    const filePath = path.join(CONTENT_DIR, slug, 'index.mdx')
    const file = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(file)

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || '',
    }
  })

    // Optional: Sort by newest
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return {
      props: {
        posts,
      },
    }
  }
  
  export default function BlogIndex({ posts }: { posts: BlogPostMeta[] }) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <ul className="space-y-6">
          {posts.map(({ slug, title, date, excerpt }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>
                <a className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded transition">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="text-sm text-gray-500">{date}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{excerpt}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }