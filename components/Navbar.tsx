import Link from "next/link";
import React from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    //   <nav className={styles["menu-container"]}>
    //     <ActiveLink text="Home" href="/"></ActiveLink>
    //     <ActiveLink text="About" href="/about"></ActiveLink>
    //     <ActiveLink text="Contact" href="/contact"></ActiveLink>
    //   </nav>
    // );
    <nav className={styles["menu-container"]}>
      {menuItems.map((menuItem, index) => (
        <ActiveLink key={index} text={menuItem.text} href={menuItem.href} />
      ))}
    </nav>
  );
};
