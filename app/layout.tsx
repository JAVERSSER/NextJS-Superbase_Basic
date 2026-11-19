import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }} >
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {children}
      </body>
    </html>
  )
}