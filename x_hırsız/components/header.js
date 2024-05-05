import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="fixed inset-0 z-10 block h-max w-full max-w-full rounded-none bg-my-siyah bg-opacity-0 py-2 px-4 text-my-navgri backdrop-blur-xl lg:px-8 lg:py-4">
        <div className="flex items-center text-my-navgri">
          <a href="/" className="mr-4 block cursor-pointer py-1.5 text-base font-medium leading-relaxed text-inherit antialiased">
            <img alt="" className="h-12 lg:h-16 xl:h-20 2xl:ml-16" src="images/bbsmlogo3.webp" />
          </a>
          <button onClick={toggleMenu} className="ml-auto lg:hidden block p-3 font-bold text-lg leading-tight antialiased">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <ul className={`ml-auto 2xl:mr-20 ${isOpen ? 'block' : 'hidden'} lg:flex`}>
            <li className="block p-6 font-bold text-lg leading-tight antialiased">
              <Link href="/">
                Ana Sayfa
              </Link>
            </li>
            <li className="block p-6 font-bold text-lg leading-tight antialiased">
              <Link href="/projeler">
                Projeler
              </Link>
            </li>
            <li className="block p-6 font-bold text-lg leading-tight antialiased">
              <Link href="/cozumler">
                Çözümler
              </Link>
            </li>
            <li className="block p-6 font-bold text-lg leading-tight antialiased">
              <Link href="/hakkimizda">
                Hakkımızda
              </Link>
            </li>
            <li className="block p-6 font-bold text-lg leading-tight antialiased">
              <Link href="/bizeulasin">
                Bize Ulaşın
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
