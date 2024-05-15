"use client";
import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "@/components/Navbar/Navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <div className="flex container justify-between items-center">
      <header>
        <Link href={"/"} className="flex items-center justify-center gap-5">
          <Image src={logoImg} alt="" width={100} height={100} priority />
          <span className="text-slate-200 font-extrabold text-4xl ">NEXT LEVEL FOOD</span>
        </Link>
      </header>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href={"/meals"} className={`${path.startsWith("/meals") ? classes.active : ""}`}>
              Browse Meals
            </Link>
          </li>
          <li>
            <Link href={"/community"} className={`${path.startsWith("/community") ? classes.active : ""}`}>
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
