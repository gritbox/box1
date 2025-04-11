// components/custom/FreebieButton.tsx

export const FreebieButton = ({ label, href }: { label: string; href: string }) => {
    return (
      <a
        href={href}
        download
        className="inline-block px-4 py-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white rounded shadow transition"
      >
        {label}
      </a>
    )
  }