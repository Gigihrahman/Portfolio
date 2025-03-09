import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container m-auto">
      <div className="flex items-center justify-between p-8">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <div className="flex items-center gap-4">
          <Link href="#home">
            <button className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
              Home
            </button>
          </Link>
          <Link href="#portfolio">
            <button className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
              Portfolio
            </button>
          </Link>
          <Link href="#skill">
            <button className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
              Skills
            </button>
          </Link>
          <Link href="#aboutme">
            <button className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
              About Me
            </button>
          </Link>
        </div>
        <Link href="#contact-form">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
