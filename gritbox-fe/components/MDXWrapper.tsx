// components/MDXWrapper.tsx

import * as React from 'react'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Callout } from './custom/Callout'
import Image from 'next/image'
import { Video } from './custom/Video'
import { Gallery } from './custom/Gallery'
import { FreebieButton } from './custom/FreebieButton'

// Map of custom components used in MDX
const components = {
    Callout,
    Video,
    Gallery,
    FreebieButton,
    Image,
  // Add more custom components here as needed
}

interface Props {
  source: MDXRemoteSerializeResult
}

export const MDXWrapper: React.FC<Props> = ({ source }) => {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <MDXRemote {...source} components={components} />
    </article>
  )
}