import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="py-4">
      <Link
        className="flex justify-center items-center gap-2"
        href="/"
      >
        <Image
          src="/poke-ball.svg"
          alt="pokeball icon"
          width={ 30 }
          height={ 30 }
          className="w-10 h-auto object-contain"
        />
        <p className="text-5xl font-extrabold">Poke</p>
      </Link>
    </nav>
  )
}
