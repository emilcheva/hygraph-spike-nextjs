"use client";
// import Link from 'next/link';
import { Link } from "@/navigation";
// import { usePathname } from 'next/navigation';
import { usePathname } from "@/navigation";
import logo from "@/public/images/header-logo.svg";
import Image from "next/image";

const NavLinks = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "Partners", path: "/partners" },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const isActive = (path: string) => path === pathname;

  return (
    <nav className="flex h-32 w-full items-center justify-between">
      <div>
        <Link href="/">
          <Image src={logo} alt="NextIntl" />
        </Link>
      </div>
      <ul className="flex space-x-10">
        {NavLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={link.path}
                className={
                  isActive(link.path)
                    ? "underline decoration-red-500 decoration-4"
                    : ""
                }
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex space-x-10">
        <Link href={pathname} locale="en">
          🏴󠁧󠁢󠁥󠁮󠁧󠁿 English
        </Link>
        <Link href={pathname} locale="bg">
          🇧🇬 Български
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
