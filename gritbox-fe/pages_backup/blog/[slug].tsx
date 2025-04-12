// pages/blog/[slug].tsx

import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { MDXWrapper } from '../../components/MDXWrapper'
import { getPostBySlug, getAllPostSlugs } from '../../lib/mdx'

export default function BlogPostPage({ frontMatter, content }: any) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | AuguryBot</title>
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{frontMatter.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{frontMatter.date}</p>
        <MDXWrapper source={content} />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPostSlugs()
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const { frontMatter, content } = await getPostBySlug(slug)

  return {
    props: {
      frontMatter,
      content,
    },
  }
}