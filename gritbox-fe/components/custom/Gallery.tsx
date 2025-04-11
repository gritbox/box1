import Image from 'next/image'

export const Gallery = ({ images }: { images: { src: string; alt?: string }[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
      {images.map(({ src, alt }, i) => (
        <div key={i} className="relative aspect-square rounded overflow-hidden">
          <Image src={src} alt={alt || ''} layout="fill" objectFit="cover" />
        </div>
      ))}
    </div>
  )
}