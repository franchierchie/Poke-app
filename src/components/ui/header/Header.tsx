import Link from "next/link";

export const Header = () => {
  return (
    <nav className="py-4">
      <Link
        className="flex justify-center items-center gap-2"
        href="/"
      >
        <img className="w-10" src="/poke-ball.svg" alt="pokeball icon" />
        <p className="text-5xl font-extrabold">Poke</p>
      </Link>
    </nav>
  )
}
