import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-700">
      <div className="font-bold text-green-400 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        <Link href="/">
          <a className="text-base md:text-2xl">WatchMOVIES
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
