import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="w-full flex justify-between items-baseline py-4 px-8">
      <ul className="lg:flex items-baseline space-x-16 text-base">
        <li className="font-heading text-xl font-bold">
          <Link href="/">Rademacher Solutions</Link>
        </li>
        <li>
          <Link href="/business">Business solutions</Link>
        </li>
        <li>
          <Link href="/personal">Personal solutions</Link>
        </li>
      </ul>
      <ul className="lg:flex items-center space-x-8 text-sm hidden">
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
