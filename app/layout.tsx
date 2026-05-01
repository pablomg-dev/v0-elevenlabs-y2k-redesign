import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ElevenLabs — Free AI Voice Generator & Voice Agents Platform',
  description: 'Bringing technology to life with ultra-realistic AI voice generation, voice agents, and more. Best viewed in Internet Explorer 6.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className="font-mono antialiased bg-black text-cyan-300">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
