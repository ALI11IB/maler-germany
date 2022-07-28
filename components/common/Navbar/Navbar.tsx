import { FC } from "react";
import Link from "next/link";
import s from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <div className={s.root}>
      <div className="flex flex-1 items-center">
        <Link href="/">
          <a className={s.logo}>NEXT_STORE</a>
        </Link>
        <nav className="ml-6 space-x-6">
          <Link href="/">
            <a className={s.link}>All</a>
          </Link>
          <Link href="/">
            <a className={s.link}>Clothes</a>
          </Link>
          <Link href="/">
            <a className={s.link}>Accesories</a>
          </Link>
          <Link href="/">
            <a className={s.link}>Shoes</a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
