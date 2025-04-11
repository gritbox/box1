// components/custom/Video.tsx

import React from 'react'

export const Video = ({ src, title }: { src: string; title?: string }) => {
  return (
    <div className="my-8 aspect-video w-full overflow-hidden rounded shadow-lg">
      <iframe
        src={src}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}