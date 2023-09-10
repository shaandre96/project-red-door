"use client";

import Link from "next/link";
import { SearchIcon, Logo } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group text-sm`}>
      {title}

      <span
        className={`h-[1px] inline-block w-0 bg-dark 
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="absolute top-0 left-0 w-full px-4 py-4 font-medium flex items-center justify-between shadow-lg">
      <Link
        href="/"
        target={"_blank"}
        className="flex items-center justify-center"
      >
        <Logo className="mr-1" />
        <span className="px-0 mr-4 text-primary text-sm">Red Door Project</span>
      </Link>
      <nav className="flex items-center justify-between">
        <CustomLink href="#Hero" title="Home" className="mr-4" />
        <CustomLink href="#Services" title="Services" className="mx-4" />
        <CustomLink href="#About" title="About" className="ml-4" />
        <Link
          href="/"
          target={"_blank"}
        >
          <div className="w-[100px] mx-3 border-solid border-2 border-black rounded shadow-md">
            <SearchIcon className="ml-2" />
          </div>
        </Link>

        <p className="text-primary text-sm">中国</p>
      </nav>
    </header>
  );
};

export default NavBar;
