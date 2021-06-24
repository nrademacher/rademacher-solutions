import Link from 'next/link';

export function MobileDropdown() {
  return (
    <span className="inline-block md:hidden dropdown dropdown-end">
      <div tabIndex="0" className="bg-white cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <ul className="bg-white shadow menu dropdown-content w-[50vw]">
        <li className="">
          <Link href="/">Home</Link>
        </li>
        <li className="">
          <Link href="/business">Business solutions</Link>
        </li>
        <li className="">
          <Link href="/personal">Personal solutions</Link>
        </li>
        <li className="mx-auto w-full border-gray-3 border-t-[1px]" />
        <li className="text-sm">
          <Link href="/faq">FAQ</Link>
        </li>
        <li className="text-sm">
          <Link href="/about">About</Link>
        </li>
        <li className="text-sm">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </span>
  );
}
