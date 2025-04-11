// lib/mdx.ts

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

export async function getPostBySlug(slug: string): Promise<{
  frontMatter: any
  content: MDXRemoteSerializeResult
}> {
  const filePath = path.join(CONTENT_DIR, slug, 'index.mdx')
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(raw)

  const mdxSource = await serialize(content, { scope: data })

  return {
    frontMatter: data,
    content: mdxSource,
  }
}

export function getAllPostSlugs(): string[] {
  return fs.readdirSync(CONTENT_DIR).filter((file) =>
    fs.existsSync(path.join(CONTENT_DIR, file, 'index.mdx'))
  )
}