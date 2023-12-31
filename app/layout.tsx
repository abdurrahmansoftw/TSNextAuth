import type { Metadata } from 'next'
import { Inter, Rajdhani } from 'next/font/google'
import Navbar from './Navbar'
import AuthProvider from './auth/Provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
  openGraph: {
    type: 'website',
    description: 'Generated by create next app',
  }
}


const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['600', '700'],
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  data-theme="winter">
      <body className={rajdhani.className}>
          <AuthProvider>
            <Navbar />
            <main className='p-3' > {children}</main>
          </AuthProvider>
        </body>
    </html>
  )
}
 
