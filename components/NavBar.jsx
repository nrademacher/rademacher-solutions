import Link from 'next/link';
import {MobileDropdown} from './MobileDropdown'

export function NavBar() {
  return (
    <nav className="flex justify-between items-center py-8 px-8 w-full h-[8vh]">
      <ul className="items-center space-x-8 lg:space-x-16 text-sm flex">
        <li className="flex items-center text-sm md:text-xl font-bold font-heading">
          <img
            src="/logo.svg"
            className="w-6 md:w-8 mr-1 md:mr-2 hover:animate-spin-slow"
            alt="Logo"
          />
          <Link href="/">Rademacher Solutions</Link>
        </li>
        <li className="hidden md:inline-block hover:text-blue-6">
          <Link href="/business">For Businesses</Link>
        </li>
        <li className="hidden md:inline-block hover:text-grape-6">
          <Link href="/personal">For Individuals</Link>
        </li>
        <li className="hidden md:inline-block hover:text-yellow-6">
          <Link href="/wildcard">Wildcard</Link>
        </li>
      </ul>
    <ul className="hidden md:flex lg:hidden text-xs">
        <li className="hover:text-yellow-6">
          <Link href="/personal">More</Link>
        </li>
    </ul>
      <ul className="hidden items-baseline space-x-8 text-xs text-gray-7 lg:flex">
        <li className="hover:text-gray-9">
          <Link href="/faq">FAQ</Link>
        </li>
        <li className="hover:text-gray-9">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-gray-9">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    <MobileDropdown />
    </nav>
  );
}
