import Image from "next/image";
import Link from "next/link";
import logo from "../public/img/logo3.png";
const Header = () => {
  return (
    <header className="relative z-30 container mx-auto px-16 py-8 flex justify-between items-center">
      <div className="navbar">
        <ul className="flex gap-[40px]">
          <li className="border-b border-solid  border-[#EC7427]">
            <Link href="#" className="text-[#EC7427]">
              Home
            </Link>
          </li>
          <li className="hover:border-b border-solid  hover:border-[#EC7427] transition-all duration-300 ease-in-out">
            <Link
              href="#"
              className=" text-white hover:text-[#EC7427] transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li className="hover:border-b border-solid  hover:border-[#EC7427] transition-all duration-300 ease-in-out">
            <Link
              href="#"
              className="text-white hover:text-[#EC7427] transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li className="hover:border-b border-solid  hover:border-[#EC7427] transition-all duration-300 ease-in-out">
            <Link
              href="#"
              className="text-white hover:text-[#EC7427] transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div className="logo">
        <Link href="#">
          <Image src={logo} alt="logo_img" className="h-[90px] w-[90px]" />
        </Link>
      </div>
      <div className="info flex gap-[40px]">
        <Link href="#" className="">
          <span className=" text-white hover:text-[#EC7427] transition-all duration-300 ease-in-out">
            +88 123 456 789
          </span>
        </Link>
        <Link href="#" className="start">
          <span>Start a Project</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
