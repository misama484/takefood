import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'TakeFood',
  description: 'Pide tu comimda a domicilio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className='max-w-4xl mx-auto p-4 border'>
          {children}
        </main>
        
      </body>
    </html>
  )
}
