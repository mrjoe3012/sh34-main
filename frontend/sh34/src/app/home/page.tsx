import Link from 'next/link';
import Image from 'next/image'
// import Logo from "./../images/Logo.jpg"

export default function GuccHome() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <body>
        </body> 
      </div> 
    );
  }

  
function About() {
  return (
    <div>
      <MainElement />
      <MainElement />
      <MainElement />
    </div>
  );
}

function MainElement() {
  return (
    <div className="p-4">
      <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-2 dark:bg-slate-400">
        <p className="text-black inline-block">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

function Sidebar() {
    return (
      <div className="h-full bg-slate-50">
        {/* <HomeButton /> */}
        <div className="h-5/6 pt-6 flex flex-col space-y-6">
          <SidebarElement />
          <SidebarElement />
          <SidebarElement />
          <SidebarElement />
          <SidebarElement />
        </div>
      </div>
    );
  }

  function SidebarElement() {
    return (
      <div className="rounded h-1/4 bg-slate-500 mx-2">
        <Link href="/">
          <button>
            <h1 className="text-lg">Event</h1>
            <h2 className="text-base">Date</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
          </button>
        </Link>
      </div>
        
  
    );
  }

  function HomeButton(){
    return (
      <div className="relative w-16 h-16 ">
        <Link href="/">
          {/* <Image src={Logo} alt="test" fill={true} className="self-center rounded"/> */}
        </Link>
      </div>
    )
  }

  
 export const Navbar = () => {
    return (
      <nav className="h-1/10 bg-orange-400 p-6">
        <div className="flex justify-around items-center relative">
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
    );
  };