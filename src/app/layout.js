import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'TakeFood',
  description: 'Pide tu comimda a domicilio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-gray-400'>
      <body className={roboto.className}>
        <main className='max-w-4xl mx-auto p-4 border border-gray-400 bg-gray-400'>
          <Header />
          {children}
          <footer className='border-t border-gray-400 p-8 mt-16 text-center text-gray-500'>
            &copy; 2023 todos los derechos reservados
          </footer>
        </main>
        
      </body>
    </html>
  )
}
