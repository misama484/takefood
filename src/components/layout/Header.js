import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center justify-between">
             

        <nav className="flex gap-6 items-center text-gray-600 font-semibold">
          <Link className="text-primary font-semibold text-2xl" href={"/"}>
          TakeFood
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
          
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <Link href={'/register'} className="bg-transparent text-primary px-6 py-2 rounded-full">Crear cuenta</Link>
          <Link href={'/login'} className="bg-primary text-white px-6 py-2 rounded-full">Login</Link>
        </nav>
      </header>
  )
}
