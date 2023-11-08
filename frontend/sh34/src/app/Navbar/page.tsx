import Link from 'next/link';
import Image from 'next/image';

import header from "./../images/header-logo.svg"


export const Navbar = () => {
    return (
      <header>
        <nav className="h-1/10 top-0">
          <div className="flex justify-between items-center relative bg-white p-5">
            {/* <ul className=""> */}
              {/* <li>
                <HomeButton />
              </li> */}
                <li className='list-none'>
                  <Link href="/home">
                    <h1 className="text-black text-2xl font-bold align-center"><Image src={header} width={100} height={50}alt="Home" /></h1>
                  </Link>
                </li>
                {/* <li className="list-none">
                  <Link href="/">
                    <h1 className="text-black text-2xl font-bold">Assets</h1>
                  </Link>
                </li>
                <li className="list-none">
                  <Link href="/">
                    <h1 className="text-black text-2xl font-bold">Example</h1>
                  </Link>
                </li> */}
                <li className="list-none ">
                  <Link href="/profile">
                    <h1 className="text-black text-2xl font-bold align-right">Profile</h1>
                  </Link>
                </li>
          {/* </ul> */}
          </div>
        </nav>
      </header>
    );
  };