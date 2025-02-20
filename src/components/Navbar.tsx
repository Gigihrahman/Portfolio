import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="container m-auto">
      <div className="flex items-center justify-between p-8">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <div className="flex items-center gap-4  ">
          <p className="hover:underline">Home</p>
          <p>Portofolio</p>
          <p>Skill</p>
          <p>Aboutme</p>
        </div>
        <button></button>
      </div>
    </nav>
  );
};

export default Navbar;
