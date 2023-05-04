import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-blue-400 text-7xl">
        Hello my friends! I am glad you want to learn Next 13
      </h1>
    </main>
  )
}
