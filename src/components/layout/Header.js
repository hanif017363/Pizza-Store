import Link from "next/link";

function Header() {
  return (
    <div>
      <header className="flex item-center justify-between">
        <nav className="flex items-center justify-between gap-8 font-semibold text-gray-500">
          <Link className="logo-color font-bold text-2xl" href={"/"}>
            BIZZA
          </Link>

          <Link href={"/"} className="py-1">
            Home
          </Link>
          <Link href={"/menu"} className="py-1">
            Menu
          </Link>
          <Link href={"/about"} className="py-1">
            About
          </Link>
          <Link href={"/contact"} className="py-1">
            Contact
          </Link>
        </nav>
        <nav className="flex items-center justify-between gap-8">
          <Link className="text-black font-semibold" href={"/signup"}>
            Sign Up
          </Link>
          <Link
            href={"/login"}
            className="logo-bg rounded-full text-center text-white px-8 py-2 m-0"
          >
            Login
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
