import './globals.css'

export const metadata = {
  title: 'Kurt Chua | Portfolio',
  description: 'Software Engineer & Musician',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  )
}
