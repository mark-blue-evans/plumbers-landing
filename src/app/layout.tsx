import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "QuickFix Plumbing - Professional Plumber Services",
  description: "Professional plumbing services available 24/7. Licensed, insured, and reliable plumbers ready to help.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
