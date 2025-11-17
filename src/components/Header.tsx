// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/lib/authContext';
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, loading, logout } = useAuth();

  return (
    <nav id="header" className="w-full z-30 top-0 py-1 bg-white shadow">
      <div className="w-full max-w-[1920px] mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

        {/* hamburger (md:hidden) */}
        <button
          aria-label="Toggle menu"
          className="cursor-pointer md:hidden block"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        {/* brand */}
        <div className="order-1 md:order-2">
          <Link
            href="/"
            className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
          >
            <Image
              src="http://localhost:3000/media/dev-images/AKER-PATENT-LOGO_1.png"          
              alt="Aker"
              width={40}
              height={40}
              style={{ paddingRight: 10 }} 
            />
            PROKVK
          </Link>
        </div>


        {/* right-side icons */}
        <div className="order-2 md:order-3 flex items-center text-gray-900" id="nav-content">
          {loading ? (
              <li className="py-2 px-4">
                <div className="h-6 w-24 rounded bg-gray-200 animate-pulse" />
              </li>
            ) : user ? (
              <>
                <Link href="/profile" title="Profil" className="inline-block no-underline hover:text-black" style={{ paddingRight: 10 }} >
                  {/* user icon */}
                  <svg
                    className="w-6 h-6 fill-current text-gray-900 hover:text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <circle fill="none" cx="12" cy="7" r="3" />
                    <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3,1.346 3,3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                  </svg>
                </Link>
                <Link href="/" 
                  onClick={(e) => {
                    e.preventDefault(); // Link'in kendi navigate etmesini durdur
                    confirm('Çıkış yapmak istediğinize emin misiniz?') &&
                    logout();
                  }}
                  title="Çıkış"
                  className="inline-block no-underline hover:text-black">
                  {/* user icon */}
                  <svg fill="#000000" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                      viewBox="0 0 490.3 490.3" xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3
                          s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6
                          c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1
                          C27.9,58.95,0,86.75,0,121.05z"/>
                        <path d="M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9
                          c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63
                          C380.6,325.15,380.6,332.95,385.4,337.65z"/>
                      </g>
                    </g>
                    </svg>
                </Link>
              </>
              
            ) : (
              <Link href="/profile" title="Login" className="inline-block no-underline hover:text-black" style={{ paddingRight: 10 }} >
                {/* user icon */}
                <svg
                  className="w-6 h-6 fill-current text-gray-900 hover:text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <circle fill="none" cx="12" cy="7" r="3" />
                  <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3,1.346 3,3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                </svg>
              </Link>
            )}
          

          
          
        </div>
      </div>
    </nav>
  );
}
