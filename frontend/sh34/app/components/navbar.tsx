import Link from 'next/link';
import Image from 'next/image';

import header from "./../images/header-logo.svg"
import profile from "./../images/profile-pic.svg"

export const Navbar = () => {
    return (
      <header>
        <nav className="h-1/10 top-0">
          <div className="flex justify-between items-center relative bg-white p-5">
                <li className='list-none'>
                  <Link href="home">
                    <h1 className="text-black text-2xl font-bold align-center"><Image src={header} width={100} height={50}alt="Home" /></h1>
                  </Link>
                </li>
                <li className="list-none ">
                  <Link href="/profile">
                    <h1 className="text-black text-2xl font-bold align-right"><Image src={profile} width={60} height={60}alt="profile" /></h1>
                  </Link>
                </li>
          </div>
        </nav>
      </header>
    );
  };