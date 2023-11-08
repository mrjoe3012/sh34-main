import Link from 'next/link';
import Image from 'next/image';
import { Main } from 'next/document';
import { Navbar } from '../Navbar/page';

// import Logo from "./../images/Logo.jpg"

export default function Home() {
    return (
      <div>
        <Navbar />
        <Body />
      </div>
    );
  }

  
function Body() {
  return (
    <div className="bg-RES_SAGE">
      <Templates />
      <Companies />
    </div>
  );
}

function Templates(){
  return(<p>This will hold the Recent templates</p>);
}

function Companies(){
  return(
    <div>
      <br></br><br></br><br></br><br></br>
      <h1 className='text-3xl'>All Companies</h1>
        <CompanyHeader />
        <CompanyElement />
        <CompanyElement />
        <CompanyElement />
        <CompanyElement />
    </div>
  );
}

function CompanyHeader(){
  return(
    <div className='inherit'>
      <div className='grid grid-cols-8 p-4'>
        <div className='col-start-2 col-end-3'>
          <h2 className="text-lg">Company Name</h2>
        </div>
        <div className='col-start-3 col-end-4'>
          <h2 className='text-lg'>Number of Assets</h2>
        </div>
      </div>
      <hr className="h-0.5 bg-white"></hr>
    </div>
  );
}

function CompanyElement(){
  return(
    <div>
      <div className='grid grid-cols-8 p-4'>
        <div className='text-center'>
            <h1 className='text-lg '>LOGO</h1>
        </div>
          <div className=''>
            <h2 className=''>Company</h2>
          </div>
        <div className=''>
            <h2 className=''>NUMBER</h2>
          </div>
        <div className='col-start-8'>
          <ViewPortfolio />
        </div>
      </div>
      <hr className="h-0.5 bg-GRIDLINES border-none mr-4 ml-"></hr>
    </div>

  );
}

function ViewPortfolio(){
  return(
    <div className='text-center'>
      <div className="grid grid-cols-3 rounded-xl p-4 bg-RES_BLUE border-black border-2">
        <p className=''>little img</p>
        <p className="text-black col-span-2">View Portfolio</p>
      </div>
    </div>
  );
}

function MainElement() {
  return (
    <div className="p-4">
      <div className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-400">
        <p className="text-black">
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

  
 