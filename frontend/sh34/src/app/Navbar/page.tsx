import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
    return (
      <header>
        <nav className="h-1/10 top-0">
          <div className="flex justify-around items-center relative bg-RES_ORANGE p-5">
            {/* <ul className=""> */}
              {/* <li>
                <HomeButton />
              </li> */}
                <li className='list-none'>
                  <Link href="/home">
                    <h1 className="text-black text-2xl font-bold align-middle">Home</h1>
                  </Link>
                </li>
                <li className="list-none">
                  <Link href="/">
                    <h1 className="text-black text-2xl font-bold">Assets</h1>
                  </Link>
                </li>
                <li className="list-none">
                  <Link href="/">
                    <h1 className="text-black text-2xl font-bold">Example</h1>
                  </Link>
                </li>
                <li className="list-none">
                  <Link href="/inventory">
                    <h1 className="text-black text-2xl font-bold">Example</h1>
                  </Link>
                </li>
          {/* </ul> */}
          </div>
        </nav>
      </header>
    );
  };