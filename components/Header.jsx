import Image from "next/image";
import Link from "next/link";
import logo from "../public/img/logo3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="relative container mx-auto px-16 z-30  py-8 flex justify-between items-center">
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
          <span className=" text-white hover:text-[#EC7427] transition-all duration-300 ease-in-out flex items-center gap-[10px] ">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-[#000] bg-[#EC7427] p-[2px] rounded-[4px]"
            />
            +88 123 456 789
          </span>
        </Link>
        <Link href="#" className="start">
          <span className="text-[#fff]">
            <FontAwesomeIcon className="text-[#fff] pr-2" icon={faPaperPlane} />{" "}
            Start a Project
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
