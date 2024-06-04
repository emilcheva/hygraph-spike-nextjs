"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Partners", path: "/partners" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <nav className="flex h-32 w-full items-center justify-between">
      <div>
        <Link href="/">
          <p className="text-2xl font-bold">
            Next<span className="text-blue-500">Intl</span>
          </p>
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
                    ? "underline decoration-blue-500 decoration-4"
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
