import { Inter } from 'next/font/google'
import './globals.css';
import { AuthProvider, Providers } from './providers';
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'SightChat',
  description: 'Generated by Prathamesh Mane',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AuthProvider>
            <main className=" { ${theme === 'dark' ? 'border-gray-700' : 'border-blue-500'}}" >
              {children}
            </main>
          </AuthProvider>
          </Providers>
      </body>
    </html>
  )
}
