import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./themeToggle";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-4 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex-between">
        <Image alt="Logo image" src="/icon.png" width={23} height={23} />

        <h1 className="pl-2 font-bold">
          Dev<span className="p-0 m-0 text-primary-500">OverFlow</span>
        </h1>
      </Link>

      <div className="hidden md:block">Search</div>
      <div className="flex-between gap-x-2 px-3 md:px-5">
        <ThemeToggle />
        <div>Profile logo</div>
      </div>
    </nav>
  );
};

export default Navbar;
