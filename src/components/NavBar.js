'use client'

import Link from "next/link";
import { SearchIcon, Logo } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
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
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav className="flex items-center justify-center flex-wrap">
        <Link href="/" target={"_blank"} className="flex">
          <Logo className="mr-1" />
          <span className="font-bold px-0 mr-4 text-red-600">Red Door Project</span>
        </Link>

      </nav>
      <nav className="flex items-center justify-between">
        <CustomLink href="#Hero" title="Home" className="mr-4" />
        <CustomLink href="#Services" title="Services" className="mx-4" />
        <CustomLink href="#About" title="About" className="ml-4" />
        <Link href="/" target={"_blank"}>
          <SearchIcon className="ml-4" />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
