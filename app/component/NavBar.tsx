"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { CustomButton, MobileMenu } from ".";
import { MouseEvent, useState } from "react";

export const goToSction = (e: string, event: MouseEvent) => {
  const item = document.getElementById(e);
  const target = event.target as HTMLInputElement;
  if (item?.id.trim() === "home") {
    document.body.scrollTop = 0;
    document.documentElement.scrollIntoView({
      behavior: "smooth",
    });
  } else {
    item
      ? item.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      : "";
  }
  // start Active class
  const allBtns = document.querySelectorAll("nav .m");
  allBtns.forEach((btn) => {
    btn.classList.remove("btns_m");
    target.classList.add("btns_m");
  });
  // start Active class
};
const NavBar = () => {
  const [menuCtrl, SetmenuCtrl] = useState("");
  const [isMobile, SetisMobile] = useState(false);
  const IsmobileHandle = (SetisMobile: void) => {
    const menuIcon = document.querySelector(".menu-icon-border");

    if (isMobile) {
      SetmenuCtrl("max-md:flex");
      menuIcon?.classList.add("border-menu");
    } else {
      menuIcon?.classList.remove("border-menu");
      SetmenuCtrl("max-md:hidden");
    }
  };
  return (
    <nav className="padding-container flex  justify-between items-center px-6 py-4 h-[72] shadow-lg fixed w-full z-30 top-0 bg-white ">
      <Link href="/">
        <Image
          src="./hilink-logo.svg"
          width={74}
          height={20}
          alt="Travel Logo"
          className="cursor-pointer"
        />
      </Link>
      <ul className="flex items-center justify-between gap-0 md:gap-5 h-auto">
        <div>
          <Image
            src="/menu.svg"
            alt="Menu Icon"
            width={40}
            height={40}
            className="flex md:hidden cursor-pointer h-full py-1 px-1 menu-icon-border"
            onClick={() => IsmobileHandle(SetisMobile(!isMobile))}
          />
        </div>
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            className="hover:text-green-600 text-gray-700 transition-all ease-in-out hidden md:flex m"
            onClick={(event) => goToSction(link.id, event)}
          >
            {link.label}
          </button>
        ))}
        <div>
          <MobileMenu CtrlStyles={`${menuCtrl}`} />

          <CustomButton
            styling="text-white bg-gray-700  hover:bg-gray-900 md:flex hidden"
            lable="Login"
            source="/user.svg"
            h="/Login"
          />
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
