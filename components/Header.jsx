import Image from "next/image";
import Link from "next/link";
import logo from "../public/img/logo3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleIconClose = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        className={`mobile_true ${isActive ? "" : "active"} 
       
         text-[#EC7427] hover:text-[#fff] transition-all duration-300 ease-in-out text-[20px] absolute z-[100]`}
      >
        <ul className="flex flex-col bg-black">
          <li className="text-[#fff] hover:bg-[#EC7427] m-[7px] p-[7px]">
            home
          </li>
          <li className="text-[#fff] hover:bg-[#EC7427]  m-[7px] p-[7px]">
            home
          </li>
          <li className="text-[#fff] hover:bg-[#EC7427] m-[7px] p-[7px]">
            home
          </li>
        </ul>
      </div>
      <header className="relative container mx-auto px-16 max-lg:px-2  z-30  py-8 flex justify-between items-center overflow-hidden">
        <div className="navbar">
          <div
            onClick={toggleIconClose}
            className=" hidden max-lg:block  text-[#EC7427] hover:text-[#fff] transition-all duration-300 ease-in-out text-[40px]"
          >
            <FontAwesomeIcon icon={isActive ? faXmark : faBars} />
          </div>
          <ul className="flex gap-[40px] max-lg:hidden">
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
            <Image
              src={logo}
              alt="logo_img"
              className="h-[90px] w-[90px] max-md:w-[70px] max-md:h-[70px]"
            />
          </Link>
        </div>
        <div className="info flex gap-[40px] max-lg:hidden">
          <Link href="#">
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
              <FontAwesomeIcon
                className="text-[#fff] pr-2"
                icon={faPaperPlane}
              />{" "}
              Start a Project
            </span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
