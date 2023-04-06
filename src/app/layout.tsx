import Navbar from '@/components/layout/Navbar'
import './globals.css'

export const metadata = {
  title: 'Helkein Filosofia',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="black">
      <body className='h-screen flex flex-col'>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
