import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <main className="flex items-center justify-between container py-7">
        <Image src="/DesignTicks_Logo.svg" width={225} height={58.373} />
        <ul className="flex gap-24 items-center justify-center">
          <li className="header-menu poppins-font">Services</li>
          <li className="header-menu poppins-font">Projects</li>
          <li className="header-menu poppins-font">Our Blogs</li>
          <li className="header-menu poppins-font">Contact us</li>
        </ul>
        <Link href="/contact" className="px-9 bg-orange-50 rounded-full text-white py-2 header-menu poppins-font">Contact Us</Link>
      </main>
    </>
  );
};

export default Navbar;
